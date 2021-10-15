import "tailwindcss/tailwind.css";
import Head from "next/head";
import {AdminNav} from "../../components/AdminNav";
import Homea from "../../components/Homea";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Xewel voting-app</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            {/* Header */}

            <AdminNav/>

            <Homea/>
            {/*<AjoutOrateur />*/}
        </div>
    );
}
