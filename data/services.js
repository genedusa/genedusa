const services = [
  {
    title: `Service 1`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    imageSrc: `/tutoring2.jpg`,
    imageAlt: `An adult teacher tutoring a group of 3 teenagers.`,
    buttons: [],
  },
  {
    title: `Service 2`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    imageSrc: `/tutoring2.jpg`,
    imageAlt: `An adult teacher tutoring a group of 3 teenagers.`,
    buttons: [],
  },
  {
    title: `Service 3`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    imageSrc: `/tutoring2.jpg`,
    imageAlt: `An adult teacher tutoring a group of 3 teenagers.`,
    buttons: [],
  },
  {
    title: `Service 4`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    imageSrc: `/tutoring2.jpg`,
    imageAlt: `An adult teacher tutoring a group of 3 teenagers.`,
    buttons: [],
  },
].map((service) => {
  service.id = service.title.toLocaleLowerCase().replaceAll(" ", "_");
  return service;
});

export default services;
