import React from 'react';
import { DropdownProps, DropdownOptionType } from '@type/component';

const Dropdown = ({ id, placeholder, name, onChange, options, label, error, value, inputIcon, disabled, note, className = '', required = false, ariaLabel = '' }: DropdownProps) => {
	return (
		<div className={`${className} ${'form-group'}`}>
			{label && (
				<label htmlFor={id}>
					{label} {required && <span className='text-error'> *</span>}
				</label>
			)}
			<div className={`${'input-group'} ${inputIcon ? 'with-icon' : ''}`}>
				<select aria-label={ariaLabel} className={`${'form-control'} ${'custom-select'} ${error ? 'error' : ''}`} id={id} onChange={onChange} name={name} value={value} disabled={disabled}>
					{placeholder && <option value=''>{placeholder}</option>}
					{options?.map((data: DropdownOptionType) => {
						return (
							<option value={data.key} key={data.key}>
								{data.name as string}
							</option>
						);
					})}
				</select>
			</div>

			{error && <p className='error '>{error}</p>}
			{note && <p className='my-1 text-sm font-medium text-black'>{note}</p>}
		</div>
	);
};

export default React.memo(Dropdown);
