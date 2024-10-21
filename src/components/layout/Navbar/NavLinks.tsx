'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
				const baseClasses =
					'flex w-fit items-center justify-end gap-2 rounded-full px-3 py-[6px] text-sm transition-all duration-150 max-sm:justify-end md:text-base lg:text-lg';
				const activeClasses = 'bg-primary-dark text-white shadow-lg';
				const inactiveClasses =
					'bg-transparent text-primary-dark hover:bg-primary-dark/10 hover:shadow-md';

				return (
					<Link
						key={index}
						href={link.href}
						onClick={() => setOpen(false)}
						className={`${baseClasses} ${
							isActive ? activeClasses : inactiveClasses
						} group relative overflow-hidden`}>
						<span className='relative z-10 transition-transform duration-150 group-hover:scale-110'>
							{link.icon}
						</span>
						<span className='relative z-10 text-sm transition-all duration-150 group-hover:font-medium'>
							{link.text}
						</span>
						<span className='absolute inset-0 z-0 bg-primary-dark/5 opacity-0 transition-opacity duration-150 group-hover:opacity-100' />
						<span className='absolute bottom-0 left-0 h-0.5 w-0 bg-primary-dark transition-all duration-150 group-hover:w-full' />
					</Link>
				);
			})}
		</nav>
	);
}
