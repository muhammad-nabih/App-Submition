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

export default function SubmissionPreview({
	isShow,
	setIsShow,
}: {
	isShow: boolean;
	setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const shifts = useAppSelector((state) => state.shifts.shifts);

	if (isShow) {
		return (
			<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 md:hidden'>
				<Card className='w-full max-w-md border-none'>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-2xl font-bold'>
							Submission Preview
						</CardTitle>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => setIsShow(false)}>
							<X className='h-4 w-4' />
						</Button>
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
					<CardFooter>
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
			className={`mx-auto my-8 flex flex-1 flex-col rounded-md border-none bg-card px-3 shadow-md max-md:hidden max-md:px-1 md:min-w-[400px] md:px-6 md:py-5`}
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				display: isShow ? 'flex' : 'none',
			}}>
			<CardHeader className='pb-0'>
				<CardTitle className='border-b border-[#00150B1A] py-3 text-2xl font-bold'>
					Submission Preview
				</CardTitle>
			</CardHeader>
			{shifts.map((shift, index) => (
				<CardContent
					key={shift.id}
					className='flex flex-col justify-between pt-4'>
					<div className='rounded-lg bg-gray-50 p-4'>
						<h2 className='mb-4 text-xl font-semibold'>Shift {index + 1}</h2>
						<div className='space-y-4'>
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
			<CardFooter className='flex h-full py-0'>
				<Button
					// onClick={'handleSubmit'}
					className='mt-4 h-11 w-full self-end rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:bg-accent-hover'>
					Submit
				</Button>
			</CardFooter>
		</Card>
	);
}

function PreviewItem({
	label,
	value,
	filled,
}: {
	label: string;
	value: string;
	filled: boolean;
}) {
	return (
		<div className='flex items-center'>
			<CheckCircle2
				className={`mr-3 h-5 min-w-5 ${filled ? 'text-primary' : 'text-gray-300'}`}
			/>
			<div>
				<p className='text-sm text-gray-500'>{label}</p>
				<p className='font-medium'>{value || '-'}</p>
			</div>
		</div>
	);
}
