'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from '@/components/ui/sheet';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserMenu from './UserMenu';

interface NavbarProps {
	user?: {
		name: string;
		role: string;
		avatar: string;
	};
}

export default function Navbar({ user }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	// user=undefined;
	return (
		<nav className='max-h-24 bg-white px-3 py-2 shadow-sm md:px-6 md:py-5'>
			<div className='flex items-center justify-between px-2 py-3 md:px-6'>
				<Logo />
				{user ? (
					<>
						<div className='hidden md:flex'>
							<NavLinks />
						</div>
						<div className='flex items-center gap-2'>
							<UserMenu user={user} />
							<Sheet open={isOpen} onOpenChange={setIsOpen}>
								<SheetTrigger asChild>
									<Button variant='ghost' size='icon' className='md:hidden'>
										<Menu className='h-6 w-6' />
										<span className='sr-only'>Toggle menu</span>
									</Button>
								</SheetTrigger>
								<SheetContent
									side='right'
									className='w-[240px] pt-12 sm:w-[300px]'>
									<SheetTitle aria-describedby='sheet-description'>
										<NavLinks />
									</SheetTitle>
								</SheetContent>
							</Sheet>
						</div>
					</>
				) : (
					<div className='flex items-center gap-4'>
						<Link href='/login' passHref>
							<Button className='bg-[#A8DC2A] text-[#00150B]' variant='ghost'>
								Login
							</Button>
						</Link>
						<Link href='/register' passHref>
							<Button className='bg-[#A8DC2A] text-[#00150B]'>Register</Button>
						</Link>
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant='ghost' size='icon' className='md:hidden'>
									<Menu className='h-6 w-6' />
									<span className='sr-only'>Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side='right' className='w-[240px] sm:w-[300px]'>
								<SheetHeader>
									<SheetTitle>Authentication</SheetTitle>
									<SheetDescription>
										Login or create a new account
									</SheetDescription>
								</SheetHeader>
								<div className='mt-4 flex flex-col gap-4'>
									<Link href='/login' passHref>
										<Button variant='ghost' className='w-full justify-start'>
											Login
										</Button>
									</Link>
									<Link href='/register' passHref>
										<Button className='w-full justify-start'>Register</Button>
									</Link>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				)}
			</div>
		</nav>
	);
}
