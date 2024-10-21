import { Card } from '@/components/ui/card';
import React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import TodayNavbar from '@/app/(pages)/today/TodayNavbar';
import Time from '@/app/(pages)/today/Time';

const TodaySubmission = () => {
	return (
		<div className='container mx-auto my-8  rounded-md bg-card px-2 py-2 shadow-md md:px-6 md:py-5'>
			<TodayNavbar />
			<Time />
		</div>
	);
};

export default TodaySubmission;
