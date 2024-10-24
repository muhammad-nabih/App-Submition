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
import Divider from '@/components/custom-ui/Divider';

interface NavbarProps {
	user?: User;
}

export default function Navbar({ user }: NavbarProps = {}) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className='relative flex max-h-[70px] items-center bg-white  px-6 py-4 shadow-sm'>
			<div className='flex h-[48px] w-full items-center justify-between'>
				<Logo />

				<AllLinks setIsOpen={setIsOpen} user={user} />

				<button className='md:hidden' onClick={toggleMenu}>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			<div
				className={`fixed left-0 top-[70px] z-50 flex w-full flex-col items-end justify-start gap-4 overflow-hidden bg-[#333333a7]  transition-all duration-300 ease-in-out ${
					isOpen ? 'h-[94vh]' : 'h-0'
				}`}>
				<div
					className={`left-0 top-0 z-10 flex w-full flex-col items-end justify-start overflow-hidden bg-background transition-all duration-300 ease-in-out   ${
						isOpen ? 'h-[270px]' : 'h-0'
					} `}>
					<div className='absolute left-0 top-0 z-50 w-full px-4'>
						{user && <UserDetails user={user} />}

						<Divider />

						<div className='my-4 flex justify-end'>
							<NavLinks setOpen={setIsOpen} />
						</div>

						<div className='my-3 flex justify-end'>
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
