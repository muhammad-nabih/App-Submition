import Divider from '@/components/custom-ui/Divider';

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
			<p className='text-sm font-medium text-primary-light'>{label}</p>
			<p className='font-medium text-primary-dark'>{value}</p>
		</div>
	);
}
