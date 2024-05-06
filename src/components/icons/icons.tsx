import { ExpandSvg, IconSvg } from '@type/component';
import React from 'react';

const Expand = ({ onClick }: ExpandSvg) => {
	return (
		<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18' onClick={onClick}>
			<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0.6' d='M13 17v-4h4M1 5h4V1M1 13h4v4m8-16v4h4' />
		</svg>
	);
};


const AngleRight = () => (
	<svg viewBox='0 0 24 24' fill='currentColor'>
		<path d='M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z' />
	</svg>
);
const AngleDownSidebar = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 14 8'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1' />
	</svg>
);
const UserIcon = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
		<path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
	</svg>
);

const User = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 14 18'>
		<path d='M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
	</svg>
);

const Trash = () => (
	<svg viewBox='0 0 24 24' fill='currentColor'>
		<path d='M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z' />
		<path d='M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z' />
		<path d='M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z' />
	</svg>
);


const Search = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
	</svg>
);

const Refresh = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 20'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2.4' d='M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97' />
	</svg>
);

const EditIcon = ({ className = '', fontSize = '1em' }: IconSvg) => (
	<svg viewBox='0 0 24 24' fill='currentColor' className={className} style={{ height: fontSize, width: fontSize }}>
		<path d='M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z' />
		<path d='M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z' />
	</svg>
);


const Lock = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 20'>
		<path d='M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z' />
	</svg>
);


const EyeCrossed = () => (
	<svg viewBox='0 0 24 24' fill='currentColor'>
		<path d='M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z' />
	</svg>
);

const Eye = () => (
	<svg viewBox='0 0 24 24' fill='currentColor'>
		<path d='M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z' />
		<path d='M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z' />
	</svg>
);

const Edit = () => (
	<svg viewBox='0 0 24 24' fill='currentColor'>
		<path d='M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z' />
		<path d='M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z' />
	</svg>
);

const CrossCircle = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
	</svg>
);

const CrossCircled = () => (
	<svg viewBox='0 0 24 24' fill='currentColor'>
		<path d='M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z' />
		<path d='M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z' />
	</svg>
);

const Cross = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
	</svg>
);

const DateCalendar = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
		<path
			fill='currentColor'
			d='M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z'
		/>
	</svg>
);

const ArrowSmallLeft = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M13 5H1m0 0 4 4M1 5l4-4' />
	</svg>
);

const Email = () => (
	<svg fill='currentColor' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'>
		<path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
		<path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
	</svg>
);

const DownIcon = () => (
	<svg viewBox='0 0 24 24' fill='currentColor'>
		<path xmlns='http://www.w3.org/2000/svg' d='M6.414,9H17.586a1,1,0,0,1,.707,1.707l-5.586,5.586a1,1,0,0,1-1.414,0L5.707,10.707A1,1,0,0,1,6.414,9Z' />
	</svg>
);


const AngleUp = ({ className = 'ml-1', fontSize = '1em' }: IconSvg) => (
	<svg className={className} style={{ height: fontSize, width: fontSize }} xmlns='http://www.w3.org/2000/svg' fill='#000000' viewBox='-96 0 512 512'>
		<path d='M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z' />
	</svg>
);
const AngleDown = ({ className = 'ml-1', fontSize = '1em' }: IconSvg) => (
	<svg className={className} style={{ height: fontSize, width: fontSize }} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
		<path d='M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z' />
	</svg>
);

const ArrowRight = () => (
	<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 25 25'>
		<polygon points='11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707' stroke='white' />
	</svg>
);
const BackwardIcon = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 12 16'>
		<path d='M10.819.4a1.974 1.974 0 0 0-2.147.33l-6.5 5.773A2.014 2.014 0 0 0 2 6.7V1a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9.3c.055.068.114.133.177.194l6.5 5.773a1.982 1.982 0 0 0 2.147.33A1.977 1.977 0 0 0 12 13.773V2.227A1.977 1.977 0 0 0 10.819.4Z' />
	</svg>
);
const AngleLeftIcon = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 14'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13' />
	</svg>
);

const AngleRightIcon = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 14'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1' />
	</svg>
);
const RecycleIcon = () => (
	<svg width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
		<path stroke='none' d='M0 0h24v24H0z' /> <path d='M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1' /> <path d='M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1' transform='rotate(120 12 13)' /> <path d='M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1' transform='rotate(240 12 13)' />
	</svg>
);
const VideoRecorder = () => (
	<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
		<path strokeLinecap='round' d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z' />
	</svg>
);
const SelectBoxArrowRight = () => (
	<svg xmlns='http://www.w3.org/2000/svg' shapeRendering='geometricPrecision' textRendering='geometricPrecision' imageRendering='optimizeQuality' fillRule='evenodd' clipRule='evenodd' viewBox='0 0 512 478.17'>
		<path
			fillRule='nonzero'
			d='M98.24 433.08h315.52c14.59 0 27.88-5.98 37.52-15.63 9.64-9.64 15.63-22.93 15.63-37.51V98.23c0-14.58-5.99-27.86-15.64-37.51-9.64-9.64-22.92-15.63-37.51-15.63H98.24c-14.59 0-27.88 5.99-37.52 15.63-9.64 9.64-15.63 22.92-15.63 37.51v281.71c0 14.65 5.95 27.93 15.54 37.51l.09.09c9.59 9.59 22.87 15.54 37.52 15.54zm137.87-283.35 84.25 79.73c5.32 5.62 5.07 14.49-.55 19.81l-82.64 78.17a14.064 14.064 0 0 1-10.69 4.91c-7.79 0-14.09-6.31-14.09-14.09V159.91h.07c0-3.46 1.27-6.92 3.84-9.63 5.31-5.62 14.19-5.87 19.81-.55zm177.65 328.44H98.24c-26.92 0-51.42-11.02-69.26-28.79l-.14-.14C11.04 431.41 0 406.87 0 379.94V98.23C0 71.2 11.05 46.64 28.84 28.84 46.64 11.05 71.21 0 98.24 0h315.52c27.03 0 51.6 11.05 69.39 28.85C500.95 46.64 512 71.21 512 98.23v281.71c0 27.02-11.05 51.6-28.84 69.39-17.8 17.79-42.36 28.84-69.4 28.84z'
		/>
	</svg>
);
const SelectBoxArrowLeft = () => (
	<svg xmlns='http://www.w3.org/2000/svg' shapeRendering='geometricPrecision' textRendering='geometricPrecision' imageRendering='optimizeQuality' fillRule='evenodd' clipRule='evenodd' viewBox='0 0 512 478.17'>
		<path
			fillRule='nonzero'
			d='M413.76 45.09H98.24c-14.59 0-27.88 5.99-37.52 15.63-9.64 9.64-15.63 22.93-15.63 37.52v281.7c0 14.58 5.99 27.87 15.64 37.51 9.64 9.64 22.92 15.63 37.51 15.63h315.52c14.59 0 27.88-5.99 37.52-15.63 9.64-9.64 15.63-22.92 15.63-37.51V98.24c0-14.65-5.95-27.93-15.54-37.52l-.09-.09c-9.59-9.59-22.87-15.54-37.52-15.54zM192.19 228.91l83.7-79.18c5.62-5.32 14.5-5.07 19.81.55a13.94 13.94 0 0 1 3.84 9.63h.07v158.35c0 7.78-6.3 14.09-14.09 14.09-4.27 0-8.1-1.9-10.69-4.91l-82.64-78.17c-5.62-5.32-5.87-14.19-.55-19.81l.55-.55zM98.24 0h315.52c26.92 0 51.42 11.02 69.26 28.79l.14.14C500.96 46.77 512 71.3 512 98.24v281.7c0 27.03-11.05 51.6-28.84 69.39-17.8 17.79-42.37 28.84-69.4 28.84H98.24c-27.03 0-51.6-11.05-69.39-28.85C11.05 431.53 0 406.96 0 379.94V98.24c0-27.03 11.05-51.6 28.84-69.4C46.64 11.05 71.2 0 98.24 0z'
		/>
	</svg>
);

const Back = () => (
	<svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 122.88 98.86' xmlSpace='preserve'>
		<g>
			<path d='M0,49.43l48.93,49.43V74.23c30.94-6.41,55.39,0.66,73.95,24.19c-3.22-48.4-36.29-71.76-73.95-73.31V0L0,49.43 L0,49.43L0,49.43z' />
		</g>
	</svg>
);
const StatusIcon = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50px' height='50px' stroke='currentColor'>
		<path d='M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z' />
	</svg>
);
const ForwordIcon = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 12 16'>
		<path d='M11 0a1 1 0 0 0-1 1v5.7a2.028 2.028 0 0 0-.177-.194L3.33.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773A1.88 1.88 0 0 0 10 9.3V15a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z' />
	</svg>
);

const GetDefaultIcon = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' fill='currentColor' viewBox='0 0 320 512'>
			<path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
		</svg>
	);
};

const Info = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
		<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
	</svg>
);

const Message = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 18'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z' />
	</svg>
);

const ProfileIcon = () => (
	<svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 18'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.2' d='M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z' />
	</svg>
);

export {
	ProfileIcon,
	Message,
	Info,
	GetDefaultIcon,
	ForwordIcon,
	ArrowRight,
	AngleDown,
	AngleUp,
	AngleRight,
	User,
	Trash,
	Search,
	Refresh,
	Lock,
	EyeCrossed,
	Eye,
	Edit,
	CrossCircle,
	Cross,
	DateCalendar,
	ArrowSmallLeft,
	Email,
	Expand,
	UserIcon,
	DownIcon,
	EditIcon,
	CrossCircled,
	BackwardIcon,
	AngleLeftIcon,
	AngleRightIcon,
	RecycleIcon,
	VideoRecorder,
	SelectBoxArrowRight,
	SelectBoxArrowLeft,
	Back,
	StatusIcon,
	AngleDownSidebar,
};
