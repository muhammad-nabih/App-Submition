import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import column from '@/public/icons/column.svg';
import logout from '@/public/icons/logout.svg';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User } from '@/types/types';

interface UserDetailsProps {
	user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
	return (
		<div className='flex items-center justify-end gap-2'>
			<Link
				href='/profile'
				className='flex items-center gap-4 py-4 max-sm:flex-row-reverse '>
				<Avatar className='h-10 w-10'>
					<AvatarImage src={user.avatar} />
					<AvatarFallback className='bg-primary/10 text-base text-primary-foreground'>
						{user.name.charAt(0).toUpperCase()}
					</AvatarFallback>
				</Avatar>

				<div className='flex flex-col items-start gap-1'>
					<p className='text-sm text-primary-dark'>{user.name}</p>
					<p className='text-sm text-primary-light'>{user.role}</p>
				</div>
			</Link>

			<div className='hidden md:block'>
				<Image src={column} className='h-10' alt='column icon' />
			</div>
		</div>
	);
};

export default UserDetails;
