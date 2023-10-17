import Head from "next/head";

import PageWrapper from "~/components/pagewrapper/pagewrapper";
import PageBanner from "~/components/pagebanner/pagebanner";
import ArticleSectionWrapper from "~/components/articlesectionwrapper/articlesectionwrapper";
import ArticleSection from "~/components/articlesection/articlesection";
import services from "~/data/services";

export default function Services() {
  return (
    <PageWrapper>
      <Head>
        <title>GenEdUSA | Services</title>
      </Head>
      <PageBanner
        title="Tutoring Services"
        description={
          "At GenEd, we offer tutoring services for various topics, such as English for Speakers of Other Languages, K-12 General Education, and Information Technology."
        }
      />
      <ArticleSectionWrapper>
        {services.map((service, index) => {
          let invert = index % 2 === 0 ? false : true;
          return (
            <ArticleSection
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              invert={invert}
              buttons={service.buttons}
            />
          );
        })}
      </ArticleSectionWrapper>
    </PageWrapper>
  );
}
