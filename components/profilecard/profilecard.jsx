import { Divider, Image, Link } from "@nextui-org/react";

export default function ProfileCard({
  imgSrc,
  alt,
  name,
  role,
  description,
  phone,
  email,
}) {
  return (
    <div className="rounded-md bg-background-50 p-4 text-center">
      <div>
        <Image
          src={imgSrc}
          alt={alt}
          removeWrapper={true}
          className="h-48 w-48 rounded-full"
        />
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{role}</p>
        <p>{description}</p>
      </div>
      <Divider className="my-1" />
      <div className="flex flex-col items-center">
        <Link href={`tel:${phone}`}>{phone}</Link>
        <Link href={`mailto:${email}?subject=Inquiry from GenEdUSA.com`}>
          {email}
        </Link>
      </div>
    </div>
  );
}
