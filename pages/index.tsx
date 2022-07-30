import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Lutter - Twitter Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Sidebar />
		</>
	);
};

export default Home;
