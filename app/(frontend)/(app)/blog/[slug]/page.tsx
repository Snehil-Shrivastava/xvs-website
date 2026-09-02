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

const faqData: Record<string, { question: string; answer: string }[]> = {
  "why-expensive-websites-convert-worse": [
    {
      question: "Why isn't my website converting if it looks great?",
      answer:
        "Looks and conversions are different jobs. A site can be beautiful and still be slow, unfocused, or unclear about what it wants visitors to do. Most non-converting sites have a strategy gap—no single clear goal, weak positioning, too much friction—not a design-quality gap.",
    },
    {
      question: "Is a $50,000 website worth it?",
      answer:
        "It can be, if that budget buys clarity, speed, and the right level of build for your stage. It is not worth it if it buys complexity your business does not need yet. Many $50K sites convert worse than focused $5K ones because the money went into polish and features instead of strategy and performance.",
    },
    {
      question: "Do simple websites convert better than complex ones?",
      answer:
        "Usually yes, because simple sites tend to load faster and present one clear action, and both strongly correlate with higher conversion. Simple should mean clear and fast, not unfinished.",
    },
    {
      question: "Should I choose a custom website or a template?",
      answer:
        "Most businesses need custom design on a solid platform, not custom development. Choose a custom build only when you have genuinely unusual functionality, a team to maintain it, and the budget to do strategy properly first. For typical marketing and lead-capture sites, a well-designed template-based build is faster, cheaper, and converts just as well.",
    },
    {
      question: "How much should a small business spend on a website?",
      answer:
        "Enough to get positioning, a single clear call to action, and fast load times right—often $5,000 to $15,000 with a good freelancer or boutique agency. Spend on clarity first and add complexity only when your numbers justify it.",
    },
    {
      question: "Why do website redesigns go over budget?",
      answer:
        "Almost always because the direction was not decided before building started. Unclear briefs cause rework, and rework—not the original scope—is where the budget disappears. A sharp one-page brief upfront is the best cost control there is.",
    },
  ],
  "get-cited-by-ai-assistants": [
    {
      question: "Does AEO replace SEO?",
      answer:
        "No. Answer engine optimization sits on top of SEO. AI assistants mostly cite pages they already trust from organic search, so ranking is the precondition to being retrieved. AEO is the extra layer of structure—clear answers, clean formatting, schema—that turns a ranking page into a quotable one.",
    },
    {
      question: "How do AI assistants decide what to cite?",
      answer:
        "They expand your question into many related searches, retrieve pages that match the meaning, merge the results, then score individual passages for how cleanly each answers the question on its own. The passage that stands alone best gets quoted. Authority gets you retrieved; extractability gets you cited.",
    },
    {
      question: "Why isn't my top-ranking page getting cited by AI?",
      answer:
        "Usually because the answer is buried, depends on surrounding context, or is too vague to lift. Ranking gets the page into the candidate pool, but AI engines quote self-contained passages. Add a direct 40 to 60 word answer right under a question-shaped heading and your odds improve.",
    },
    {
      question: "Do I need schema markup to get cited by AI?",
      answer:
        "It helps but isn't magic. Pages that get cited disproportionately use Organization, Article, and FAQ schema, but that's a correlation. Schema helps machines read good content correctly; it won't rescue weak content. Treat it as making your page legible, not as a growth hack.",
    },
    {
      question: "Should I post on Reddit to get my brand cited by AI?",
      answer:
        "Being genuinely active in communities AI engines trust is valuable, since Reddit is one of the most-cited sources. Manufacturing mentions with seeded posts or aged accounts is different—it works today but is increasingly detected, is the same trick fueling AI scam recommendations, and risks your reputation. Earn the mention.",
    },
    {
      question: "Is AI search traffic worth optimizing for yet?",
      answer:
        "Yes, as a forward investment. AI referrals are still around 1% of traffic, but they're growing several hundred percent year over year and tend to convert better than average. The structural work that earns AI citations also improves your normal SEO, so you're not betting on one channel.",
    },
  ],
  "a-logo-is-not-a-brand": [
    {
      question: "Is a logo a brand?",
      answer:
        "No. A logo is a visual identifier—one part of a brand. Your brand is the full impression people hold of you: your promise, positioning, voice, and the experience and trust you build. The logo represents the brand; it doesn't replace the strategy, messaging, and consistency that create it.",
    },
    {
      question: "What comes first, the logo or the brand strategy?",
      answer:
        "Strategy comes first, always. Strategy defines who you serve and what you stand for; positioning and messaging turn that into words; a visual system turns the words into a look; and the logo comes last, as the mark that compresses all of it. Designed first, a logo is decoration without meaning.",
    },
    {
      question: "What are the elements of a brand identity?",
      answer:
        "A brand identity is a system, not a single asset: brand strategy (purpose, audience, differentiator), positioning and messaging, verbal identity (name, voice, tagline), and a visual system (logo, color, typography, imagery, and the rules for using them consistently). The logo is one element within that system.",
    },
    {
      question: "What is a minimum viable brand?",
      answer:
        "A minimum viable brand is the smallest complete version of your brand you can launch with—a clear strategy, a sharp position, and a consistent look that's good enough to go to market, without over-polishing. You get the foundation right, ship it, and refine it with real customer feedback instead of perfecting it in a vacuum.",
    },
    {
      question: "Can I use an AI-generated or DIY logo for my business?",
      answer:
        "Yes, especially early on, as long as the strategy underneath it is sound. Just be diligent about deliverables: most DIY and AI tools give you a flat PNG, and you'll eventually need a true vector file (.svg, .eps, or .ai) that's genuinely editable—not a PNG wrapped in an SVG. Verify that before you rely on it.",
    },
    {
      question: "What file format should my logo be?",
      answer:
        "Keep the master as a vector (.ai or .eps), and use .svg and .png for web and .eps/.pdf for print. A vector scales to any size—from a favicon to a billboard—without blurring. If a logo only exists as a JPEG or PNG, you don't yet have a production-ready logo.",
    },
  ],
  "how-to-choose-a-web-design-agency": [
    {
      question: "How do I choose a web design agency?",
      answer:
        "Shortlist agencies with real portfolios and verified reviews on platforms like Clutch, then judge them on the first call by the questions they ask you. A good agency asks about your goals, customers, scope, and feedback process before quoting. If they lead with a price or a guarantee, keep looking.",
    },
    {
      question: "What questions should a web design agency ask me?",
      answer:
        "Expect questions about your website's one job and success metrics, your exact customer, why you're doing this now, what's working on your current site, your competitors, what's out of scope for version one, who gives feedback and how fast, and what happens after launch. Those questions are how a real plan gets made.",
    },
    {
      question: "What are the red flags when hiring a web design agency?",
      answer:
        "An instant quote with no discovery, guaranteed Google rankings, agreeing to every request without pushback, a vague or missing scope document, and no clear communication plan. Each one predicts a specific failure: template work, broken promises, mid-project surprises, scope disputes, and silence.",
    },
    {
      question: "How much does a web design agency cost?",
      answer:
        "In the US, freelancers typically charge $1,500 to $5,000, boutique agencies around $6,000 to $15,000, and full custom agency builds $15,000 to $40,000 or more. Compare quotes only if they're based on the same discovery answers, and treat a far-below-market quote as a sign something was left out.",
    },
    {
      question: "Should I hire an agency or a freelancer for my website?",
      answer:
        "A freelancer suits simple sites on tight budgets. An agency earns its cost when the site is a core sales tool that needs strategy, design, development, and content working together. Either way, apply the same test: judge them by the quality of the questions they ask you.",
    },
    {
      question: "How do I know if a web design agency is good?",
      answer:
        "Check for a verified track record with reviews, named clients, and live sites, then watch their behavior: good agencies ask before they answer, push back when your timeline or scope is unrealistic, define what's excluded, and set a communication schedule. Honesty in the sales call predicts honesty in the project.",
    },
  ],
  "what-makes-a-website-look-premium": [
    {
      question: "What makes a website look expensive?",
      answer:
        "Mostly restraint and craft, not budget. Generous space around a few important things, a small palette of colors that agree, one good typeface at a comfortable size, smooth and subtle motion, obvious navigation, and real high-quality images. Do those well and even a low-cost site reads as premium.",
    },
    {
      question: "Why does my website look cheap even though I paid for it?",
      answer:
        "Usually because it tries to show too much at once, uses too many colors or fonts, leans on generic stock photos, or animates in a janky way. The budget doesn't fix those. Cutting clutter, tightening the palette, improving the type, and speeding up the site almost always do.",
    },
    {
      question: "Does a premium look actually matter for conversions?",
      answer:
        "Yes. People judge credibility partly on design within the first fraction of a second, and a site that reads as cheap loses trust before anyone reads a word. Looking considered and trustworthy is the first thing that decides whether a visitor stays.",
    },
    {
      question:
        "What's the single easiest way to make my site look more premium?",
      answer:
        "Remove things and add space. Take clutter off the homepage until the most important element clearly stands out. It costs nothing, and it moves the needle more than any new color, font, or effect you could add.",
    },
    {
      question:
        "Do I need custom fonts or expensive photography to look premium?",
      answer:
        "No. One well-chosen typeface, sized and spaced with care, looks premium even if it's free. A handful of real, consistent photos of your actual work usually beats expensive-looking stock. Consistency and restraint read as premium far more than price does.",
    },
  ],
  "ai-draft-not-a-design": [
    {
      question: "Can AI design a website?",
      answer:
        "AI can draft one, fast. It generates a competent first version from patterns it has seen. But a draft isn't a finished design; it hasn't been shaped around your specific customers or tested with real users, and that's where usability and conversions actually come from. Use AI for the draft, then iterate toward the design.",
    },
    {
      question: "Why do AI-generated designs look generic?",
      answer:
        "Because they're built from the average of existing work. AI predicts the most likely next element, and the most likely thing is the common thing, so you get familiar layouts and interchangeable copy. It's fine as a starting point; it only reads as generic when nobody refines it for a specific audience.",
    },
    {
      question: "Do I still need a designer if I have AI?",
      answer:
        "For a rough draft, maybe not. For a site that has to convert, yes. The value lives in the iteration: testing, prioritizing, and fixing what real users struggle with. AI produces version one; human judgment is what turns version one into something that works.",
    },
    {
      question: "What is AI actually good for in design?",
      answer:
        "Killing the blank page and clearing busywork. It's excellent at turning an idea into a visual draft you can react to, and at slow tasks like background removal or image upscaling. The trick is using it to start faster, not to skip the design work that comes after.",
    },
    {
      question: "How do I make an AI design look less generic?",
      answer:
        "Stop treating the first output as final. Give it a specific audience, rewrite the copy around your customer's real worry, cut whatever doesn't earn its place, and test it on actual users. That refinement is what removes the template feeling. The refinement is the design.",
    },
  ],
};

const IndividualBlog = async ({ params }: PageProps) => {
  const { slug } = await params;

  const faqs = faqData[slug];

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

  const faqSchema = faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

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
