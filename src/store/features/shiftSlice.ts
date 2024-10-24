import { ShiftsState, ShiftState, Task } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ShiftsState = {
	shifts: [],
};

const shiftsSlice = createSlice({
	name: 'shifts',
	initialState,
	reducers: {
		addShift: (state, { payload }: PayloadAction<ShiftState>) => {
			state.shifts.push(payload);
		},
		updateShiftStartTime: (
			state,
			{ payload }: PayloadAction<{ id: string; startTime: string }>,
		) => {
			const shift = state.shifts.find((shift) => shift.id === payload.id);
			if (shift) {
				shift.startTime = payload.startTime;
			}
		},
		updateShiftEndTime: (
			state,
			{ payload }: PayloadAction<{ id: string; endTime: string }>,
		) => {
			const shift = state.shifts.find((shift) => shift.id === payload.id);
			if (shift) {
				shift.endTime = payload.endTime;
			}
		},
		updateShiftBreakTime: (
			state,
			{ payload }: PayloadAction<{ id: string; breakTime: string }>,
		) => {
			const shift = state.shifts.find((shift) => shift.id === payload.id);
			if (shift) {
				shift.breakTime = payload.breakTime;
			}
		},
		updateTaskName: (
			state,
			{
				payload,
			}: PayloadAction<{ shiftId: string; taskId: string; taskName: string }>,
		) => {
			const shift = state.shifts.find((shift) => shift.id === payload.shiftId);
			const task = shift?.tasks.find((task) => task.id === payload.taskId);
			if (task) {
				task.name = payload.taskName;
			}
		},
		updateTaskDetails: (
			state,
			{
				payload,
			}: PayloadAction<{
				shiftId: string;
				taskId: string;
				taskDetails: string;
			}>,
		) => {
			const shift = state.shifts.find((shift) => shift.id === payload.shiftId);
			const task = shift?.tasks.find((task) => task.id === payload.taskId);
			if (task) {
				task.details = payload.taskDetails;
			}
		},
		addTask: (
			state,
			action: PayloadAction<{ shiftId: string; task: Task }>,
		) => {
			const { shiftId, task } = action.payload;
			const shift = state.shifts.find((shift) => shift.id === shiftId);
			if (shift) {
				shift.tasks.push(task);
			}
		},
		updateTaskStatus: (
			state,
			{
				payload,
			}: PayloadAction<{
				shiftId: string;
				taskId: string;
				taskStatus: 'Still Needs to Work' | 'Done';
			}>,
		) => {
			const shift = state.shifts.find((shift) => shift.id === payload.shiftId);
			const task = shift?.tasks.find((task) => task.id === payload.taskId);
			if (task) {
				task.status = payload.taskStatus;
			}
		},
	},
});

export const {
	addTask,
	addShift,
	updateShiftStartTime,
	updateShiftEndTime,
	updateShiftBreakTime,
	updateTaskName,
	updateTaskDetails,
	updateTaskStatus,
} = shiftsSlice.actions;

export default shiftsSlice.reducer;
