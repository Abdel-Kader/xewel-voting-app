import "tailwindcss/tailwind.css";
import Head from "next/head";
import Acceuil from "../components/Home";
import { Nav } from "../components/Nav";
export default function Home() {
	return (
		<div>
			<Head>
				<title>Xewel voting-app</title>
				{/*<link rel="icon" href="/favicon.ico" />*/}
			</Head>

			{/* Header */}

			<Nav />

			<Acceuil />
			<br/>
			<div className="flex items-center justify-center flex-wrap bg-teal p-4 bg-primaire"  style={{position: 'fixed', width: '100%', bottom: 0}}>
				<p style={{display: 'flex', justifyContent: 'center', color:'#fff'}}>
					© 2021 By Abdel-Kader Sabiou

				</p>
			</div>
		</div>
	);
}
