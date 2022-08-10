import {
	CalendarIcon,
	EmojiHappyIcon,
	LocationMarkerIcon,
	PhotographIcon,
	SearchCircleIcon,
} from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

const TweetBox = () => {
	const [input, setInput] = useState<string>('');
	const { data: session } = useSession();

	return (
		<div className="flex space-x-2 p-5">
			<img
				className="mt-4 h-14 w-14 rounded-full object-cover"
				src={
					session?.user?.image ||
					'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'
				}
				alt="user"
			/>

			<div className="flex flex-1 items-center pl-2">
				<form className="flex flex-1 flex-col">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="h-24 w-full text-xl outline-none placeholder:text-xl"
						type="text"
						placeholder={`What's Happening?`}
					/>

					<div className="flex items-center">
						{/* Utility icons */}
						<div className="flex flex-1 space-x-2 text-cuteBlue">
							<PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
							<SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
							<EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
							<CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
							<LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
						</div>

						{/* Tweet btn */}
						<button
							disabled={!input || !session}
							className="bg-cuteBlue text-white px-5 py-2 font-bold rounded-full disabled:opacity-40"
						>
							Tweet
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TweetBox;
