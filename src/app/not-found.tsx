import Image from 'next/image';
import React from 'react';
import NotFound from '@/public/not-found.svg';
import { FaArrowLeft } from 'react-icons/fa6';
import Link from 'next/link';
const NotFoundPage = () => {
	return (
		<div className='fixHeight flex items-center justify-center px-2 py-3'>
			<div className='grid place-content-center'>
				<div className='space-y-8 text-center'>
					<Image
						src={NotFound}
						alt='Not Found '
						objectFit='contain'
						layout='responsive'
					/>

					<h1 className='mt-12 font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl'>
						404 Not Found!
					</h1>

					<Link
						href={'/'}
						className='mx-auto flex w-fit items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2 text-lg text-primary-dark hover:bg-accent-hover'>
						<FaArrowLeft />
						Back to HomePage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
