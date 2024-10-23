import SubmissionPreview from '@/app/(pages)/today/SubmissionPreview';
import TodaySubmission from '@/app/(pages)/today/TodaySubmission';

const Today = () => {
	return (
		<div className='mx-auto flex gap-6 rounded-md bg-background px-10 shadow-none max-md:px-3'>
			<TodaySubmission />
			<SubmissionPreview />
		</div>
	);
};

export default Today;
