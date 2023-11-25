import Link from "next/link";
import Heading from "@/components/Heading";

export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="text-2xl mb-3">List of posts</h2>

      <div className="flex flex-wrap">
        <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
          <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
            <img src="/images/image-1.jpg" class="w-full" />
            <Link href="/blog/belajar-nextjs">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </Link>
          </div>
        </div>

        <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
          <h5 class="text-lg font-bold">Belajar Next.js</h5>
          <p class="mb-3 text-gray-800">
            <small>
              Published <u>13.01.2022</u> by {""}
              <a href="#!">Admin</a>
            </small>
          </p>
          <p class="text-gray-800">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
          <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
            <img src="/images/image-1.jpg" class="w-full" />
            <Link href="/blog/belajar-nextjs">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </Link>
          </div>
        </div>

        <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
          <h5 class="text-lg font-bold">Belajar Next.js</h5>
          <p class="mb-3 text-gray-800">
            <small>
              Published <u>13.01.2022</u> by {""}
              <a href="#!">Admin</a>
            </small>
          </p>
          <p class="text-gray-800">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
          <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
            <img src="/images/image-1.jpg" class="w-full" />
            <Link href="/blog/belajar-nextjs">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
            </Link>
          </div>
        </div>

        <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
          <h5 class="text-lg font-bold">Belajar Next.js</h5>
          <p class="mb-3 text-gray-800">
            <small>
              Published <u>13.01.2022</u> by {""}
              <a href="#!">Admin</a>
            </small>
          </p>
          <p class="text-gray-800">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </p>
        </div>
      </div>
    </>
  );
}
