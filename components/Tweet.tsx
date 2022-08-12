import React, { useEffect, useState } from 'react';
import { Comment, CommentBody, Tweet } from '../typings';
import TimeAgo from 'react-timeago';
import {
	ChatAlt2Icon,
	HeartIcon,
	SwitchHorizontalIcon,
	UploadIcon,
} from '@heroicons/react/outline';
import { fetchComments } from '../utils/fetchComments';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

interface Props {
	tweet: Tweet;
}

// TODO: Use Context to refactor
const TweetComponent = ({ tweet }: Props) => {
	const [comments, setComments] = useState<Comment[]>([]);
	const [commentsBoxVisible, setCommentBoxVisible] = useState<boolean>(false);
	const [input, setInput] = useState<string>('');
	const { data: session } = useSession();

	const refreshComments = async () => {
		const comments: Comment[] = await fetchComments(tweet._id);
		setComments(comments);
	};

	// TODO: Alternative solution: session && session.user.name ?
	const postComment = async () => {
		const commentInfo: CommentBody = {
			comment: input,
			tweetId: tweet._id,
			username: session?.user?.name || 'Unknown User',
			profileImg:
				session?.user?.image ||
				'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg',
		};

		const result = await fetch(`/api/addComment`, {
			body: JSON.stringify(commentInfo),
			method: 'POST',
		});

		const json = await result.json();

		// const newComment = await fetchComments(tweet._id);
		// setComments(newComment);
		setInput('');
		setCommentBoxVisible(false);
		refreshComments();

		return json;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const postPromise = postComment();
		toast.promise(
			postPromise,
			{
				loading: 'Loading...',
				success: 'Comment Posted!',
				error: 'something wrong...',
			},
			{
				success: {
					duration: 5000,
					icon: '🍻',
				},
			}
		);

		// setInput('');
		// setCommentBoxVisible(false);
		// refreshComments();
	};

	useEffect(() => {
		refreshComments();
	}, []);

	// console.log('TweetComment>>>', comments);

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

						<TimeAgo
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
				<div
					onClick={() =>
						session
							? setCommentBoxVisible(!commentsBoxVisible)
							: toast.error('Please Sign In')
					}
					className="flex items-center cursor-pointer space-x-3 text-gray-400 hover:text-hoverBlue"
				>
					<ChatAlt2Icon className="h-5 w-5" />
					<p>{comments.length}</p>
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

			{/* Comment Box Logic */}
			{commentsBoxVisible && (
				<form onSubmit={handleSubmit} className="mt-3 flex space-x-3">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
						type="text"
						placeholder="Write a comment..."
					/>
					<button
						disabled={!input}
						type="submit"
						className="text-cuteBlue font-bold disabled:text-gray-300"
					>
						Post
					</button>
				</form>
			)}

			{/* `comments` might be undefined, so we use `?.` */}
			{comments?.length > 0 && (
				<div className="my-2 mt-5 max-h-24 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
					{comments.map((comment) => (
						<div key={comment._id} className="relative flex space-x-2">
							<hr className="absolute left-5 top-10 h-8 border-x border-gray-200" />
							<img
								src={comment.profileImg}
								alt=""
								className="mt-2 h-7 w-7 rounded-full object-cover"
							/>
							<div>
								<div className="flex items-center space-x-1">
									<p className="mr-1 font-bold">
										{comment.username}
									</p>
									<p className="hidden text-cuteBlue text-sm lg:inline">
										@
										{comment.username
											.replace(/\s+/g, '')
											.toLowerCase()}
									</p>
									<TimeAgo
										date={comment._createdAt}
										className="text-sm text-gray-500"
									/>
								</div>
								<p>{comment.comment}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default TweetComponent;
