import Image from 'next/image';
import { motion } from 'framer-motion';
import logout from '@/public/icons/logout.svg';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/utils';
import Link from 'next/link';

const Logout = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<Link
			href={'/'}
			className={cn(
				'flex items-center justify-center rounded-full px-2 transition-colors',
				isHovered &&
					'bg-[#fbe8e8] text-error hover:bg-[#fbe8e8] hover:text-error',
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<Image src={logout} className='h-8' alt='logout icon' />
			<motion.span
				initial={{ width: 0, opacity: 0 }}
				animate={{
					width: isHovered ? 'auto' : 0,
					opacity: isHovered ? 1 : 0,
				}}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				className='overflow-hidden whitespace-nowrap'>
				Logout
			</motion.span>
		</Link>
	);
};

export default Logout;
