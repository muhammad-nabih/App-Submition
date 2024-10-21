'use client';
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import ShortUniqueId from 'short-unique-id';
import {
	addShift,
	updateShiftStartTime,
	updateShiftEndTime,
	updateShiftBreakTime,
	updateTaskName,
	updateTaskDetails,
	updateTaskStatus,
	addTask,
} from '@/store/features/shiftSlice';
// import { v4 as uuidv4 } from 'uuid';
import ActionButton from './ActionButton';
import { Button } from '@/components/ui/button';
import { FaCheck } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import { Task } from '@/types/types';
import { useRef } from 'react';
import SubmissionPreview from '@/app/(pages)/today/SubmissionPreview';

const { randomUUID } = new ShortUniqueId({ length: 10 });

const Time: React.FC = () => {
	const dispatch = useAppDispatch();
	const [isShow, setIsShow] = useState(false);
	const shifts = useAppSelector((state) => state.shifts.shifts);
	const [currentShiftId, setCurrentShiftId] = useState<string | null>(null);
	const [isEditing, setIsEditing] = useState(true);

	// Manage time inputs state
	const [inputs, setInputs] = useState({
		startTime: '',
		endTime: '',
		breakTime: '',
	});

	// Manage task state
	const [tasks, setTasks] = useState<Task[]>([
		{ id: randomUUID(), name: '', details: '', status: 'Still Needs to Work' },
	]);

	let lastShift;
	useEffect(() => {
		if (shifts.length > 0 && !currentShiftId) {
			lastShift = shifts[shifts.length - 1];
			setCurrentShiftId(lastShift.id);
			setInputs({
				startTime: lastShift.startTime,
				endTime: lastShift.endTime,
				breakTime: lastShift.breakTime,
			});
			setTasks(lastShift.tasks);
			setIsEditing(false);
		}
	}, [shifts, currentShiftId]);

	const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newStartTime = e.target.value;
		setInputs((prev) => ({ ...prev, startTime: newStartTime }));
		if (currentShiftId) {
			dispatch(
				updateShiftStartTime({ id: currentShiftId, startTime: newStartTime }),
			);
		}
	};

	const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newEndTime = e.target.value;
		setInputs((prev) => ({ ...prev, endTime: newEndTime }));
		if (currentShiftId) {
			dispatch(updateShiftEndTime({ id: currentShiftId, endTime: newEndTime }));
		}
	};

	const handleBreakTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newBreakTime = e.target.value;
		setInputs((prev) => ({ ...prev, breakTime: newBreakTime }));
		if (currentShiftId) {
			dispatch(
				updateShiftBreakTime({ id: currentShiftId, breakTime: newBreakTime }),
			);
		}
	};

	const handleTaskNameChange = (taskId: string, newName: string) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, name: newName } : task,
			),
		);
		if (currentShiftId) {
			dispatch(
				updateTaskName({ shiftId: currentShiftId, taskId, taskName: newName }),
			);
		}
	};

	const handleTaskDetailsChange = (taskId: string, newDetails: string) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, details: newDetails } : task,
			),
		);
		if (currentShiftId) {
			dispatch(
				updateTaskDetails({
					shiftId: currentShiftId,
					taskId,
					taskDetails: newDetails,
				}),
			);
		}
	};

	const handleTaskStatusChange = (
		taskId: string,
		newStatus: 'Still Needs to Work' | 'Done',
	) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, status: newStatus } : task,
			),
		);
		if (currentShiftId) {
			dispatch(
				updateTaskStatus({
					shiftId: currentShiftId,
					taskId,
					taskStatus: newStatus,
				}),
			);
		}
	};

	const handleSaveShift = () => {
		if (currentShiftId) {
			setIsEditing(false);
		} else {
			const newShiftId = randomUUID();
			dispatch(
				addShift({
					id: newShiftId,
					startTime: inputs.startTime,
					endTime: inputs.endTime,
					breakTime: inputs.breakTime,
					tasks: tasks,
				}),
			);
			setCurrentShiftId(newShiftId);
			setIsEditing(false);
		}
	};

	const handleAddNewTask = () => {
		const newTask: Task = {
			id: randomUUID(),
			name: '',
			details: '',
			status: 'Still Needs to Work',
		};
		setTasks([...tasks, newTask]);
		if (currentShiftId) {
			dispatch(addTask({ shiftId: currentShiftId, task: newTask }));
		}
	};

	const handleAddNewShift = () => {};

	const handleCancelShift = () => {};
	return (
		<form className='min-w-[320px] space-y-4'>
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
							disabled={!isEditing}
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
							disabled={!isEditing}
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
						disabled={!isEditing}
						className='w-full rounded border border-primary-muted p-2 text-primary-dark'
					/>
				</div>
			</div>

			{tasks.map((task, index) => (
				<div key={task.id} className='space-y-4'>
					<div className='space-y-2'>
						<h3 className='text-gray-600'>
							Task {index + 1} <span className='text-error'>*</span>
						</h3>
						<Input
							type='text'
							value={task.name}
							onChange={(e) => handleTaskNameChange(task.id, e.target.value)}
							required
							disabled={!isEditing}
							className='border-text-primary-light w-full rounded border p-2 text-primary-dark placeholder:text-primary-light'
						/>
					</div>
					<div className='space-y-2'>
						<h3 className='text-gray-600'>
							Task Details {index + 1} <span className='text-error'>*</span>
						</h3>
						<Textarea
							value={task.details}
							onChange={(e) => handleTaskDetailsChange(task.id, e.target.value)}
							disabled={!isEditing}
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
								onClick={() =>
									handleTaskStatusChange(task.id, 'Still Needs to Work')
								}
								disabled={!isEditing}
								className={`rounded shadow-none ${
									task.status === 'Still Needs to Work'
										? 'bg-gray-200 shadow-sm'
										: 'bg-white'
								}`}>
								Still Needs to Work
							</Button>
							<Button
								type='button'
								onClick={() => handleTaskStatusChange(task.id, 'Done')}
								disabled={!isEditing}
								className={`rounded shadow-none ${
									task.status === 'Done'
										? 'bg-gray-200 shadow-sm'
										: 'bg-transparent'
								}`}>
								Done
							</Button>
						</div>
					</div>
				</div>
			))}

			<div className='flex items-center justify-end gap-4 py-2'>
				<ActionButton
					text='Add New Task'
					variant='rounded'
					onClick={handleAddNewTask}
					disabled={!isEditing}
				/>
			</div>

			<div className='flex items-center justify-end gap-4 py-2'>
				<Button
					type='button'
					onClick={() => setIsEditing(true)}
					disabled={isEditing}
					className='h-10 min-w-[120px] flex-1 items-center justify-center bg-[#00150B0D] text-lg text-primary-dark duration-200 hover:bg-primary-dark hover:text-white max-md:flex'>
					<MdEdit />
					Edit
				</Button>

				<Button
					onClick={handleSaveShift}
					type='button'
					disabled={!isEditing}
					className='h-10 min-w-[120px] flex-1 items-center justify-center bg-primary text-lg text-primary-dark duration-200 max-md:flex'>
					<FaCheck />
					Save Shift{lastShift}
				</Button>
			</div>

			<div className='flex items-center justify-end gap-4 py-2'>
				<ActionButton
					text='Add Another Shift'
					variant='square'
					fullWidth={true}
					onClick={handleAddNewShift}
					disabled={!isEditing}
				/>
				<Button
					type='button'
					onClick={() => setIsShow(true)}
					className='hidden h-11 w-full self-end rounded-sm bg-primary py-3 font-semibold text-primary-foreground hover:bg-accent-hover max-md:block'>
					Next
				</Button>
				<SubmissionPreview isShow={isShow} setIsShow={setIsShow} />
			</div>
		</form>
	);
};

export default Time;
