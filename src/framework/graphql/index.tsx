import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { REACT_APP_API_GATEWAY_URL } from '@config/constant';
import { onError } from '@apollo/client/link/error';
import { errorHandler } from '@utils/helpers';
import { MetaRes } from './graphql';

// Define environment variables

// HTTP Link
const httpLink = createHttpLink({
	uri: REACT_APP_API_GATEWAY_URL,
});

// Authentication Link
const authLink = setContext((_, { headers }) => {
	const encryptedToken = localStorage.getItem('authToken');
	const token = encryptedToken ?? '';
	const encryptedParamToken = localStorage.getItem('param');
	const paramToken = encryptedParamToken ?? '';
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : `Bearer ${paramToken}`,
		},
	};
});

// Error Handling Link
const errorLink = onError(({ graphQLErrors, forward, operation }) => {
	if (graphQLErrors?.length) {
		for (const err of graphQLErrors) {
			if (err.extensions?.code === 'INVALID_TOKEN') {
				const encryptedToken = localStorage.getItem('refreshToken') as string;
				const refreshToken = encryptedToken;
				// Adjust based on how you store refresh token
				if (!refreshToken) {
					localStorage.removeItem('authToken'); // Clear token
					return;
				}
			} else {
				errorHandler(err?.extensions?.meta as MetaRes);
			}
		}
	}
});

// Apollo Client
const client = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache: new InMemoryCache(),
});

export default client;
