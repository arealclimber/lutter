import React from 'react';
import {
	BellIcon,
	HashtagIcon,
	BookmarkIcon,
	CollectionIcon,
	DotsCircleHorizontalIcon,
	MailIcon,
	UserIcon,
	HomeIcon,
} from '@heroicons/react/outline';
import { BsTwitter } from 'react-icons/bs';
import SidebarRow from './SidebarRow';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

function Sidebar() {
	const { data: session } = useSession();

	return (
		<div className="flex flex-col items-center px-4 col-span-2 md:items-start">
			<Link href="/">
				<BsTwitter
					className="h-6 w-6 cursor-pointer m-3 text-cuteBlue"
					size="2rem"
				/>
			</Link>
			<SidebarRow Icon={HomeIcon} title="Home" />
			{/* TODO: Building area boolean, making it hovering gray */}
			<SidebarRow
				onClick={() => toast('Building...', { icon: '🏗️' })}
				Icon={HashtagIcon}
				title="Explore"
			/>
			<SidebarRow
				onClick={() => toast('Building...', { icon: '🏗️' })}
				Icon={BellIcon}
				title="Notifications"
			/>
			<SidebarRow
				onClick={() => toast('Building...', { icon: '🏗️' })}
				Icon={MailIcon}
				title="Messages"
			/>
			<SidebarRow
				onClick={() => toast('Building...', { icon: '🏗️' })}
				Icon={BookmarkIcon}
				title="Bookmarks"
			/>
			<SidebarRow
				onClick={() => toast('Building...', { icon: '🏗️' })}
				Icon={CollectionIcon}
				title="Lists"
			/>
			<SidebarRow
				onClick={session ? signOut : signIn}
				Icon={UserIcon}
				title={session ? 'Sign Out' : 'Sign In'}
			/>

			<SidebarRow
				onClick={() => toast('Building...', { icon: '🏗️' })}
				Icon={DotsCircleHorizontalIcon}
				title="More"
			/>
		</div>
	);
}

export default Sidebar;
