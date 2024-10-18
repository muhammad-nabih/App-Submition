import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns/format';

export default function TodayNavbar() {
	return (
		<nav className='my-4 w-full px-3 py-2 md:px-6 md:py-5'>
			<section className='w-full'>
				<div className='flex flex-col items-start justify-between space-y-2 pb-2 sm:flex-row sm:items-center sm:space-y-0'>
					<h2 className='text-2xl font-bold'>Today's Submission</h2>
					<div className='flex items-center justify-end gap-1.5 rounded-full bg-[rgba(0,21,11,0.05)] py-1 pl-1 pr-3'>
						<CalendarIcon
							size={24}
							className='h-6 w-6 rounded-full bg-primary p-1 text-primary-dark'
						/>
						<span className='text-sm text-muted-foreground sm:text-base'>
							<b className='text-primary-dark'>Date:</b>
							<span className='text-primary-light'>
								{format(new Date(), 'dd MMMM, yyyy (cccc)')}
							</span>
						</span>
					</div>
				</div>
			</section>

			<section className='mt-6'>
				<div className='h-[45px] w-full border-b border-t border-[#00150b1a] [border-bottom-style:solid] [border-top-style:solid]'>
					<div className='relative inline-flex items-center justify-center gap-2.5 border-b-2 border-primary px-12 py-3.5 [border-bottom-style:solid]'>
						<div className='font-body-1 relative mt-[-2.00px] w-fit whitespace-nowrap text-[length:var(--body-1-font-size)] font-[number:var(--body-1-font-weight)] leading-[var(--body-1-line-height)] tracking-[var(--body-1-letter-spacing)] text-[#00150be6] [font-style:var(--body-1-font-style)]'>
							shift 1
						</div>
					</div>
				</div>
			</section>
		</nav>
	);
}
