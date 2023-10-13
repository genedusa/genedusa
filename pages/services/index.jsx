import Head from "next/head";
import { Link, Button } from "@nextui-org/react";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import ArticleSection from "~/components/articlesection/articlesection";

export default function Services() {
  return (
    <main>
      <Head>
        <title>GenEdUSA | Services</title>
      </Head>
      <Navbar />
      <div className="flex flex-row justify-center bg-gradient-to-b from-accent-50 px-32 py-8 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* <Image src="logo.png" className="w-64" alt="GenEdUSA Logo" /> */}
          <h1 className="text-6xl font-semibold">Tutoring Services</h1>
          <p className="mt-4 max-w-lg text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center gap-2 sm:mt-0 sm:gap-10">
        <ArticleSection
          title="Service 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc="/tutoring2.jpg"
          imageAlt="An adult teacher tutoring a group of 3 teenagers."
          invert={false}
          buttons={[]}
        />
        <div className="h-32 sm:h-0" />
        <ArticleSection
          title="Service 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc="/tutoring2.jpg"
          imageAlt="An adult teacher tutoring a group of 3 teenagers."
          invert={true}
          buttons={[]}
        />
        <div className="h-32 sm:h-0" />
        <ArticleSection
          title="Service 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc="/tutoring2.jpg"
          imageAlt="An adult teacher tutoring a group of 3 teenagers."
          invert={false}
          buttons={[]}
        />
        <div className="h-32 sm:h-0" />
        <ArticleSection
          title="Service 4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc="/tutoring2.jpg"
          imageAlt="An adult teacher tutoring a group of 3 teenagers."
          invert={true}
          buttons={[]}
        />
        <div className="h-32 sm:h-0" />
      </div>
      <Footer />
    </main>
  );
}
