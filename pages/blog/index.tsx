import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";
import React, { useEffect } from "react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { useRouter } from "next/router";
import { GetStaticProps } from 'next';

const blogPosts = [
  {
    id: "ai-down-syndrome-representation",
    title: "AI-Generated Down Syndrome Influencers: Ethical Questions & Representation",
    excerpt: "An exploration of the controversial trend of AI-generated Down syndrome influencers and the ethical questions it raises about representation and consent.",
    date: "June 15, 2023",
    author: "Digital Experience Team",
    featured: true,
    image: "/images/blog/maria-comp.jpg",
    imageAlt: "AI-generated Down syndrome representation from 404 Media"
  },
  {
    id: "influence-of-diversity",
    title: "The Influence of Diversity in Gaming Communities",
    excerpt: "How embracing diverse characters and representation is reshaping gaming communities and creating more inclusive spaces.",
    date: "June 10, 2023",
    author: "Digital Experience Team",
    featured: false,
    image: "/images/blog/gaming-diversity.jpg",
    imageAlt: "Diverse gaming characters"
  },
  {
    id: "the-future-of-ai",
    title: "The Future of AI Facial Transformations in Gaming",
    excerpt: "What's next in the world of AI facial transformations and how it will impact character creation in gaming and virtual worlds.",
    date: "June 5, 2023",
    author: "Tech Insights Team",
    featured: false,
    image: "/images/blog/future-ai.jpg",
    imageAlt: "Future of AI technology"
  },
  {
    id: "community-spotlight",
    title: "Community Spotlight: Inclusion in Virtual Communities",
    excerpt: "Highlighting how virtual communities are embracing inclusivity and representation in character design and gameplay.",
    date: "June 1, 2023",
    author: "Community Management",
    featured: false,
    image: "/images/blog/community-spotlight.jpg",
    imageAlt: "Virtual community gathering"
  }
];

export const getStaticProps: GetStaticProps = async () => {
  const featuredPost = blogPosts.find(post => post.featured);
  
  if (!featuredPost) {
    return {
      props: {}, // Return empty props if no featured post is found
    };
  }
  
  return {
    props: {
      featuredPostId: featuredPost.id,
      featuredPost
    },
  };
};

export default function BlogPage({ featuredPostId, featuredPost }: { featuredPostId?: string, featuredPost?: any }) {
  const router = useRouter();
  
  // Client-side redirect as a fallback
  useEffect(() => {
    if (featuredPostId) {
      router.replace(`/blog/${featuredPostId}`);
    }
  }, [featuredPostId, router]);

  // The rest of the component is kept for fallback rendering while redirecting
  return (
    <DefaultLayout>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
              The Only Downs Blog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-black">
              Redirecting to featured article...
            </p>
          </div>

          {featuredPost && (
            <div>
              <div className="bg-white overflow-hidden shadow-xl rounded-lg">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/2">
                    <ImagePlaceholder 
                      title="Featured Image" 
                      caption={featuredPost.imageAlt}
                      gradientColors={["from-blue-100", "to-blue-200"]}
                      imageSrc={featuredPost.image}
                      imageAlt={featuredPost.imageAlt}
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <div className="tracking-wide text-sm text-blue-600 font-semibold mb-1">{featuredPost.date} • By {featuredPost.author}</div>
                    <Link href={`/blog/${featuredPost.id}`} className="block mt-1 text-2xl leading-tight font-bold text-black hover:underline">
                      {featuredPost.title}
                    </Link>
                    <p className="mt-4 text-black">{featuredPost.excerpt}</p>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-bold mb-4">Key Insights:</h3>
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-500">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4 text-black">
                            The rise of AI-generated Down syndrome influencers raises important ethical questions
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-500">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4 text-black">
                            Technology enables new forms of representation but requires thoughtful implementation
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-500">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4 text-black">
                            Gaming communities can lead the way in responsible representation and inclusion
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                        Read Full Article
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
