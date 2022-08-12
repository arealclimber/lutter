import { Tweet } from '../typings';
import { server } from '../config/server';

export const fetchTweets = async () => {
	// const res = await fetch(`${server}/api/getTweets`);
	// ${process.env.BASE_URL}
	const res = await fetch(`/api/getTweets`);

	const data = await res.json();
	const tweets: Tweet[] = data.tweets;

	return tweets;
};
