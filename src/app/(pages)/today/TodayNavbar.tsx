import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns/format';
import Shift from '@/app/(pages)/today/Shift';
import { IoCloseCircleOutline } from 'react-icons/io5';
export default function TodayNavbar() {
	return (
		<nav className='sticky top-0 w-full bg-card py-6 z-10'>
			<section className='w-full'>
				<div className='flex flex-col flex-wrap items-start justify-between gap-3 space-y-2 pb-2 sm:flex-row sm:items-center sm:space-y-0'>
					<h2 className='text-xl font-bold'>Today's Submission</h2>

					<div className='flex items-center justify-end gap-1.5 rounded-full bg-[rgba(0,21,11,0.05)] py-1 pl-1 pr-3'>
						<CalendarIcon
							size={24}
							className='h-6 w-6 rounded-full bg-primary p-1 text-primary-dark'
						/>
						<span className='text-sm text-muted-foreground sm:text-base'>
							<span className='text-sm text-primary-dark'>Date: </span>
							<span className='text-sm text-primary-light'>
								{format(new Date(), 'dd MMMM, yyyy (cccc)')}
							</span>
						</span>
					</div>
				</div>
			</section>

			<section className='mt-6'>
				<div className='min-h-[45px] w-full border-b border-t border-[#00150b1a] [border-bottom-style:solid] [border-top-style:solid]'>
					<Shift title='Shift1' />
				</div>
			</section>
		</nav>
	);
}
