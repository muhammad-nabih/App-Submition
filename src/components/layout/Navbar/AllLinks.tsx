import NavLinks from '@/components/layout/Navbar/NavLinks';
import React from 'react';
import UserProp from '@/components/layout/Navbar/UserDetails';
import { User } from '@/types/types';
import Logout from '@/components/layout/Navbar/Logout';

interface AllLinksProps {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	user?: User;
}

const AllLinks: React.FC<AllLinksProps> = ({ setIsOpen, user }) => {
	return (
		<>
			<div className='hidden md:flex'>
				<NavLinks setOpen={setIsOpen} />
			</div>
			<div className='hidden items-center gap-2 md:flex'>
				{user ? <UserProp user={user} /> : <p>No user data</p>}
				<Logout />
			</div>
		</>
	);
};

export default AllLinks;
