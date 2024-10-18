import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

interface PasswordInputProps {
	register: any;
	error?: string;
}

export default function PasswordInput({ register, error }: PasswordInputProps) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='space-y-2'>
			<Label htmlFor='password' className='text-primary-muted'>
				Password <span className='text-error'>*</span>
			</Label>
			<div className='relative'>
				<Input
					className='border-primary-light pr-10 text-primary-dark focus:border-primary'
					id='password'
					type={showPassword ? 'text' : 'password'}
					{...register}
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
			{error && <p className='text-sm text-error'>{error}</p>}
		</div>
	);
}
