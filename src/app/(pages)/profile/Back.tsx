'use client ';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FaArrowLeftLong } from 'react-icons/fa6';
const Back = () => {
	const router = useRouter();
	return (
		<Button
			variant={'ghost'}
			className='capitalize duration-200 hover:scale-105 hover:bg-transparent hover:text-black'
			onClick={() => router.back()}>
			<FaArrowLeftLong />
			back
		</Button>
	);
};

export default Back;
