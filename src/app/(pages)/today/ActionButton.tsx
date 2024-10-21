import React from 'react';
import { CiSquarePlus } from 'react-icons/ci';

interface ActionButtonProps {
	text: string;
	fullWidth?: boolean;
	variant?: 'rounded' | 'square';
	onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
	text,
	fullWidth = false,
	variant = 'rounded',
	onClick,
}) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`relative flex items-center justify-center gap-2.5 ${variant === 'rounded' ? 'rounded-[100px]' : 'rounded-[4px]'} ${fullWidth ? 'w-full' : 'w-fit'} bg-submit px-5 py-2.5 duration-200 hover:bg-primary`}>
			<CiSquarePlus className='text-xl' />
			<span className='font-body-1 text-secondary'>{text}</span>
		</button>
	);
};

export default ActionButton;
