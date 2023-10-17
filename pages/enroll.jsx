import Head from "next/head";

import PageWrapper from "~/components/pagewrapper/pagewrapper";
import PageBanner from "~/components/pagebanner/pagebanner";
import ProfileCard from "~/components/profilecard/profilecard";
import general from "~/data/general";

export default function About() {
  return (
    <PageWrapper>
      <Head>
        <title>GenEdUSA | About</title>
      </Head>
      <PageBanner
        title="Enroll Today"
        description={`Call or email today to inquire about our classes.\nWe provide both group and one-on-one sessions.\nVirtual and in-person options are available.`}
      />
      <div className="flex flex-col items-center justify-center gap-8 py-8 sm:flex-row">
        <ProfileCard
          imgSrc={"/logo.png"}
          name={"GenEdUSA"}
          role={"General Information"}
          phone={general.number}
          email={general.email_info}
        />
      </div>
    </PageWrapper>
  );
}
