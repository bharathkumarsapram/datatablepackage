
export type RoleDataArr = {
	created_at: string;
	key: string;
	role_name: string;
	status: number;
	updated_at: string;
	uuid: string;
	id: string;
	uuid: string;
	serialNo: number;
};

export type MetaRes = {
	message: string;
	messageCode: string;
	status: string;
	statusCode: number;
	status: string;
	type: string;
	errors: { errorField: string; error: string; __typename: string }[];
	errorType: string;
};
export type LoginResponse = {
	loginUser: {
		data: {
			token: string;
			user: {
				email: string;
				uuid: string;
				first_name: string;
				last_name: string;
				profile_img: string;
				id: string;
			};
			expiresIn: string;
			permissions: string[];
			refreshToken: string;
			expiresAt: string;
		};
		meta: MetaRes;
	};
};