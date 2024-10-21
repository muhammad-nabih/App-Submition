'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
	updateShiftStartTime,
	updateShiftEndTime,
	updateShiftBreakTime,
	updateTaskName,
	updateTaskDetails,
	updateTaskStatus,
} from '@/store/features/shiftSlice';
import TaskForm from './TaskForm';
import ActionButton from './ActionButton';
import { Button } from '@/components/ui/button';
import { FaCheck } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';

interface Task {
	taskName: string;
	taskDetails: string;
	taskStatus: 'Still Needs to Work' | 'Done';
}

const Time: React.FC = () => {
	const dispatch = useAppDispatch();
	const shifts = useAppSelector((state) => state.shifts.shifts);

	// Manage time inputs state
	const [inputs, setInputs] = useState({
		startTime: '',
		endTime: '',
		breakTime: '',
	});

	// Manage task state
	const [task, setTask] = useState<Task>({
		taskName: '',
		taskDetails: '',
		taskStatus: 'Done',
	});

	const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newStartTime = e.target.value;
		setInputs((prev) => ({ ...prev, startTime: newStartTime }));
		dispatch(updateShiftStartTime(newStartTime));
	};

	const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newEndTime = e.target.value;
		setInputs((prev) => ({ ...prev, endTime: newEndTime }));
		dispatch(updateShiftEndTime(newEndTime));
	};

	const handleBreakTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newBreakTime = e.target.value;
		setInputs((prev) => ({ ...prev, breakTime: newBreakTime }));
		dispatch(updateShiftBreakTime(newBreakTime));
	};

	const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTaskName = e.target.value;
		setTask((prev) => ({ ...prev, taskName: newTaskName }));
		dispatch(updateTaskName(newTaskName));
	};

	const handleTaskDetailsChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const newTaskDetails = e.target.value;
		setTask((prev) => ({ ...prev, taskDetails: newTaskDetails }));
		dispatch(updateTaskDetails(newTaskDetails));
	};

	const handleTaskStatusChange = (status: 'Still Needs to Work' | 'Done') => {
		setTask((prev) => ({ ...prev, taskStatus: status }));
		dispatch(updateTaskStatus(status));
	};

	const handleSaveShift = () => {
		// Implement save shift logic here
		console.log('Saving shift...');
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted');
	};

	return (
		<form onSubmit={handleSubmit} className='min-w-[320px] space-y-4'>
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
							value={inputs.startTime}
							onChange={handleStartTimeChange}
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
							value={inputs.endTime}
							onChange={handleEndTimeChange}
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
						value={inputs.breakTime}
						onChange={handleBreakTimeChange}
						required
						className='w-full rounded border border-primary-muted p-2 text-primary-dark'
					/>
				</div>
			</div>

			<div className='space-y-4'>
				<div className='space-y-2'>
					<h3 className='text-gray-600'>
						Task Name <span className='text-error'>*</span>
					</h3>
					<Input
						type='text'
						value={task.taskName}
						onChange={handleTaskNameChange}
						required
						className='border-text-primary-light w-full rounded border p-2 text-primary-dark placeholder:text-primary-light'
					/>
				</div>
				<div className='space-y-2'>
					<h3 className='text-gray-600'>
						Task Details <span className='text-error'>*</span>
					</h3>
					<Textarea
						value={task.taskDetails}
						onChange={handleTaskDetailsChange}
						className='border-text-primary-light h-24 w-full resize-none rounded border p-2 text-primary-dark placeholder:text-primary-muted'
					/>
				</div>
				<div className='space-y-2'>
					<h3 className='text-gray-600'>
						Task Status <span className='text-error'>*</span>
					</h3>
					<div className='flex gap-4'>
						<Button
							type='button'
							onClick={() => handleTaskStatusChange('Still Needs to Work')}
							className={`rounded shadow-none ${
								task.taskStatus === 'Still Needs to Work'
									? 'bg-gray-200 shadow-sm'
									: 'bg-white'
							}`}>
							Still Needs to Work
						</Button>
						<Button
							type='button'
							onClick={() => handleTaskStatusChange('Done')}
							className={`rounded shadow-none ${
								task.taskStatus === 'Done'
									? 'bg-gray-200 shadow-sm'
									: 'bg-transparent'
							}`}>
							Done
						</Button>
					</div>
				</div>
			</div>

			<div className='flex items-center justify-end gap-4 py-2'>
				<ActionButton text='Add New Task' variant='rounded' />
			</div>

			<div className='flex items-center justify-end gap-4 py-2'>
				<Button
					type='button'
					className='h-10 min-w-[120px] flex-grow items-center justify-center bg-[#00150B0D] text-lg text-primary-dark duration-200 hover:bg-primary-dark hover:text-white max-md:flex'>
					<MdEdit />
					Edit
				</Button>

				<Button
					onClick={handleSaveShift}
					type='button'
					className='h-10 min-w-[120px] flex-grow items-center justify-center bg-primary text-lg text-primary-dark duration-200 max-md:flex'>
					<FaCheck />
					Save
				</Button>
			</div>
		</form>
	);
};

export default Time;
