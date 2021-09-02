import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Nav } from "../../components/Nav";
import AjoutOrateur from "../../components/AjoutOrateur";
import {AdminNav} from "../../components/AdminNav";
export default function Home() {
    return (
        <div>
            <Head>
                <title>Xewel voting-app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}

            <AdminNav />

            <AjoutOrateur />
        </div>
    );
}
