import { Image } from "@nextui-org/react";

export default function PageBanner({ title, description, imgSrc, imgAlt }) {
  return (
    <div className="flex flex-row justify-center bg-gradient-to-b from-accent-50 px-8 py-8 sm:px-32 md:py-16">
      <div className="flex flex-col items-center text-center">
        {imgSrc !== undefined ? (
          <Image src={imgSrc} className="w-64" alt={imgAlt} />
        ) : (
          <></>
        )}
        <h1 className="text-6xl font-semibold">{title}</h1>
        <p className="mt-4 max-w-lg text-xl">{description}</p>
      </div>
    </div>
  );
}
