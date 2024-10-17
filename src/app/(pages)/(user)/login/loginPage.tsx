'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { CiCircleQuestion } from 'react-icons/ci';

const loginSchema = z.object({
	username: z.string().min(1, { message: 'Username is required' }),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [isFormValid, setIsFormValid] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		mode: 'onChange',
	});

	const onSubmit = async (data: LoginFormValues) => {
		// Handle login logic here
		console.log(data);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	useEffect(() => {
		setIsFormValid(isValid);
	}, [isValid]);

	const watchFields = watch();

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
						<form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
							<div className='space-y-2'>
								<Label htmlFor='username' className='text-primary-muted'>
									Username <span className='text-error'>*</span>
								</Label>
								<Input
									className='border-primary-light text-primary-dark focus:border-primary'
									id='username'
									{...register('username')}
									placeholder='Enter your username'
								/>
								{errors.username && (
									<p className='text-sm text-error'>
										{errors.username.message}
									</p>
								)}
							</div>
							<div className='space-y-2'>
								<Label htmlFor='password' className='text-primary-muted'>
									Password <span className='text-error'>*</span>
								</Label>
								<div className='relative'>
									<Input
										className='border-primary-light pr-10 text-primary-dark focus:border-primary'
										id='password'
										type={showPassword ? 'text' : 'password'}
										{...register('password')}
										placeholder='Enter your password'
									/>
									<button
										type='button'
										onClick={() => setShowPassword(!showPassword)}
										className='absolute right-3 top-1/2 -translate-y-1/2 transform'>
										{showPassword ? (
											<EyeOffIcon className='h-4 w-4 text-primary-muted' />
										) : (
											<EyeIcon className='h-4 w-4 text-primary-muted' />
										)}
									</button>
								</div>
								{errors.password && (
									<p className='text-sm text-error'>
										{errors.password.message}
									</p>
								)}
							</div>
							<div className='flex items-start gap-1 text-sm text-primary-light'>
								<CiCircleQuestion size={16} />
								If this information doesn't match for login, please contact your
								advisor for assistance.
							</div>
							<Button
								type='submit'
								disabled={!isFormValid}
								className={`w-full ${
									isFormValid
										? 'bg-accent text-primary-dark hover:bg-accent-hover'
										: 'cursor-not-allowed bg-gray-200 text-gray-400'
								}`}>
								Login
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
