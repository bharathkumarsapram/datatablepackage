import { DefaultTFuncReturn } from 'i18next';
import React, { ReactNode } from 'react';

export type TextInputProps = {
	id?: string;
	required?: boolean;
	label?: string | DefaultTFuncReturn;
	placeholder: string;
	name?: string;
	type?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	value?: string | number;
	error?: string | string[];
	note?: string;
	inputIcon?: React.JSXElementConstructor;
	disabled?: boolean;
	hidden?: boolean;
	loginInput?: boolean;
	max?: string;
	disabled: boolean;
	min?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
	password?: boolean;
	className?: string;
	btnShowHideFun?: () => void;
	btnShowHide?: boolean;
	autoComplete?: string;
};
export type ButtonProps = {
	label?: string | DefaultTFuncReturn;
	className?: string;
	type?: 'submit' | 'button';
	primary?: boolean;
	secondary?: boolean;
	warning?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement> | unknown;
	data?: CommonDataArrOfModules;
	setObj?: React<SetStateAction<data>>;
	setIsDelete?: React<SetStateAction<boolean>>;
	route?: string;
	id?: string;
	setIsChangePassword?: React<SetStateAction<boolean>>;
	icon?: ReactElement;
	spanClassName?: string;
	title?: string;
};

export type DropdownProps = {
	id?: string;
	required?: boolean;
	label?: string | DefaultTFuncReturn;
	placeholder?: string | null;
	name?: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
	value?: number | string;
	error?: string;
	options: StatusOptionType[];
	inputIcon?: React.JSXElementConstructor;
	disabled?: boolean;
	note?: string;
	className?: string;
	ariaLabel?: string;
};

export type DropdownOptionType = {
	name: string | number;
	key: number | string;
};


export type SelectBoxProps = {
	id?: string;
	label?: string | DefaultTFuncReturn;
	name?: string;
	type?: 'text' | 'password';
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	value?: string | number;
	error?: string;
	note?: string;
	option?: ISelectBoxOption[];
	inputIcon?: React.JSXElementConstructor;
	disabled?: boolean;
	placeholder?: string;
	required?: boolean;
};
export type ISelectBoxOption = {
	name: string | number;
	key: number | string;
	disabled?: boolean;
};

export type TDatePicker = {
	id?: string;
	label?: string | DefaultTFuncReturn;
	name?: string;
	onChange?(event: CalendarChangeEvent): void;
	value?: date;
	error?: string;
	note?: string;
	min?: Date;
	max?: Date;
	inputIcon?: React.JSXElementConstructor;
	dateFormat?: string;
	placeholder?: string;
	required?: boolean;
	showTime?: boolean;
	hourFormat?: '12' | '24';
	disabled?: boolean;
	numberOfMonths?: number;
	selectionMode?: 'single' | 'multiple' | 'range';
	showIcon?: boolean;
	view?: 'month' | 'year' | 'date';
};
export type CommonDataArrOfModules = RoleDataArr | FetchCouponsDataArr | EnquiryDataArr | NotificationDataArr | SuggestionDataArr | BannerDataArr | SubAdminDataArr | EnquiryDataArr | NotificationDataArr | CategoryDataArr | CmsDataArr | ReviewUserDataArr | FaqDataArr | CityDataArr | RoleDataArr | StateDataArr | CountryDataArr | EmailNotificationTemplateDataArr;

export type LoaderProps = {
	showText?: boolean;
};

export interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (newPage: number, newRecordsPerPage?: number) => void;
	recordsPerPage?: number; // this is kept for future enchancement of the code based on the BE side changes.....;
}

export type OptionsPropsForButton = {
	route?: string | undefined;
	data?: CommonDataArrOfModules;
	navigateRoute?: () => void;
	viewNavigateRoute?: () => void;
};

export type CommonModelProps = {
	onClose: () => void;
	action?: () => void;
	show?: boolean;
	warningText?: string;
	actionLabel?: string;
	onCloseLabel?: string;
	headerTitle?: string;
	modalBody?: ReactElement;
	modalFooter?: ReactElement;
};
export type ImageDataProps = {
	onClose: () => void;
	data: string;
	show?: boolean;
};
export type DescriptionDataProps = {
	onClose: () => void;
	data: string;
	show?: boolean;
};
export type CompressSvg = {
  className?: string;
  onClick: () => void;
};
export type ExpandSvg = {
  className?: string;
  onClick: () => void;
};
export type IconSvg = {
	className?: string;
	fontSize?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  marginleft?: string;
  marginbottom?: string;
};