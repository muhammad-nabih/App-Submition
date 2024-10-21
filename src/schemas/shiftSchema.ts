import { z } from 'zod';

export const taskSchema = z.object({
	id: z.string(),
	name: z.string().min(1, { message: 'Task name is required' }),
	details: z.string().min(1, { message: 'Task details is required' }),
	status: z.enum(['Still Needs to Work', 'Done'], {
		required_error: 'Task status is required',
	}),
});

export const shiftSchema = z.object({
	id: z.string(),
	startTime: z.string().min(1, { message: 'Start time is required' }),
	endTime: z.string().min(1, { message: 'End time is required' }),
	breakTime: z.string().min(1, { message: 'Break time is required' }),
	tasks: z.array(taskSchema),
});

// Types
export type Task = z.infer<typeof taskSchema>;
export type Shift = z.infer<typeof shiftSchema>;
