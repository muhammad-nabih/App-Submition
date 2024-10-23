'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import { CheckCircle2, X } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { usePreviewContext } from '@/contexts/previewContext';
import { PreviewItem } from '@/lib/helpers/helpers';

export default function SubmissionPreview() {
	const shifts = useAppSelector((state) => state.shifts.shifts);
	const { isShow, setIsShow, isSaved } = usePreviewContext();
	if (isShow) {
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
								className='absolute -right-10 -top-10 rounded-full bg-white'
								onClick={() => setIsShow(false)}>
								<X className='h-4 w-4' />
							</Button>
						</CardTitle>
					</CardHeader>
					<CardContent className='max-h-[70vh] space-y-4 overflow-y-auto'>
						{shifts.map((shift, index) => (
							<div key={shift.id} className='rounded-lg bg-gray-50 p-4'>
								<h2 className='mb-4 text-xl font-semibold'>
									Shift {index + 1}
								</h2>
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
					<CardFooter className='py-5 bg-white'>
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
	}

	return (
		<Card
			className={`mx-auto my-6 flex w-[448px] flex-1 flex-col rounded-md border-none bg-card px-3 shadow-sm max-md:hidden max-md:px-1 md:min-w-[400px] ${isSaved ? 'flex' : 'hidden'} max-h-[80vh] overflow-auto`}>
			<CardHeader className='sticky top-0 my-0 w-full bg-white p-0 px-0 pb-0'>
				<CardTitle className='flex justify-between border-b border-[#00150B1A] px-2 py-6 text-xl font-bold'>
					<span>Submission Preview</span>
					<div className='flex items-center justify-center rounded-full bg-notification px-[6px] py-1 text-xs font-normal text-white'>
						-2 Hours $
					</div>
				</CardTitle>
			</CardHeader>

			{shifts.map((shift, index) => (
				<CardContent
					key={shift.id}
					className='my-2 flex flex-col justify-between rounded-lg bg-muted-section pt-4'>
					<div className='rounded-lg px-2 py-3'>
						<h2 className='mb-4 text-xl font-bold'>Shift {index + 1}</h2>
						<div className='space-y-1 overflow-x-hidden'>
							<PreviewItem
								label='Start Time'
								value={shift.startTime}
								filled={!!shift.startTime}
							/>
							<PreviewItem
								label='End Time'
								value={shift.endTime}
								filled={!!shift.endTime}
							/>
							<PreviewItem
								label='Break Time'
								value={shift.breakTime}
								filled={!!shift.breakTime}
							/>
							{shift.tasks.map((task, taskIndex) => (
								<React.Fragment key={task.id}>
									<PreviewItem
										label={`Task ${taskIndex + 1} Name`}
										value={task.name}
										filled={!!task.name}
									/>
									<PreviewItem
										label={`Task ${taskIndex + 1} Details`}
										value={task.details}
										filled={!!task.details}
									/>
									<PreviewItem
										label={`Task ${taskIndex + 1} Status`}
										value={task.status}
										filled={true}
									/>
								</React.Fragment>
							))}
						</div>
					</div>
				</CardContent>
			))}
			<CardFooter className='sticky bottom-0 z-10 flex h-full w-full bg-white py-5'>
				<Button
					// onClick={'handleSubmit'}
					className='mt-4 h-11 w-full self-end rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:bg-accent-hover'>
					Submit
				</Button>
			</CardFooter>
		</Card>
	);
}
