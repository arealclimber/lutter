import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { TwitterShareButton, TwitterTimelineEmbed } from 'react-twitter-embed';

const Widgets = () => {
	return (
		<div className="mt-2 px-2 col-span-2 hidden lg:inline">
			{/* Search */}
			<div className="flex items-center space-x-2 bg-gray-100 rounded-full p-3 mt-2">
				<SearchIcon className="h-5 w-5 text-gray-400" />
				<input
					className="flex-1 bg-transparent outline-none"
					placeholder="Search Lutter"
				/>
			</div>

			{/* <TwitterShareButton
				url={'https://arealclimber.me/'}
				options={{
					text: '#nextjs is awesome',
					via: 'arealclimber',
				}}
			/> */}

			<div className="mt-5">
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="arealclimber"
					options={{ height: 1000 }}
				/>
			</div>
		</div>
	);
};

export default Widgets;
