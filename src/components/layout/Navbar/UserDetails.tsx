'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import column from '@/public/icons/column.svg';
import Link from 'next/link';
import { User } from '@/types/types';

interface UserDetailsProps {
	user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
	return (
		<div className='flex items-center justify-end gap-2 py-3'>
			<Link href='/profile' className='group relative'>
				<motion.div
					className='flex items-center gap-4 rounded-lg border-2 border-transparent bg-transparent p-2 transition-all duration-300 ease-in-out hover:border-green-400 hover:shadow-green-200/50'
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
					<motion.div
						whileHover={{ rotate: 360 }}
						transition={{ duration: 0.5 }}>
						<Avatar className='h-12 w-12 ring-2 ring-green-200 ring-offset-2 transition-all duration-300 group-hover:ring-green-400'>
							<AvatarImage src={user.avatar} />
							<AvatarFallback className='bg-green-100 text-lg font-semibold text-green-700'>
								{user.name.charAt(0).toUpperCase()}
							</AvatarFallback>
						</Avatar>
					</motion.div>

					<div className='flex flex-col items-start gap-1'>
						<motion.p
							className='text-sm font-medium text-gray-800 transition-colors duration-300 group-hover:text-green-600'
							whileHover={{ x: 5 }}>
							{user.name}
						</motion.p>
						<motion.p
							className='text-xs text-gray-500 transition-colors duration-300 group-hover:text-green-400'
							whileHover={{ x: 5 }}>
							{user.role}
						</motion.p>
					</div>
				</motion.div>
				<motion.div
					className='absolute -bottom-1 left-0 h-1 w-0 bg-green-400'
					whileHover={{ width: '100%' }}
					transition={{ duration: 0.3 }}
				/>
			</Link>

			<motion.div
				className='hidden cursor-pointer md:block'
				whileHover={{ scale: 1.1, rotate: 180 }}
				transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
				<Image src={column} className='h-10 w-10' alt='column icon' />
			</motion.div>
		</div>
	);
};

export default UserDetails;
