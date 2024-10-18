import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CiCircleQuestion } from 'react-icons/ci';
import { loginSchema, LoginFormValues } from '@/schemas/loginSchema';
import PasswordInput from '@/components/custom-ui/PasswordInput';

export default function LoginForm() {
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
		console.log(data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	useEffect(() => {
		setIsFormValid(isValid);
	}, [isValid]);

	return (
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
					<p className='text-sm text-error'>{errors.username.message}</p>
				)}
			</div>

			<PasswordInput
				register={register('password')}
				error={errors.password?.message}
			/>

			<div className='flex items-start gap-1 text-sm text-primary-light'>
				<CiCircleQuestion size={16} />
				If this information doesn't match for login, please contact your advisor
				for assistance.
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
	);
}
