import {
	CalendarIcon,
	EmojiHappyIcon,
	LocationMarkerIcon,
	PhotographIcon,
	SearchCircleIcon,
} from '@heroicons/react/outline';
import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Tweet, TweetBody } from '../typings';
import { fetchTweets } from '../utils/fetchTweets';
import toast from 'react-hot-toast';

interface Props {
	setTweets: Dispatch<SetStateAction<Tweet[]>>;
}

const TweetBox = ({ setTweets }: Props) => {
	const [input, setInput] = useState<string>('');
	const [image, setImage] = useState<string>('');
	const { data: session } = useSession();
	const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false);

	const imageInputRef = useRef<HTMLInputElement>(null);

	const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();

		if (!imageInputRef.current?.value) return;

		setImage(imageInputRef.current.value);
		imageInputRef.current.value = '';
		setImageUrlBoxIsOpen(false);
	};

	const postTweet = async () => {
		// const waitTweet = toast.loading('Pending...');

		const tweetInfo: TweetBody = {
			text: input,
			username: session?.user?.name || 'Unknown User',
			profileImg:
				session?.user?.image ||
				'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg',
			image: image,
		};

		const result = await fetch(`/api/addTweet`, {
			body: JSON.stringify(tweetInfo),
			method: 'POST',
		});

		const json = await result.json();

		const newTweets = await fetchTweets();
		setTweets(newTweets);

		// toast.success('Tweet Posted', {
		// 	id: waitTweet,
		// 	icon: '🍕',
		// });

		return json;
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();

		const postPromise = postTweet();
		toast.promise(
			postPromise,
			{
				loading: 'Loading...',
				success: 'Tweet Posted!',
				error: 'something wrong...',
			},
			{
				success: {
					duration: 5000,
					icon: '🚀',
				},
			}
		);

		setImage('');
		setInput('');
		setImageUrlBoxIsOpen(false);
	};

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
							<PhotographIcon
								onClick={() =>
									setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)
								}
								className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
							/>
							<SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
							<EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
							<CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
							<LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
						</div>

						{/* Tweet btn */}
						<button
							onClick={handleSubmit}
							disabled={!input || !session}
							className="bg-cuteBlue text-white px-5 py-2 font-bold rounded-full disabled:opacity-40"
						>
							Tweet
						</button>
					</div>

					{imageUrlBoxIsOpen && (
						<form className="mt-5 flex rounded-lg bg-cuteBlue/80 py-2 px-4">
							<input
								ref={imageInputRef}
								className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
								type="text"
								placeholder="Enter Image URL..."
							/>
							<button
								type="submit"
								onClick={addImageToTweet}
								className="font-bold text-white"
							>
								Add Image
							</button>
						</form>
					)}

					{image && (
						<img
							className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
							src={image}
							alt=""
						/>
					)}
				</form>
			</div>
		</div>
	);
};

export default TweetBox;
