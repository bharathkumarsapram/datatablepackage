import { gql } from '@apollo/client';
import { META_FRAGMENT } from '@framework/graphql/fragments';

export const CHANGE_SUBADMIN_STATUS = gql`
	${META_FRAGMENT}
	mutation ChangeSubAdminStatus($changeSubAdminStatusId: UUID, $status: Int) {
		changeSubAdminStatus(uuid: $changeSubAdminStatusId, status: $status) {
			data {
				id
				first_name
				last_name
				user_name
				email
				role
				status
				created_at
				updated_at
			}
			meta {
				...MetaFragment
			}
		}
	}
`;

export const DELETE_SUBADMIN = gql`
	${META_FRAGMENT}
	mutation DeleteSubAdmin($deleteSubAdminId: UUID) {
		deleteSubAdmin(uuid: $deleteSubAdminId) {
			meta {
				...MetaFragment
			}
		}
	}
`;


export const GROUP_DELETE_SUBADMIN = gql`
	${META_FRAGMENT}
	mutation GroupDeleteSubAdmins($groupDeleteSubAdminsId: [UUID]) {
		groupDeleteSubAdmins(uuid: $groupDeleteSubAdminsId) {
			meta {
				...MetaFragment
			}
		}
	}
`;
