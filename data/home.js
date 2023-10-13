import { Link, Button } from "@nextui-org/react";

const sections = [
  {
    title: "Who are we?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/tutoring.jpg",
    imageAlt: "Adult teacher tutoring a child student.",
    buttons: [
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
    ],
  },
  {
    title: "What services do we offer?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc: "/tutoring2.jpg",
    imageAlt: "An adult teacher tutoring a group of 3 teenagers.",
    buttons: [
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
    ],
  },
].map((section) => {
  section.id = section.title.toLocaleLowerCase().replaceAll(" ", "_");
  return section;
});

export default sections;
