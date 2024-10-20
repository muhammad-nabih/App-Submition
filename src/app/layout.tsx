import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import avatar from '@/public/avatar.svg';
const inter = Inter({ subsets: ['latin'] });
import { User } from '@/types/types';
export const metadata: Metadata = {
	title: 'app submations',
	description:
		'A Next.js application with Submations, a tool for generating and managing subtitles for videos.',
	icons: {
		icon: '/favicon.ico',
	},
};

const user: User = {
	name: 'Sabbir Islam',
	role: 'UI UX Designer',
	avatar: avatar.src,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar user={user} />

				<main>{children}</main>
			</body>
		</html>
	);
}
