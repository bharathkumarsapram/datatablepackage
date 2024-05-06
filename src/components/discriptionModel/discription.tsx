import React, { useEffect } from 'react';
import Button from '@components/button/button';
import { Cross, Message } from '@components/icons/icons';
import { DescriptionDataProps } from '@type/component';

const DescriptionModel = ({ onClose, data, show }: DescriptionDataProps) => {
	/**
	 * Method that closes pop on outeside click
	 */
	useEffect(() => {
		document.addEventListener('click', (event: globalThis.MouseEvent) => {
			if ((event.target as HTMLElement)?.id === 'description-model' || (event.target as HTMLElement)?.id === 'description-model-child') {
				onClose();
			}
		});
	}, [show]);
	return (
		<div id='description-model' tabIndex={-1} data-modal-show={true} aria-hidden='false' className={`${show ? '' : 'hidden'} model-container`}>
			<div id='description-model-child' className={'model animate-fade-in'}>
				<div className='model-content-discription-model '>
					<div className='model-header'>
						<div className='flex items-center'>
							<span className='w-wide-1 h-rise-1 mr-1 fill-white text-white svg-icon inline-block'>
								<Message />
							</span>
							<span className='model-title'>{'Description'}</span>
						</div>
						<Button onClick={onClose}>
							<span className='mr-1 text-white w-2.5 h-2.5 inline-block svg-icon'>
								<Cross />
							</span>
						</Button>
					</div>
					<div className='model-body  overflow-y-auto'>
						<div className='whitespace-nowrap'>{data}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DescriptionModel;
