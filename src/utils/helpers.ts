import { DATE_FORMAT, ROUTES,} from '@config/constant';

import moment from 'moment';
import { toast } from 'react-toastify';
import { MetaRes } from '@framework/graphql/graphql';
/**
 * Method used to get date from time stamp
 * @param date
 * @returns date in 24 hours format
 */
export const getDateFromTimestamp = (date: string) => {
	return moment(moment(parseInt(date)).format()).format(DATE_FORMAT.momentDateTime24Format);
};
/**
 * Method that used to convert date to required format
 * @param date
 * @param formatType
 * @returns return date in given format
 */
export const getDateFromat = (date?: string, formatType?: string) => {
	return moment(date).format(formatType);
};
/**
 *Method used to get date in LTS format
 * @param date
 * @returns date in LTS format
 */
export const getDateTimeFromTimestamp = (date: string) => {
	return moment(moment(parseInt(date)).format()).format('LTS');
};
/**
 * Method used to return string
 * @param text
 * @returns text
 */
export const translationFun = (text: string) => {
	return text;
};

export const errorHandler = async (error: MetaRes, callBack?: CallableFunction) => {
	const errorData = error;
	if (errorData?.messageCode.includes('INVALID_REFRESH_TOKEN')) {
		localStorage.clear();
		sessionStorage.clear();
		window.location.href = `/${ROUTES.login}`;
	} else if (Array.isArray(errorData?.errors) && errorData?.errors?.length > 0) {
		errorData.errors.forEach((err) => {
			toast.error(err?.error);
		});
	} else if (errorData?.message) {
		if (!errorData?.messageCode?.includes('NOT_FOUND')) {
			toast.error(errorData?.message);
		}
	} else {
		const message = 'SOMETHING_WENT_WRONG';
		toast.error(message);
	}

	if (callBack) {
		callBack();
	}
};
export const getUserPermissions = () => {
	const EncryptedPermissions = localStorage.getItem('permissions');
	const DecryptedPermissions = EncryptedPermissions;
	const userPermissions = Permissions && JSON.parse(DecryptedPermissions ?? '');
	return userPermissions;
};
