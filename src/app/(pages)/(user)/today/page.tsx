import { Card } from '@/components/ui/card';
import React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import TodayNavbar from '@/app/(pages)/(user)/today/TodayNavbar';
const Today = () => {
	return (
		<div className='container mx-auto my-8 rounded-md bg-card shadow-md'>
			<TodayNavbar />
		</div>
	);
};

export default Today;
