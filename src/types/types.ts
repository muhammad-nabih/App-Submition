export interface User {
	name: string;
	role: string;
	avatar: string;
}

export interface SetOpenFunction {
	(isOpen: boolean): void;
}
