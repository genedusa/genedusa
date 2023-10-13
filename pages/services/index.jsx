import Head from "next/head";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import PageBanner from "~/components/pagebanner/pagebanner";
import ArticleSectionWrapper from "~/components/articlesectionwrapper/articlesectionwrapper";
import ArticleSection from "~/components/articlesection/articlesection";
import services from "~/data/services";

export default function Services() {
  return (
    <main>
      <Head>
        <title>GenEdUSA | Services</title>
      </Head>
      <Navbar />
      <PageBanner
        title="Tutoring Services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
      <Footer />
    </main>
  );
}
