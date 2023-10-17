import { Link, Button } from "@nextui-org/react";

const sections = [
  {
    title: "The GenEd Story",
    description: `GenEd is a tutoring service, designed with flexibility being most important.\nGenEd offers both group and one-on-one sessions, virtual and in-person options, and services to scholars of all ages and needs.\nGenEd takes a holistic approach to education, incorporating social emotional learning and mindfulness within our services.`,
    imageSrc: "/tutoring.jpg",
    imageAlt: "Adult teacher tutoring a child student.",
    buttons: [
      <Link href="/services" key="g1">
        <Button color="primary" variant="solid" size="lg">
          View Services
        </Button>
      </Link>,
      <Link href="/enroll" key="g2">
        <Button color="secondary" variant="ghost" size="lg">
          Enroll Today
        </Button>
      </Link>,
    ],
  },
].map((section) => {
  section.id = section.title.toLocaleLowerCase().replaceAll(" ", "_");
  return section;
});

export default sections;
