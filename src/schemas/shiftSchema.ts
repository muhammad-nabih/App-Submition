
import z from 'zod';

export const shiftSchema = z.object({
	startTime: z.string().min(1, { message: 'Start time is required' }),
	endTime: z.string().min(1, { message: 'End time is required' }),
	breakTime: z.string().min(1, { message: 'Break time is required' }),
	taskName: z.string().min(1, { message: 'Task name is required' }),
	taskDetails: z.string().min(1, { message: 'Task details is required' }),
	taskStatus: z.string().min(1, { message: 'Task status is required' }),
});

type shiftSchema = z.infer<typeof shiftSchema>;
