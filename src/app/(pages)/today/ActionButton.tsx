import { ActionButtonProps } from '@/types/types';
import React from 'react';
import { CiSquarePlus } from 'react-icons/ci';

const ActionButton: React.FC<ActionButtonProps> = ({
	text,
	fullWidth = false,
	variant = 'rounded',
	disabled,
	onClick,
}) => {
	return (
		<button
			type='button'
			onClick={onClick}
			disabled={variant === 'square' ? false : disabled}
			className={`relative flex items-center justify-center gap-2.5 ${variant === 'rounded' ? 'rounded-[100px]' : 'rounded-[4px]'} ${fullWidth ? 'w-full' : 'w-fit'} ${disabled ? 'bg-gray-300 text-primary-dark' : 'bg-submit hover:bg-primary'} px-5 py-2.5 duration-200 max-sm:text-sm`}>
			<CiSquarePlus className='text-xl' />

			<span className='font-body-1 text-secondary'>{text}</span>
		</button>
	);
};

export default ActionButton;
