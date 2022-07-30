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

function Sidebar() {
	return (
		<div>
			<BsTwitter className="h-10 w-10" color="#A5C4F3" size="2rem" />
			<SidebarRow Icon={HomeIcon} title="Home" />
		</div>
	);
}

export default Sidebar;
