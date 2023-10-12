import Head from "next/head";
import { useEffect } from "react";
import { Button, Image, Link } from "@nextui-org/react";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import ArticleSection from "~/components/articlesection/articlesection";

export default function Home() {
  return (
    <main>
      <Head>
        <title>GenEdUSA | Home</title>
      </Head>
      <Navbar />
      <div className="flex flex-row justify-center bg-gradient-to-b from-accent-50 px-32 py-8 md:py-16">
        <div className="flex flex-col items-center">
          <Image src="logo.png" className="w-64" alt="GenEdUSA Logo" />
          <h1 className="text-6xl font-semibold">GenEdUSA</h1>
          <p className="max-w-lg text-center text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center gap-2 sm:mt-0 sm:gap-10">
        <ArticleSection
          title="Who are we?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc="/tutoring.jpg"
          imageAlt="Adult teacher tutoring a child student."
          invert={false}
          buttons={[
            <Link href="/about" key="who1">
              <Button color="primary" variant="solid" size="lg">
                Learn More
              </Button>
            </Link>,
            <Link
              href="mailto:info@genedusa.com?subject=Inquiry from GenEdUSA.com"
              key="who2"
            >
              <Button color="secondary" variant="ghost" size="lg">
                Email Us
              </Button>
            </Link>,
          ]}
        />
        <div className="h-32 sm:h-0" />
        <ArticleSection
          title="What services do we offer?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc="/tutoring2.jpg"
          imageAlt="An adult teacher tutoring a group of 3 teenagers."
          invert={true}
          buttons={[
            <Link href="/services" key="what1">
              <Button color="primary" variant="solid" size="lg">
                View Services
              </Button>
            </Link>,
            <Link
              href="mailto:info@genedusa.com?subject=Inquiry from GenEdUSA.com"
              key="what2"
            >
              <Button color="secondary" variant="ghost" size="lg">
                Email Us
              </Button>
            </Link>,
          ]}
        />
        <div className="h-32 sm:h-0" />
      </div>
      <Footer />
    </main>
  );
}
