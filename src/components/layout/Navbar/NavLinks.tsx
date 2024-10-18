import Link from 'next/link';
import ArrowIcon from '@/public/icons/arrow-icon.svg';
import LinkHistoryBag from '@/public/icons/link-history-bag-icon.svg';
import Image from 'next/image';

const navLinks = [
	{
		href: '/today',
		text: "Today's Submission",
		icon: ArrowIcon,
		classes: 'bg-primary-dark text-white',
	},
	{
		href: '/history',
		text: 'History',
		icon: LinkHistoryBag,
		classes: '',
	},
];

export default function NavLinks({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<div className='flex flex-col space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0'>
			{navLinks.map((link, index) => (
				<Link
					onClick={() => setOpen(false)}
					key={index}
					href={link.href}
					className={`flex items-center gap-2 rounded-full px-3 py-[6px] text-sm md:text-base lg:text-lg ${link.classes}`}
					passHref>
					<Image src={link.icon} alt={`${link.text} Icon`} />
					<span>{link.text}</span>
				</Link>
			))}
		</div>
	);
}
