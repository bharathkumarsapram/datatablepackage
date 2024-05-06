export const IMAGE_BASE_URL = process.env.REACT_APP_API_BASENODE;
export const REACT_APP_API_GATEWAY_URL = process.env.REACT_APP_API_GATEWAY_URL;
export const REACT_APP_ENCRYPTION_DECRYPTION_KEY = process.env.REACT_APP_ENCRYPTION_DECRYPTION_KEY;
export const NODE_ENV = process.env.NODE_ENV;

export const sortOrder = 'desc';
export const sortBy = 'created_at';


export const DATE_FORMAT = {
	dateFormat: 'MM/dd/yyyy hh:mm:ss',
	dateShortFormat: 'MM/dd/yyyy',
	momentDateTime24Format: 'MM/DD/YYYY hh:mm:ss',
	momentDateTime12Format: 'MM/DD/YYYY h:mm A',
	momentTime24Format: 'hh:mm:ss',
	momentTime12Format: 'hh:mm A',
	momentDateOfBirth: 'DD/MM/YYYY',
	momentDateFormat: 'MM/DD/YYYY',
	DateHoursMinFormat: 'YYYY-MM-DD hh:mm',
	DateHoursMinSecFormat: 'YYYY-MM-DD hh:mm:ss',
	simpleDateFormat: 'YYYY-MM-DD',
};

export enum AccesibilityNames {
	Edit = 'Edit',
	View = 'View',
	Delete = 'Delete',
	ChangeStatus = 'Change Status',
	ChangePassword = 'Change Password',
	Status = 'Status',
	Entries = 'Entries',
	sortOrder = 'SortOrder',
	sortBy = 'sortBy',
	role = 'Role',
	gender = 'Gender',
	goToFirst = 'Go to first',
	gotoEnd = 'Go to end',
	next = 'Next',
	previous = 'Previous',
	profile = 'Profile',

}

export enum BadgesCodeEnum {
	Pending = 4,
	Working = 5,
	Closed = 6,
}

export enum BadgesColor {
	Pending = 'badge-secondary',
	Working = 'badge-success',
	Closed = 'badge-danger',
}



export const DELETE_WARING_TEXT = 'Are you sure want to delete this record ?';

export const CHANGESTATUS_WARING_TEXT = 'Are you sure want to change status ?';

export const GROUP_DELETE_WARING_TEXT = 'Are you sure want to delete this records ?';

export const PAGE_LENGTH = 2;

export const DEFAULT_LIMIT = 10;
export const DEFAULT_PAGE = 1;

export const SHOW_PAGE_COUNT_ARR = [10, 20, 30, 40, 50];
export const SHOW_PAGE_COUNT_ARR1 = [
	{ name: '10', key: 10 },
	{ name: '20', key: 20 },
	{ name: '30', key: 30 },
];

export const STATUS_DRP = [
	{ name: 'Select Status', key: '' },
	{ name: 'Active', key: '1' },
	{ name: 'Inactive', key: '0' },
];
export const ROUTES: { [key: string]: string } = {
	login: 'login',
	subAdmin: 'sub-admin',
};
export const RedirectPages = {
	subAdmin: `/${ROUTES.app}/${ROUTES.subAdmin}`,
};

export const MAX_DISPLAY_PAGE_COUNT = 3;

export const STATUS = {
	inactive: 0,
	active: 1,
	draft: 2,
	deleted: 3,
	Pending: 4,
	Working: 5,
	Closed: 6,
	Accepted: 7,
	Rejected: 8,
};

export const IS_ALL = true;


//Default status is used is used in some of the based on requirement ...
export const DEFAULT_STATUS = '1';