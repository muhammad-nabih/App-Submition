'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ArrowIcon from '@/public/icons/arrow-icon.svg';
import { MdOutlineWorkHistory } from 'react-icons/md';
import { HiOutlineArrowUpOnSquare } from 'react-icons/hi2';
const navLinks = [
	{
		href: '/today',
		text: "Today's Submission",
		icon: <HiOutlineArrowUpOnSquare />,
		activeClasses: 'bg-primary-dark text-white',
		inactiveClasses: 'bg-transparent text-primary-dark',
	},
	{
		href: '/history',
		text: 'History',
		icon: <MdOutlineWorkHistory />,
		activeClasses: 'bg-primary-dark text-white',
		inactiveClasses: 'bg-transparent text-primary-dark',
	},
];

interface NavLinksProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavLinks({ setOpen }: NavLinksProps) {
	const pathname = usePathname();

	return (
		<nav className='space-y-2-800 flex flex-col items-end gap-3 md:flex-row md:items-center md:space-x-2 md:space-y-0'>
			{navLinks.map((link, index) => {
				const isActive = pathname === link.href;
				const classes = isActive ? link.activeClasses : link.inactiveClasses;

				return (
					<Link
						key={index}
						href={link.href}
						onClick={() => setOpen(false)}
						className={`flex w-fit items-center justify-end gap-2 rounded-full px-3 py-[6px] text-sm transition-colors duration-200 max-sm:justify-end md:text-base lg:text-lg ${classes} `}>
						<span>{link.icon}</span>

						<span className='text-sm'>{link.text}</span>
					</Link>
				);
			})}
		</nav>
	);
}
