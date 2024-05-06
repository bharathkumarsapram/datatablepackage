import React, { FC, ReactElement } from 'react';
import { LoaderProps } from '@type/component';

/**
 * Global loader
 * @param showtext Display loader text or not
 * @returns
 */
const LoadingIndicator: FC<LoaderProps> = ({ showText }): ReactElement => {
	return (
		
		<div className='w-full px-2.5 py-2 bg-white bg-opacity-75 flex justify-center transition-all duration-200 ease-in-out absolute top-10 '>
		<div className='text-xl'>Processing...</div>{showText}
	</div>
	);
};

export default LoadingIndicator;
