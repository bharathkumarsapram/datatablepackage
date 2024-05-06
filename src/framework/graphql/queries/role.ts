import { gql } from '@apollo/client';
import { META_FRAGMENT } from '@framework/graphql/fragments';

export const GET_ROLES_DATALIST = gql`
	${META_FRAGMENT}
	query FetchRoles($isAll: Boolean) {
		fetchRoles(is_all: $isAll) {
		  data {
			Roledata {
			  id
			  uuid
			  role_name
			  key
			  status
			  created_at
			  updated_at
			  serialNo
			}
			count
		  }
		  meta {
			...MetaFragment
		  }
		}
	  }
`;
