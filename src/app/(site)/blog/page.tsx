import SingleBlog from "@/components/Blog/SingleBlog";
import { getPosts } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Blog Page | ${siteName}`,
  description: "This is Blog page for Go Next.js",
  // other metadata
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="pt-[240px]">
        <div className="px-4 xl:container">
          <div className="w-full border-b pb-20 dark:border-[#2E333D]">
            <div className="-mx-4 flex flex-wrap">
              {posts.length > 0 &&
                posts.map((blog: Blog) => (
                  <SingleBlog key={blog?._id} blog={blog} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
