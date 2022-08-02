import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Lutter - Twitter Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Sidebar />

				<Feed />

				<Widgets />
			</main>
		</>
	);
};

export default Home;
