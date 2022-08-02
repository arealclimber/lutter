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

function Sidebar() {
	return (
		<div className="flex flex-col items-center px-4 col-span-2 md:items-start">
			<Link href="/">
				<BsTwitter
					className="h-6 w-6 cursor-pointer m-3 text-cuteBlue"
					size="2rem"
				/>
			</Link>
			<SidebarRow Icon={HomeIcon} title="Home" />
			<SidebarRow Icon={HashtagIcon} title="Explore" />
			<SidebarRow Icon={BellIcon} title="Notifications" />
			<SidebarRow Icon={MailIcon} title="Messages" />
			<SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
			<SidebarRow Icon={CollectionIcon} title="Lists" />
			<SidebarRow Icon={UserIcon} title="Sign in" />

			<SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
		</div>
	);
}

export default Sidebar;
