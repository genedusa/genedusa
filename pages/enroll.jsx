import Head from "next/head";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import PageBanner from "~/components/pagebanner/pagebanner";

export default function About() {
  return (
    <main>
      <Head>
        <title>GenEdUSA | About</title>
      </Head>
      <Navbar />
      <PageBanner
        title="Enroll Today"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Footer />
    </main>
  );
}
