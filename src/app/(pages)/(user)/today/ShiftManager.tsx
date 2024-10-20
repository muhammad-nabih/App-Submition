// components/ShiftManager.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

interface ShiftManagerProps {
	shifts: Array<{ id: number; isActive: boolean }>;
	setActiveShift: (id: number) => void;
}

const ShiftManager: React.FC<ShiftManagerProps> = ({
	shifts,
	setActiveShift,
}) => {
	return (
		<div className='flex space-x-2 border-b border-t border-[#00150b1a] py-2'>
			{shifts.map((shift) => (
				<Button
					key={shift.id}
					onClick={() => setActiveShift(shift.id)}
					variant={shift.isActive ? 'default' : 'outline'}>
					Shift {shift.id}
				</Button>
			))}
		</div>
	);
};

export default ShiftManager;
