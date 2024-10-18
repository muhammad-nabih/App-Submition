import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface TaskFormProps {
	taskName: string;
	taskDetails: string;
	taskStatus: string;
	onTaskNameChange: (value: string) => void;
	onTaskDetailsChange: (value: string) => void;
	onTaskStatusChange: (status: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
	taskName,
	taskDetails,
	taskStatus,
	onTaskNameChange,
	onTaskDetailsChange,
	onTaskStatusChange,
}) => {
	return (
		<div className='space-y-6'>
			<h2 className='mb-4 text-xl font-bold'>Task</h2>

			<div className='space-y-2'>
				<label htmlFor='taskName' className='block text-primary-dark'>
					Task Name <span className='text-red-500'>*</span>
				</label>
				<Input
					type='text'
					id='taskName'
					value={taskName}
					onChange={(e) => onTaskNameChange(e.target.value)}
					required
					className='border-text-primary-light w-full rounded border p-2 text-primary-dark placeholder:text-primary-light'
				/>
			</div>

			<div className='space-y-2'>
				<label htmlFor='taskDetails' className='block text-primary-dark'>
					Task Details <span className='text-red-500'>*</span>
				</label>
				<Textarea
					placeholder='Type your description'
					value={taskDetails}
					onChange={(e) => onTaskDetailsChange(e.target.value)}
					className='border-text-primary-light h-24 w-full resize-none rounded border p-2 text-primary-dark placeholder:text-primary-muted'
				/>
			</div>

			<div className='space-y-2'>
				<h3 className='text-gray-600'>
					Task Status <span className='text-red-500'>*</span>
				</h3>
				<div className='flex gap-4'>
					<Button
						type='button'
						className={`rounded shadow-none ${taskStatus === 'Still Needs to Work' ? 'bg-gray-200 shadow-sm' : 'bg-white'}`}
						onClick={() => onTaskStatusChange('Still Needs to Work')}>
						Still Needs to Work
					</Button>
					<Button
						type='button'
						className={`rounded shadow-none ${taskStatus === 'Done' ? 'bg-gray-200 shadow-sm' : 'bg-transparent'}`}
						onClick={() => onTaskStatusChange('Done')}>
						Done
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TaskForm;
