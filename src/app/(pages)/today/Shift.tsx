import { Button } from '@/components/ui/button';
import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
const Shift = ({ title }: { title: string }) => {
	return (
		<div className='relative inline-flex items-center justify-center gap-2.5 border-b-2 border-primary px-12 py-3.5 [border-bottom-style:solid]'>
			<div className='relative mt-[-2.00px] flex-grow whitespace-nowrap font-body-1 text-[length:var(--body-1-font-size)] font-[number:var(--body-1-font-weight)] leading-[var(--body-1-line-height)] tracking-[var(--body-1-letter-spacing)] text-[#00150be6] [font-style:var(--body-1-font-style)]'>
				{title}
			</div>
			<IoCloseCircleOutline className='cursor-pointer' color='#b3b9b6' />
		</div>
	);
};

export default Shift;
