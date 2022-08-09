import React from 'react';
import { Tweet } from '../typings';
import Timeage from 'react-timeago';
import {
	ChatAlt2Icon,
	HeartIcon,
	SwitchHorizontalIcon,
	UploadIcon,
} from '@heroicons/react/outline';

interface Props {
	tweet: Tweet;
}

const TweetComponent = ({ tweet }: Props) => {
	return (
		<div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
			<div className="flex space-x-3">
				<img
					className="h-10 w-10 rounded-full object-cover"
					src={tweet.profileImg}
					alt={tweet.username}
				/>
				<div>
					<div className="flex items-center space-x-1">
						<p className="mr-1 font-bold">{tweet.username}</p>
						<p className="hidden text-sm text-cuteBlue sm:inline pr-1">
							@{tweet.username.replace(/\s+/g, '').toLowerCase()}
						</p>

						<Timeage
							className="text-sm text-gray-500"
							date={tweet._createdAt}
						/>
					</div>

					<p>{tweet.text}</p>

					{tweet.image && (
						<img
							src={tweet.image}
							alt="{tweet.text}"
							className="m-5 ml-0 mb-1 max-h-60 rounded-lg shadow-lg"
						/>
					)}
				</div>
			</div>

			<div className="mt-5 flex justify-between ">
				<div className="flex items-center cursor-pointer space-x-3 text-gray-400 hover:text-hoverBlue">
					<ChatAlt2Icon className="h-5 w-5" />
					<p>5</p>
				</div>
				<div className="flex items-center cursor-pointer space-x-3 text-gray-400 hover:text-hoverBlue">
					<SwitchHorizontalIcon className="h-5 w-5" />
				</div>
				<div className="flex items-center cursor-pointer space-x-3 text-gray-400 hover:text-hoverBlue">
					<HeartIcon className="h-5 w-5" />
					<p>2</p>
				</div>
				<div className="flex items-center cursor-pointer space-x-3 text-gray-400 hover:text-hoverBlue">
					<UploadIcon className="h-5 w-5" />
				</div>
			</div>
		</div>
	);
};

// const TweetComponent = () => {
// 	return <div>TweetComponent</div>;
// };

export default TweetComponent;
