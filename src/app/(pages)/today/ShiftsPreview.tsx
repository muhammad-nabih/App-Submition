import { CardContent } from '@/components/ui/card';
import { PreviewItem } from '@/lib/helpers/helpers';
import { useAppSelector } from '@/store/hooks';
import React from 'react';

const ShiftsPreview = () => {
	const shifts = useAppSelector((state) => state.shifts.shifts);

	return (
		<>
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
		</>
	);
};

export default ShiftsPreview;
