
import { CheckCircle2 } from 'lucide-react';

export function InfoSection({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section>
			<h3 className='mb-4 text-lg font-semibold text-primary-dark'>{title}</h3>
			{children}
		</section>
	);
}

export function InfoItem({
	label,
	value,
	colSpan = 1,
}: {
	label: string;
	value: string;
	colSpan?: number;
}) {
	return (
		<div className={`space-y-1 ${colSpan > 1 ? `sm:col-span-${colSpan}` : ''}`}>
			<p className='text-sm font-medium bg-red-500  text-primary-light'>{label}</p>
			<p className='font-medium text-primary-dark'>{value}</p>
		</div>
	);
}

export function PreviewItem({
	label,
	value,
	filled,
}: {
	label: string;
	value: string;
	filled: boolean;
}) {
	return (
		<div className='flex w-full flex-col space-y-1'>
			<div className='flex items-center gap-2'>
				<CheckCircle2
					className={`mr-2 h-5 w-5 ${
						filled ? 'text-primary' : 'text-primary-light'
					}`}
				/>
				<div className='pl-7'>
					<p className='2 whitespace-pre-wrap break-words rounded bg-white/50 text-sm text-primary-muted'>
						{label}
					</p>
				</div>
			</div>
			<div className='flex items-end pl-7'>
				<p className='whitespace-pre-wrap break-words rounded px-8 text-sm font-semibold'>

					{value || '-'}
				</p>
			</div>
		</div>
	);
}
