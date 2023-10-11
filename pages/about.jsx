import Head from "next/head";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";

export default function About() {
  return (
    <main>
      <Head>
        <title>GenEdUSA | About</title>
      </Head>
      <Navbar />
      <div className="text-2xl">About</div>
      <Footer />
    </main>
  );
}
