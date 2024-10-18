'use client';

import { useState } from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function SubmissionPreview() {
	const [startTime, setStartTime] = useState('12:39 pm');
	const [endTime, setEndTime] = useState('');
	const [breakTime, setBreakTime] = useState('');
	const [taskName, setTaskName] = useState('');
	const [taskDetails, setTaskDetails] = useState('');
	const [taskStatus, setTaskStatus] = useState('Still Needs to Work');

	const handleSubmit = () => {
		console.log({
			startTime,
			endTime,
			breakTime,
			taskName,
			taskDetails,
			taskStatus,
		});
	};

	return (
		<Card className='mx-auto my-8 flex flex-1 flex-col rounded-md border-none bg-card px-3 shadow-md max-md:hidden max-md:px-1 md:min-w-[400px] md:px-6 md:py-5'>
			<CardHeader className='pb-0'>
				<CardTitle className='border-b border-[#00150B1A] py-3 text-2xl font-bold'>
					Submission Preview
				</CardTitle>
			</CardHeader>

			<CardContent className='flex flex-col justify-between pt-4'>
				<div className='rounded-lg bg-gray-50 p-4'>
					<h2 className='mb-4 text-xl font-semibold'>Shift 1</h2>
					<div className='space-y-4'>
						<PreviewItem label='Start Time' value={startTime} filled={true} />
						<PreviewItem label='End Time' value={endTime} filled={false} />
						<PreviewItem label='Break Time' value={breakTime} filled={false} />
						<PreviewItem label='Task Name' value={taskName} filled={false} />
						<PreviewItem
							label='Task Details'
							value={taskDetails}
							filled={false}
						/>
						<PreviewItem label='Task Status' value={taskStatus} filled={true} />
					</div>
				</div>
			</CardContent>

			<CardFooter className='flex h-full py-0'>
				<Button
					onClick={handleSubmit}
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
				className={`mr-3 h-5 w-5 ${filled ? 'text-primary' : 'text-gray-300'}`}
			/>
			<div>
				<p className='text-sm text-gray-500'>{label}</p>
				<p className='font-medium'>{value || '-'}</p>
			</div>
		</div>
	);
}
