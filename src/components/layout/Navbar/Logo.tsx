import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
export default function Logo() {
	return (
		<Link href='/' className='flex h-[30px] items-center space-x-2'>
			<Image src={logo} alt='Logo' width={148} height={30} />
		</Link>
	);
}
