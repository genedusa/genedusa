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
      <div className="flex flex-row justify-center bg-gradient-to-b from-accent-50 px-32 py-8 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* <Image src="logo.png" className="w-64" alt="GenEdUSA Logo" /> */}
          <h1 className="text-6xl font-semibold">Contact Us</h1>
          <p className="mt-4 max-w-lg text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
