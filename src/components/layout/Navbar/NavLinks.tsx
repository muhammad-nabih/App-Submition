import Link from 'next/link';
import ArrowIcon from '@/public/icons/arrow-icon.svg';
import LinkHistoryBag from '@/public/icons/link-history-bag-icon.svg';
import Image from 'next/image';

export default function NavLinks() {
	return (
		<div className='flex flex-col space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0'>
			<Link
				href='/today'
				className='flex items-center gap-2 rounded-full bg-primary-dark px-3 py-[6px] text-sm text-white md:text-base lg:text-lg'
				passHref>
				<Image src={ArrowIcon} alt='Arrow Icon' />
				<span>Today's Submission</span>
			</Link>
			<Link
				className='flex items-center gap-1 rounded-full px-3 py-[6px] text-sm md:text-base lg:text-lg'
				href='/history'
				passHref>
				<Image src={LinkHistoryBag} alt='History Icon' />
				<span>History</span>
			</Link>
		</div>
	);
}
