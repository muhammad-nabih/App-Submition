'use client';
import React from 'react';

import { Button } from '@/components/ui/button';

import { useAppSelector } from '@/store/hooks';

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { usePreviewContext } from '@/contexts/previewContext';
import { PreviewItem } from '@/lib/helpers/helpers';
import SubmissionPreviewMobile from '@/app/(pages)/today/SubmissionPreviewMobile';
import ShiftsPreview from '@/app/(pages)/today/ShiftsPreview';

export default function SubmissionPreview() {
	const shifts = useAppSelector((state) => state.shifts.shifts);
	const { isShow, isSaved } = usePreviewContext();

	return isShow ? (
		<SubmissionPreviewMobile />
	) : (
		<Card
			className={`mx-auto my-6 flex w-[448px] flex-1 flex-col space-y-6 rounded-md border-none bg-card px-3 shadow-sm max-md:hidden max-md:px-1 md:min-w-[400px] ${isSaved ? 'flex' : 'hidden'} max-h-[85vh] overflow-auto`}>
			<CardHeader className='sticky top-0 my-0 w-full bg-white p-0 px-0 pb-0'>
				<CardTitle className='flex justify-between border-b border-[#00150B1A] px-2 py-6 text-xl font-bold'>
					<span>Submission Preview</span>
					<div className='flex items-center justify-center rounded-full bg-notification px-[6px] py-1 text-xs font-normal text-white'>
						-2 Hours $
					</div>
				</CardTitle>
			</CardHeader>

			{/* Shifts preview Component */}
			<ShiftsPreview />

			{/* Should Handle Submit */}
			<CardFooter className='sticky bottom-0 z-10 flex h-full w-full bg-white py-5'>
				<Button
					// onClick={'handleSubmit'}
					className='mt-4 h-11 w-full self-end rounded-lg bg-primary py-3 font-semibold text-primary-foreground hover:bg-accent-hover'>
					Submit
				</Button>
			</CardFooter>
		</Card>
	);
}
