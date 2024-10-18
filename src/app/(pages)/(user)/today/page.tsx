import SubmissionPreview from '@/app/(pages)/(user)/today/SubmissionPreview';
import TodaySubmission from '@/app/(pages)/(user)/today/TodaySubmission';
const Today = () => {
	return (
		<div className='mx-auto flex gap-6 rounded-md bg-transparent px-10 shadow-none max-md:px-3'>
			<TodaySubmission />
			<SubmissionPreview />
		</div>
	);
};

export default Today;
