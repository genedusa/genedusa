const services = [
  {
    title: `English for Speakers of Other Languages`,
    description: `GenEd provides English Language Lessons for anyone looking to develop or improve their English language skills.\nThrough our virtual and in-person options, we will utilize proven techniques to improve your language skills.\nGenEd believes that the best way to learn a new language is through literacy, improving your communication, reading, and writing skills all in one class.`,
    imageSrc: `/tutoring4.jpg`,
    imageAlt: `An adult teacher tutoring a group of 3 teenagers.`,
    buttons: [],
  },
  {
    title: `K-12 General Education`,
    description: `GenEd K-12 General Education tutors use their classroom experience combined with data driven instructions to assist your scholar.\nWe use online platforms such as Nearpod, Epic Books, and many more to further enrich your scholar's fundamental reading and math skills.\nOur tutors also provide homework assistance and enrichment in science and social studies.\nIf elected to take a one-on-one course, at your discretion, our teachers will be there to assist with communication for your scholar's classroom teachers.\nWe can provide monthly updates on your scholar's academic progress and provide translation for any communication barriers.`,
    imageSrc: `/tutoring3.jpg`,
    imageAlt: `An adult teacher tutoring a group of 3 teenagers.`,
    buttons: [],
  },
  {
    title: `Information Technology Courses & Certifications`,
    description: `At GenEd, we have experienced IT expert tutors waiting to guide you through all things Information Technology.\nWhether it's hardware, networking, security, or acing CompTIA certifications, we have you covered.\nDive into hands-on labs, explore the ins and outs of switches, and find the perfect learning approach for you.\nTogether, we'll unlock the world of IT and boost your skills to new heights.`,
    imageSrc: `/tutoring2.jpg`,
    imageAlt: `An adult teacher tutoring a group of 3 teenagers.`,
    buttons: [],
  },
].map((service) => {
  service.id = service.title.toLocaleLowerCase().replaceAll(" ", "_");
  return service;
});

export default services;
