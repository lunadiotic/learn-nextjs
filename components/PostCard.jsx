import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  title,
  href,
  image,
  description,
  date,
  author,
}) {
  return (
    <div className="flex flex-wrap">
      <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
          <Image
            src={image}
            alt={title}
            className="w-full"
            width={640}
            height={360}
          />
          <Link href={href}>
            <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
          </Link>
        </div>
      </div>

      <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
        <h5 class="text-lg font-bold">{title}</h5>
        <p class="mb-3 text-gray-800">
          <small>
            Published <u>{date}</u> by {""}
            <a href="#!">{author}</a>
          </small>
        </p>
        <p class="text-gray-800">{description}</p>
      </div>
    </div>
  );
}
