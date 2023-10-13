import Head from "next/head";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import PageBanner from "~/components/pagebanner/pagebanner";
import ArticleSectionWrapper from "~/components/articlesectionwrapper/articlesectionwrapper";
import ArticleSection from "~/components/articlesection/articlesection";
import sections from "~/data/home";

export default function Home() {
  return (
    <main>
      <Head>
        <title>GenEdUSA | Home</title>
      </Head>
      <Navbar />
      <PageBanner
        title="GenEdUSA"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imgSrc="logo.png"
        imgAlt="GenEdUSA Logo"
      />
      <ArticleSectionWrapper>
        {sections.map((section, index) => {
          let invert = index % 2 === 0 ? false : true;
          return (
            <ArticleSection
              key={section.id}
              id={section.id}
              title={section.title}
              description={section.description}
              imageSrc={section.imageSrc}
              imageAlt={section.imageAlt}
              invert={invert}
              buttons={section.buttons}
            />
          );
        })}
      </ArticleSectionWrapper>
      <Footer />
    </main>
  );
}
