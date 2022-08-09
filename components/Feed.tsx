import { RefreshIcon } from '@heroicons/react/outline';
import { Comment, Tweet } from '../typings';
import TweetComponent from '../components/Tweet';
import TweetBox from './TweetBox';
import { useState } from 'react';
import { fetchTweets } from '../utils/fetchTweets';
import toast, { Toaster } from 'react-hot-toast';
import { fetchComments } from '../utils/fetchComments';

interface Props {
	tweets: Tweet[];
}

const Feed = ({ tweets: tweetsProps }: Props) => {
	const [tweets, setTweets] = useState<Tweet[]>(tweetsProps);
	// TODO: Fetch all comments: 0.getAllComments 1.fetchAllComments 2.import fetchAllComments here
	const [comments, setComments] = useState<Comment[]>([]);

	console.log(tweets);

	const handleRefresh = async () => {
		const refreshToast = toast.loading('Refreshing...');

		const tweets = await fetchTweets();
		setTweets(tweets);

		toast.success('Feed Updated!', {
			id: refreshToast,
		});
	};

	return (
		<div className="col-span-7 lg:col-span-5 border-x">
			<div className="flex items-center justify-between">
				<h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
				<RefreshIcon
					onClick={handleRefresh}
					className="mr-5 mt-5 h-8 w-6 cursor-pointer 
                text-cuteBlue transition-all duration-500 ease-out 
                hover:rotate-180 active:scale-125"
				/>
			</div>

			{/* TweetBox */}
			<div>
				<TweetBox />
			</div>

			{/* Feed */}
			<div>
				{tweets.map((tweet) => {
					return <TweetComponent key={tweet._id} tweet={tweet} />;
				})}
			</div>
		</div>
	);
};

export default Feed;
