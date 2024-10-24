export interface User {
	name: string;
	role: string;
	avatar: string;
}

export interface SetOpenFunction {
	(isOpen: boolean): void;
}


export interface ActionButtonProps {
	text: string;
	fullWidth?: boolean;
	variant?: 'rounded' | 'square';
	disabled?: boolean;
	onClick?: () => void;
}

export interface Task {
	id: string;
	name: string;
	details: string;
	status: 'Still Needs to Work' | 'Done';
}

export interface ShiftState {
	id: string;
	startTime: string;
	endTime: string;
	breakTime: string;
	tasks: Task[];
}

export interface ShiftsState {
	shifts: ShiftState[];
}
