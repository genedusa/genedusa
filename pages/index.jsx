import Head from "next/head";

import PageWrapper from "~/components/pagewrapper/pagewrapper";
import PageBanner from "~/components/pagebanner/pagebanner";
import ArticleSectionWrapper from "~/components/articlesectionwrapper/articlesectionwrapper";
import ArticleSection from "~/components/articlesection/articlesection";
import sections from "~/data/home";

export default function Home() {
  return (
    <PageWrapper>
      <Head>
        <title>GenEdUSA | Home</title>
      </Head>
      <PageBanner
        title="GenEdUSA"
        description={`It's never too late to learn.`}
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
    </PageWrapper>
  );
}
