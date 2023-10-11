import Head from "next/head";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";

export default function Services() {
  return (
    <main>
      <Head>
        <title>GenEdUSA | Services</title>
      </Head>
      <Navbar />
      <div className="text-2xl">Services</div>
      <Footer />
    </main>
  );
}
