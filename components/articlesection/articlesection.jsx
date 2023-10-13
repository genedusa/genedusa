import { Image } from "@nextui-org/react";

export default function ArticleSection({
  title,
  id,
  description,
  imageSrc,
  imageAlt,
  buttons,
  invert,
}) {
  let textAlignment = !invert ? "md:text-left" : "md:text-right";
  let margin = !invert ? "md:mr-12" : "md:ml-12";
  let buttonAlignment = !invert ? "md:flex-row" : "md:flex-row-reverse";

  return (
    <div
      id={id}
      className="flex max-w-screen-2xl flex-col justify-between md:flex-row md:px-16 lg:px-32"
    >
      <div
        className={`text-center ${margin} order-2 ${
          !invert ? "md:order-1" : "md:order-2"
        } ${textAlignment} px-8`}
      >
        <h2 className="text-3xl md:text-5xl">{title}</h2>
        <p className="text-lg text-text-900 md:text-2xl">{description}</p>
        <div
          className={`mt-5 flex md:mx-4 ${buttonAlignment} justify-center gap-4 md:justify-start`}
        >
          {buttons}
        </div>
      </div>
      <Image
        removeWrapper
        className={`order-1 w-10/12 self-center md:w-1/3 ${
          !invert ? "md:order-2" : "md:order-1"
        }`}
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
}
