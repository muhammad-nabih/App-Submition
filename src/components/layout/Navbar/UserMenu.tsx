'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserCircle, Settings, LogOut, Bell } from 'lucide-react';
import { Dialog, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface UserMenuProps {
	user: {
		name: string;
		role: string;
		avatar: string;
	};
}

export default function UserMenu({ user }: UserMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<motion.button
					className='group flex items-center space-x-2 rounded-full p-1.5 transition-all duration-300 ease-in-out hover:bg-accent/20'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					aria-label='Open user menu'>
					<Avatar className='h-8 w-8 cursor-pointer ring-2 ring-primary/10 transition-all duration-300 ease-in-out group-hover:ring-primary group-hover:ring-offset-2'>
						<AvatarImage src={user.avatar} alt={user.name} />
						<AvatarFallback className='bg-primary/10 text-primary-foreground'>
							{user.name.charAt(0).toUpperCase()}
						</AvatarFallback>
					</Avatar>
					<span className='text-sm font-medium text-primary-foreground transition-colors duration-300 ease-in-out group-hover:text-primary'>
						{user.name}
					</span>
				</motion.button>
			</DropdownMenuTrigger>

			<AnimatePresence>
				{isOpen && (
					<Dialog open={true}>
						<DropdownMenuContent
							align='end'
							className='w-56 overflow-hidden rounded-xl p-2 shadow-lg'
							asChild>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.2 }}
								className='bg-background/80 backdrop-blur-sm'>
								<DialogTitle className='sr-only'>User Menu</DialogTitle>
								<DialogDescription className='sr-only'>
									User profile and settings menu
								</DialogDescription>

								<DropdownMenuLabel className='p-0'>
									<div className='flex items-center space-x-3 rounded-lg bg-accent/5 p-3'>
										<Avatar className='h-10 w-10'>
											<AvatarImage src={user.avatar} alt={user.name} />
											<AvatarFallback className='bg-primary/10 text-base text-primary-foreground'>
												{user.name.charAt(0).toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<div className='flex flex-col space-y-1'>
											<p className='text-sm font-semibold text-primary-foreground'>
												{user.name}
											</p>
											<p className='text-xs text-muted-foreground'>
												{user.role}
											</p>
										</div>
									</div>
								</DropdownMenuLabel>

								<DropdownMenuSeparator className='my-2' />

								<DropdownMenuItem className='flex cursor-pointer items-center space-x-2 rounded-md p-2 text-sm transition-colors hover:bg-accent/10'>
									<UserCircle className='h-4 w-4 text-muted-foreground' />
									<span>My Profile</span>
								</DropdownMenuItem>

								<DropdownMenuItem className='flex cursor-pointer items-center space-x-2 rounded-md p-2 text-sm transition-colors hover:bg-accent/10'>
									<Bell className='h-4 w-4 text-muted-foreground' />
									<span>Notifications</span>
								</DropdownMenuItem>

								<DropdownMenuItem className='flex cursor-pointer items-center space-x-2 rounded-md p-2 text-sm transition-colors hover:bg-accent/10'>
									<Settings className='h-4 w-4 text-muted-foreground' />
									<span>Settings</span>
								</DropdownMenuItem>

								<DropdownMenuSeparator className='my-2' />

								<DropdownMenuItem className='flex cursor-pointer items-center space-x-2 rounded-md p-2 text-sm text-destructive transition-colors hover:bg-destructive/10'>
									<LogOut className='h-4 w-4' />
									<span>Log Out</span>
								</DropdownMenuItem>
							</motion.div>
						</DropdownMenuContent>
					</Dialog>
				)}
			</AnimatePresence>
		</DropdownMenu>
	);
}
