'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Edit, Lock } from 'lucide-react';
import { User } from '@/types/types';
import avatar from '@/public/avatar.svg';
import Divider from '@/components/custom-ui/Divider';
import { InfoItem, InfoSection } from '@/lib/helpers/helpers';
import Back from '@/app/(pages)/profile/Back';
export default function ProfileSection() {
	const user: User = {
		name: 'Sabbir Islam',
		role: 'UI UX Designer',
		avatar: avatar.src,
	};
	return (
		<div className='space-y-8 p-4'>
			<Back />
			<div className='min-h-screen bg-gray-100'>
				<Card className='mx-auto overflow-hidden border-none'>
					<CardContent className='p-2'>
						<div className='bg-white p-6'>
							<h1 className='text-2xl font-bold'>My Profile</h1>
						</div>
						<Divider />

						<div className='my-8 grid gap-8 md:grid-cols-[300px,1fr]'>
							<Card className='flex h-auto flex-col items-center gap-6 border-none p-6'>
								<Avatar className='h-32 w-32 border-4 border-purple-600'>
									<AvatarImage alt='Sabbir Islam' src={user.avatar} />
									<AvatarFallback>SI</AvatarFallback>
								</Avatar>
								<div className='text-center'>
									<h2 className='text-xl font-semibold'>Sabbir Islam</h2>
									<p className='text-sm text-gray-500'>Ui Ux Designer</p>
								</div>
								<div className='w-full space-y-2'>
									<Button
										className='bg-muted-section w-full justify-center border-primary-light'
										variant='outline'>
										<Edit className='h-4 w-4' />
										Edit Details
									</Button>
									<Button
										className='bg-muted-section w-full justify-center border-primary-light'
										variant='outline'>
										<Lock className='h-4 w-4' />
										Edit Password
									</Button>
								</div>
							</Card>

							<div className='mb-3 space-y-6'>
								<section className='bg-muted-section rounded-md px-2 py-3'>
									<InfoSection title='Personal Information'>
										<div className='bg-muted-section grid gap-4 rounded-md px-2 py-3 sm:grid-cols-3'>
											<InfoItem label='First Name' value='Sabbir' />
											<InfoItem label='Last Name' value='Islam' />
											<InfoItem label='Username' value='sabbir220' />
											<InfoItem label='DOB' value='26 October, 2000' />
											<InfoItem label='Gender' value='Male' />
											<InfoItem label='Marital Status' value='Single' />
											<InfoItem label='Religion' value='Islam' />
											<InfoItem label='Nationality' value='Bangladeshi' />
											<InfoItem
												label='Address'
												value='Banani, Dhaka, Bangladesh.'
											/>
										</div>
									</InfoSection>
								</section>

								<section className='bg-muted-section rounded-md px-2 py-3'>
									<InfoSection title='Educational Information'>
										<div className='bg-muted-section grid gap-4 rounded-md px-2 py-3 sm:grid-cols-2'>
											<InfoItem
												label='Educational Qualification'
												value="Bachelor's Degree"
											/>
											<InfoItem label='Field of Study' value='Management' />
										</div>
									</InfoSection>
								</section>
								<section className='bg-muted-section rounded-md px-2 py-3'>
									<InfoSection title='Employment Information'>
										<div className='bg-muted-section grid gap-4 rounded-md px-2 py-3 sm:grid-cols-2 lg:grid-cols-3'>
											<InfoItem label='Employment Type' value='Full Time' />
											<InfoItem label='Hiring Date' value='01 June, 2023.' />
											<InfoItem label='Department' value='Content Creation' />
											<InfoItem label='Job Title' value='Ui Ux Designer' />
											<InfoItem label='Programming Languages' value='-' />
											<InfoItem
												label='Previous courses and experience'
												value='Added'
											/>
										</div>
									</InfoSection>
								</section>

								<section className='bg-muted-section rounded-md px-2 py-3'>
									<InfoSection title='Contact Information'>
										<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
											<InfoItem label='Phone Number' value='0102020260' />
											<InfoItem label='Email' value='Dummy@gmail.com' />
											<InfoItem label='Telegram ID' value='dummy_990' />
											<InfoItem label='Discord ID' value='dummy_990' />
											<InfoItem
												label='Wallet Address (Bep20)'
												value='0×83jsxznwxnznwinxzwnsnznsaznsu'
												colSpan={2}
											/>
										</div>
									</InfoSection>
								</section>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>{' '}
		</div>
	);
}
