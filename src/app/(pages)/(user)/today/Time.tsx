'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import TaskForm from './TaskForm';
import ActionButton from './ActionButton';
import { Button } from '@/components/ui/button';

const Time = () => {
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');
	const [breakTime, setBreakTime] = useState('');
	const [taskName, setTaskName] = useState('');
	const [taskDetails, setTaskDetails] = useState('');
	const [taskStatus, setTaskStatus] = useState('Still Needs to Work');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
		<form onSubmit={handleSubmit} className='space-y-4'>
			<div>
				<h2 className='mb-4 text-xl font-bold'>Time</h2>

				<section className='flex w-full gap-4'>
					<div className='flex-grow space-y-2'>
						<label htmlFor='startTime' className='block text-primary-dark'>
							Start Time <span className='text-error'>*</span>
						</label>
						<Input
							type='time'
							id='startTime'
							value={startTime}
							onChange={(e) => setStartTime(e.target.value)}
							required
							className='w-full rounded border border-primary-muted p-2 text-primary-dark'
						/>
					</div>

					<div className='flex-grow space-y-2'>
						<label htmlFor='endTime' className='block text-primary-dark'>
							End Time <span className='text-error'>*</span>
						</label>
						<Input
							type='time'
							id='endTime'
							value={endTime}
							onChange={(e) => setEndTime(e.target.value)}
							required
							className='w-full rounded border border-primary-muted p-2 text-primary-dark'
						/>
					</div>
				</section>

				<div className='space-y-2'>
					<label htmlFor='breakTime' className='block text-primary-dark'>
						Break Time <span className='text-error'>*</span>
					</label>
					<Input
						type='time'
						id='breakTime'
						value={breakTime}
						onChange={(e) => setBreakTime(e.target.value)}
						required
						className='w-full rounded border border-primary-muted p-2 text-primary-dark'
					/>
				</div>
			</div>

			<TaskForm
				taskName={taskName}
				taskDetails={taskDetails}
				taskStatus={taskStatus}
				onTaskNameChange={setTaskName}
				onTaskDetailsChange={setTaskDetails}
				onTaskStatusChange={setTaskStatus}
			/>

			<div className='flex items-center justify-end gap-4 py-2'>
				<ActionButton text='Add New Task' variant='rounded' />
			</div>

			<div className='flex items-center justify-between gap-2'>
				<ActionButton text='Add Another Shift' variant='square' fullWidth />
				<Button className='hidden h-10 min-w-[120px] flex-grow items-center justify-center bg-primary text-primary-dark max-md:flex'>
					next
				</Button>
			</div>
		</form>
	);
};

export default Time;
