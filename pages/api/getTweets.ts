// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Tweet } from '../../typings';
import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';

const feedQuery = groq`
    *[_type == 'tweet' && (!blockTweet || blockTweet == undefined)] {
        _id,
        ...
    } | order(_createdAt desc)
`;

// the response that we assume that we're going to send back
type Data = {
	tweets: Tweet[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const tweets: Tweet[] = await sanityClient.fetch(feedQuery);

	// console.log('pages/api/getTweets');
	// console.log(tweets);

	res.status(200).json({
		tweets,
	});
}
