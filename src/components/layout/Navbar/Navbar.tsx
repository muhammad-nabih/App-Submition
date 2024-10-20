'use client';

import { useState } from 'react';
import { User } from '@/types/types';
import Logo from './Logo';
import AllLinks from '@/components/layout/Navbar/AllLinks';
import { Menu, X } from 'lucide-react';
import NavLinks from '@/components/layout/Navbar/NavLinks';
import UserDetails from '@/components/layout/Navbar/UserDetails';
import Image from 'next/image';
import logout from '@/public/icons/logout.svg';
import Link from 'next/link';
import Logout from '@/components/layout/Navbar/Logout';

interface NavbarProps {
	user?: User;
}

export default function Component({ user }: NavbarProps = {}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className='relative flex max-h-24 items-center px-3 py-2 shadow-sm max-sm:px-1 max-sm:py-1 md:px-2 md:py-5'>
			<div className='flex w-full items-center justify-between px-2 py-3 md:px-6'>
				<Logo />

				<AllLinks setIsOpen={setIsOpen} user={user} />

				<button className='md:hidden' onClick={toggleMenu}>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			<div
				className={`fixed left-0 top-[78px] z-10 flex w-full flex-col items-end justify-start gap-4 overflow-hidden bg-[#333333a7] transition-all duration-300 ease-in-out ${
					isOpen ? 'h-[94vh]' : 'h-0'
				}`}>
				<div
					className={`left-0 top-0 z-10 flex w-full flex-col items-end justify-start gap-4 overflow-hidden bg-background transition-all duration-300 ease-in-out ${
						isOpen ? 'h-[250px]' : 'h-0'
					}`}>
					<div className='absolute left-0 top-0 z-50 w-full px-4'>
						{user && <UserDetails user={user} />}

						<div className='mb-4 w-full overflow-hidden'>
							<hr className='border-[#00150b1a] [border-top-style:solid]' />
						</div>

						<div className='flex justify-end'>
							<NavLinks setOpen={setIsOpen} />
						</div>

						<div className='mt-3 flex justify-end'>
							<Link
								href='/'
								className='flex items-center rounded-full px-3 transition-colors duration-200 hover:bg-[#fbe8e8]'>
								<Image src={logout} className='h-8' alt='logout icon' />
								<span className='overflow-hidden whitespace-nowrap text-sm text-error'>
									Logout
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
