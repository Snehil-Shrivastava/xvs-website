import { getPayload } from "payload";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RichText } from "@/components/RichTextRender";
import BlogFooter from "@/sections/BlogFooter";
import { Suspense } from "react";
import { cacheTag, cacheLife } from "next/cache";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const blogs = await payload.find({
    collection: "blogs",
    limit: 1000,
    select: { slug: true },
  });
  return blogs.docs.map((blog) => ({ slug: blog.slug }));
}

async function getBlogPost(slug: string) {
  "use cache";
  cacheTag("blogs", `blog-${slug}`);
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });
  return payload.find({
    collection: "blogs",
    where: { slug: { equals: slug } },
    depth: 2,
  });
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const result = await getBlogPost(slug);
  const post = result.docs[0];

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.metaTitle}`,
    description: post.metaDescription,
  };
}

const IndividualBlog = async ({ params }: PageProps) => {
  const { slug } = await params;

  const result = await getBlogPost(slug);
  const post = result.docs[0];

  if (!post) {
    return notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why isn't my website converting if it looks great?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Looks and conversions are different jobs. A site can be beautiful and still be slow, unfocused, or unclear about what it wants visitors to do. Most non-converting sites have a strategy gap—no single clear goal, weak positioning, too much friction—not a design-quality gap.",
        },
      },
      {
        "@type": "Question",
        name: "Is a $50,000 website worth it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can be, if that budget buys clarity, speed, and the right level of build for your stage. It is not worth it if it buys complexity your business does not need yet. Many $50K sites convert worse than focused $5K ones because the money went into polish and features instead of strategy and performance.",
        },
      },
      {
        "@type": "Question",
        name: "Do simple websites convert better than complex ones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually yes, because simple sites tend to load faster and present one clear action, and both strongly correlate with higher conversion. Simple should mean clear and fast, not unfinished.",
        },
      },
      {
        "@type": "Question",
        name: "Should I choose a custom website or a template?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most businesses need custom design on a solid platform, not custom development. Choose a custom build only when you have genuinely unusual functionality, a team to maintain it, and the budget to do strategy properly first. For typical marketing and lead-capture sites, a well-designed template-based build is faster, cheaper, and converts just as well.",
        },
      },
      {
        "@type": "Question",
        name: "How much should a small business spend on a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Enough to get positioning, a single clear call to action, and fast load times right—often $5,000 to $15,000 with a good freelancer or boutique agency. Spend on clarity first and add complexity only when your numbers justify it.",
        },
      },
      {
        "@type": "Question",
        name: "Why do website redesigns go over budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almost always because the direction was not decided before building started. Unclear briefs cause rework, and rework—not the original scope—is where the budget disappears. A sharp one-page brief upfront is the best cost control there is.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div>
        <div className="max-w-450 w-4/5 max-sm:w-9/10 sm:max-md:w-9/10 md:max-lg:w-[85%] mx-auto pt-50 max-md:pt-30 max-xl:pt-40 pb-50 font-poppins">
          <div className="flex flex-col gap-25 max-xl:gap-15">
            <div className="flex flex-col gap-8 max-md:gap-4">
              <div className="flex flex-col max-md:flex-col max-md:items-start items-start gap-2 max-md:gap-4 justify-between">
                <h1 className="font-calSans text-brand-orange text-[42px]/[50px] max-2xl:text-4xl max-lg:text-3xl max-md:text-2xl flex-[0.6]">
                  {post.title}
                </h1>
                {/* <p className="text-xl max-md:text-base max-sm:text-sm">
                By {post.author.name}
              </p> */}
              </div>
              <p className="text-brand-orange text-2xl max-2xl:text-xl max-lg:text-lg max-md:text-sm">
                {/* @ts-expect-error category title */}
                {post.categories?.map((cat) => cat.title).join(", ")}
              </p>
              {post.tags && (
                <div className="flex flex-wrap gap-y-0.5 gap-5 justify-start text-xl max-2xl:text-lg max-lg:text-sm text-neutral-400 flex-[0.4]">
                  {post.tags?.map((tag, i) => (
                    <span key={i}>#{tag.tag}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="relative w-full aspect-[2]">
              <Image
                // @ts-expect-error url
                src={post.coverImage.url}
                alt={`image`}
                fill
                className="object-cover content-clip-both"
              />
            </div>
            <div className="blog-body max-xl:font-light">
              <RichText data={post.body} />
            </div>
            <div className="flex gap-12 justify-between py-10 border-y border-y-neutral-600 max-md:text-[12px]">
              <div className="flex flex-col">
                <span className="text-neutral-400">Publication Date</span>
                <span>{formattedDate}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-neutral-400">Author Name</span>
                {/* @ts-expect-error author name */}
                <span>{post.author.name}</span>
              </div>
            </div>
            <Suspense fallback={null}>
              <BlogFooter currentPost={post} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualBlog;
