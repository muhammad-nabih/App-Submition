import React from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PreviewItem } from '@/lib/helpers/helpers';
import { usePreviewContext } from '@/contexts/previewContext';
import { useAppSelector } from '@/store/hooks';
import { X } from 'lucide-react';
const SubmissionPreviewMobile = () => {
	const shifts = useAppSelector((state) => state.shifts.shifts);
	const { isShow, setIsShow, isSaved } = usePreviewContext();
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 md:hidden'>
			<Card className='w-full max-w-md border-none'>
				<CardHeader className='space-y-0'>
					<CardTitle className='relative flex w-full items-center justify-between text-2xl font-bold'>
						Submission Preview
						<div className='flex items-center justify-center rounded-full bg-notification px-[6px] py-1 text-xs font-normal text-white'>
							-2 Hours $
						</div>
						<Button
							variant='ghost'
							size='icon'
							className='absolute p-1  -right-8 -top-8 rounded-full bg-white w-6 h-6 '
							onClick={() => setIsShow(false)}>
							<X className='h-4 w-4 font-bold' />
						</Button>
					</CardTitle>
				</CardHeader>
				<CardContent className='max-h-[70vh] space-y-4 overflow-y-auto'>
					{shifts.map((shift, index) => (
						<div key={shift.id} className='rounded-lg bg-gray-50 p-4'>
							<h2 className='mb-4 text-xl font-semibold'>Shift {index + 1}</h2>
							<div className='space-y-4'>
								<PreviewItem
									filled
									label='Start Time'
									value={shift.startTime}
								/>
								<PreviewItem filled label='End Time' value={shift.endTime} />
								<PreviewItem
									filled
									label='Break Time'
									value={shift.breakTime}
								/>
								{shift.tasks.map((task, taskIndex) => (
									<React.Fragment key={task.id}>
										<PreviewItem
											filled
											label={`Task ${taskIndex + 1} Name`}
											value={task.name}
										/>
										<PreviewItem
											filled
											label={`Task ${taskIndex + 1} Details`}
											value={task.details}
										/>
										<PreviewItem
											filled
											label={`Task ${taskIndex + 1} Status`}
											value={task.status}
										/>
									</React.Fragment>
								))}
							</div>
						</div>
					))}
				</CardContent>
				<CardFooter className='bg-white py-5'>
					<Button
						onClick={() => {
							// Handle submission logic here
							setIsShow(false);
						}}
						className='w-full'>
						Submit
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default SubmissionPreviewMobile;
