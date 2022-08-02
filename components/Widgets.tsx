import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Widgets = () => {
	return (
		<div className="mt-2 px-2">
			{/* Search */}
			<div className="flex items-center space-x-2 bg-gray-100 rounded-full p-3 mt-2">
				<SearchIcon className="h-5 w-5 text-gray-400" />
				<input
					className="flex-1 bg-transparent outline-none"
					placeholder="Search Lutter"
				/>
			</div>

			<TwitterTimelineEmbed
				sourceType="profile"
				screenName="arealclimber"
				options={{ height: 1000 }}
			/>
		</div>
	);
};

export default Widgets;
