import { gql } from '@apollo/client';
import { META_FRAGMENT } from '@framework/graphql/fragments';

export const LOGIN_USER = gql`
	${META_FRAGMENT}
	mutation Mutation($email: String, $password: String) {
		loginUser(email: $email, password: $password) {
			data {
				user {
					id
					uuid
					first_name
					middle_name
					last_name
					user_name
					email
					gender
					date_of_birth
					phone_no
					phone_country_id
					role
					user_type
					profile_img
					device_type
					status
					created_at
					updated_at
				}
				token
				refreshToken
				permissions
				expiresIn
				expiresAt
			}
			meta {
				...MetaFragment
			}
		}
	}
`;
