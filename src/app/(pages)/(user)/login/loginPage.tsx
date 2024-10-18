'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LoginForm from '@/app/(pages)/(user)/login/LoginForm';

export default function LoginPage() {
	return (
		<div className='fixHeight flex flex-col'>
			<div className='flex flex-grow items-center justify-center p-4'>
				<Card className='w-full max-w-md border-[#35363629] shadow-sm'>
					<CardHeader>
						<CardTitle className='text-2xl font-bold text-primary-dark'>
							Login to your account
						</CardTitle>
					</CardHeader>

					<CardContent>
						<LoginForm />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
