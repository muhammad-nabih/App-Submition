import React from 'react';
import TodayNavbar from '@/app/(pages)/today/TodayNavbar';
import Time from '@/app/(pages)/today/Time';

const TodaySubmission = () => {
	return (
		<div className='container mx-auto my-6 h-[80vh] overflow-y-auto rounded-md bg-card px-6 py-0 shadow-sm'>
			<TodayNavbar />
			<Time />
		</div>
	);
};

export default TodaySubmission;
