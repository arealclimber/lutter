import { RefreshIcon } from '@heroicons/react/outline';
import { Tweet } from '../typings';
import TweetComponent from '../components/Tweet';
import TweetBox from './TweetBox';

interface Props {
	tweets: Tweet[];
}

const Feed = ({ tweets }: Props) => {
	return (
		<div className="col-span-7 lg:col-span-5 border-x">
			<div className="flex items-center justify-between">
				<h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
				<RefreshIcon
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
