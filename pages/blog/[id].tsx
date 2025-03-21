import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ImagePlaceholder } from "@/components/image-placeholder";

// Define types
type BlogPost = {
  title: string;
  date: string;
  author: string;
  heroImage: string;
  imageAlt: string;
  content: string;
  relatedPosts: string[];
};

type BlogPosts = {
  [key: string]: BlogPost;
};

// Blog post data - in a real app, this would come from an API or CMS
const blogPosts: BlogPosts = {
  "ai-down-syndrome-representation": {
    title: "AI-Generated Down Syndrome Influencers: Ethical Questions & Representation",
    date: "June 15, 2023",
    author: "Digital Experience Team",
    heroImage: "/images/blog/maria-comp.jpg",
    imageAlt: "AI-generated Down syndrome representation from 404 Media",
    content: `
      <p class="lead">A recent investigation has revealed a concerning trend: the use of AI to create fake influencers who appear to have Down syndrome, which raises important ethical questions about representation, consent, and exploitation.</p>
      
      <p>The intersection of artificial intelligence and representation has reached a new frontier, one that raises profound ethical questions. According to reporting by <a href="https://www.404media.co/" target="_blank" rel="noopener noreferrer">404 Media</a>, there's a growing trend of AI-generated content featuring individuals who appear to have Down syndrome. This development has sparked significant concern among advocacy groups and ethics experts.</p>
      
      <div style="margin: 2rem 0;">
        <img src="/images/blog/down-syndrome-z3.jpg" alt="Generated image of person with Down syndrome features" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
        <p style="font-size: 0.875rem; color: #444; margin-top: 0.5rem; text-align: center;">Image source: 404 Media's investigation into AI-generated Down syndrome content</p>
      </div>
      
      <h2>The Rise of AI-Generated Down Syndrome Content</h2>
      
      <p>The investigation revealed multiple AI-generated accounts across social media platforms featuring individuals who appear to have Down syndrome. These accounts present themselves as real people, posting about daily life, sharing opinions, and in some cases, promoting links to adult content platforms.</p>
      
      <p>This trend represents a significant shift in how AI is being used to create synthetic identities. While virtual influencers have existed for some time, the specific targeting of a genetic condition raises unique ethical concerns.</p>
      
      <blockquote>
        "The creation of AI characters with Down syndrome features, especially without clear disclosure that they are AI-generated, raises serious questions about authenticity, representation, and potential exploitation," noted one digital ethics researcher interviewed for this story.
      </blockquote>
      
      <h2>Ethical Considerations in Virtual Worlds</h2>
      
      <p>In virtual environments like our digital platform, the representation of diverse characteristics presents both opportunities and challenges. On one hand, giving users the ability to create avatars with diverse features can promote inclusivity and representation. On the other hand, this must be done with sensitivity and respect.</p>
      
      <p>Key ethical considerations include:</p>
      
      <ul>
        <li><strong>Authenticity vs. Appropriation:</strong> There's a fine line between authentic representation and the appropriation of identifiable characteristics of a marginalized group.</li>
        <li><strong>Consent:</strong> Individuals with Down syndrome or their advocates have not consented to having their distinctive features used in AI-generated content.</li>
        <li><strong>Exploitation:</strong> The use of these images to drive engagement or financial gain raises concerns about exploitation.</li>
        <li><strong>Disclosure:</strong> Many AI-generated accounts do not clearly disclose that they are not real people, potentially misleading audiences.</li>
      </ul>
      
      <h2>The Perspective of Advocacy Groups</h2>
      
      <p>Down syndrome advocacy organizations have expressed concern about the trend. Representatives have pointed out that while increased representation is important, it should be authentic and respectful. The creation of fake personas that use distinctive features associated with Down syndrome without the involvement of actual people with the condition can be seen as exploitative rather than inclusive.</p>
      
      <p>"True inclusion means creating space for real voices, not manufacturing artificial ones," said one advocate. "We want to see people with Down syndrome represented in media and online spaces, but by actual individuals with Down syndrome who can share their authentic experiences."</p>
      
      <h2>Implications for Virtual Gaming Environments</h2>
      
      <p>For virtual worlds and gaming environments, this raises important questions about how to approach diversity in character creation. The goal of creating inclusive virtual spaces must be balanced with ethical considerations about representation.</p>
      
      <p>Some guiding principles for gaming communities might include:</p>
      
      <ul>
        <li>Consulting with members of represented communities during development</li>
        <li>Avoiding stereotypical or exaggerated features</li>
        <li>Providing educational context where appropriate</li>
        <li>Creating opportunities for authentic voices from these communities</li>
      </ul>
      
      <h2>Moving Forward: Responsible Representation</h2>
      
      <p>As AI technology continues to evolve, the gaming community has an opportunity to lead in establishing ethical standards for representation. This includes being transparent about the nature of AI-generated content, consulting with represented communities, and considering the potential impact of character designs.</p>
      
      <p>In our virtual spaces, we're committed to thoughtful approaches to character diversity that respects the dignity of all people. We believe that inclusive environments are important, but they must be created with sensitivity and genuine commitment to ethical representation.</p>
      
      <h2>Conclusion</h2>
      
      <p>The emergence of AI-generated Down syndrome influencers highlights the need for ongoing dialogue about ethics in digital representation. As technology makes it increasingly possible to create diverse virtual characters, we must ensure that these capabilities are used responsibly and respectfully.</p>
      
      <p>The gaming community has a unique opportunity to establish positive precedents in this area, creating virtual worlds that are both inclusive and ethical. By approaching representation thoughtfully, we can build environments that truly welcome everyone while respecting the dignity of all people.</p>
    `,
    relatedPosts: ["influence-of-diversity", "the-future-of-ai", "community-spotlight"]
  },
  "influence-of-diversity": {
    title: "The Influence of Diversity in Gaming Communities",
    date: "June 10, 2023",
    author: "Digital Arts Team",
    heroImage: "/images/blog/gaming-diversity.jpg",
    imageAlt: "Diverse gaming characters",
    content: `
      <p class="lead">How embracing diverse characters and representation is reshaping gaming communities and creating more inclusive spaces for players of all backgrounds.</p>
      
      <p>The gaming landscape has undergone a remarkable transformation in recent years, with diversity and representation taking center stage in character design and community building. This shift isn't merely cosmetic—it's reshaping how games are created, played, and experienced by players around the globe.</p>
      
      <h2>Building More Inclusive Gaming Spaces</h2>
      
      <p>Game developers and community managers are increasingly recognizing the importance of creating spaces where all players feel welcome and represented. This includes thoughtful character design options that allow players to create avatars that reflect themselves and their experiences.</p>
      
      <p>The result has been a richer tapestry of gaming communities that offer more points of connection for different players. When gamers see characters and community members that share their experiences or attributes, it creates deeper emotional investment and satisfaction with the gaming experience.</p>
      
      <h2>The Impact on Player Experience</h2>
      
      <p>Research has shown that inclusive representation in games can significantly improve player engagement and satisfaction. Players who see themselves represented in games report feeling more connected to the game world and community.</p>
      
      <p>This isn't just about visual representation—it extends to community policies, moderation practices, and creating spaces where diverse viewpoints are welcomed and respected.</p>
      
      <h2>Responsible Approaches to Character Diversity</h2>
      
      <p>As gaming communities become more diverse, there's an increased responsibility to approach character design and representation thoughtfully. This includes consulting with members of represented communities, avoiding stereotypes, and considering the impact of design choices.</p>
      
      <p>The most successful inclusive gaming spaces aren't simply adding diversity for its own sake—they're creating authentic experiences that resonate with a wide range of players while respecting the dignity of all represented groups.</p>
    `,
    relatedPosts: ["ai-down-syndrome-representation", "the-future-of-ai", "community-spotlight"]
  },
  "the-future-of-ai": {
    title: "The Future of AI Facial Transformations in Gaming",
    date: "June 5, 2023",
    author: "Tech Insights Team",
    heroImage: "/images/blog/future-ai.jpg",
    imageAlt: "Future of AI technology in gaming",
    content: `
      <p class="lead">What's next in the world of AI facial transformations and how it will impact character creation in gaming and virtual worlds, with a focus on ethical implementation.</p>
      
      <p>Artificial intelligence is advancing at a breathtaking pace, particularly in the realm of facial recognition and transformation. These technologies are poised to revolutionize character creation in gaming platforms and virtual worlds, but they also bring significant ethical considerations that developers must address.</p>
      
      <h2>Beyond Basic Character Creation</h2>
      
      <p>Next-generation AI facial technologies will move beyond simple presets and sliders to allow for unprecedented personalization in character creation. Players will be able to create avatars with diverse features that more accurately reflect real-world human diversity.</p>
      
      <p>This capability opens up new possibilities for personalization and representation in digital environments, but also requires thoughtful implementation to avoid potential misuse or offensive representation.</p>
      
      <h2>Ethical Considerations for Developers</h2>
      
      <p>As these technologies become more accessible, gaming platforms must establish clear ethical guidelines for their use. This includes considerations around:</p>
      
      <ul>
        <li>Preventing the creation of offensive or stereotypical representations</li>
        <li>Ensuring diverse features are represented respectfully</li>
        <li>Providing appropriate context and education where needed</li>
        <li>Consulting with diverse communities during development</li>
      </ul>
      
      <p>The most forward-thinking gaming platforms are already developing ethics committees and guidelines to address these considerations before implementing advanced AI facial transformation features.</p>
      
      <h2>Creating Meaningful Representation</h2>
      
      <p>The future of AI in gaming isn't just about visual representation—it's about creating meaningful experiences that reflect diverse realities. This means going beyond surface-level visual diversity to incorporate diverse perspectives in storylines, game mechanics, and community features.</p>
      
      <p>By approaching AI facial transformation as one part of a broader commitment to inclusion, gaming platforms can create truly transformative experiences that welcome players of all backgrounds.</p>
    `,
    relatedPosts: ["ai-down-syndrome-representation", "influence-of-diversity", "community-spotlight"]
  },
  "community-spotlight": {
    title: "Community Spotlight: Inclusion in Virtual Communities",
    date: "June 1, 2023",
    author: "Community Management",
    heroImage: "/images/blog/community-spotlight.jpg",
    imageAlt: "Virtual community gathering",
    content: `
      <p class="lead">Highlighting how virtual communities are embracing inclusivity and representation in character design and gameplay, creating spaces where everyone belongs.</p>
      
      <p>Virtual communities have always had the potential to transcend physical limitations and bring people together across boundaries. Today, many gaming communities are realizing this potential by intentionally fostering inclusivity and diverse representation in both character design and community policies.</p>
      
      <h2>Building Inclusive Gaming Communities</h2>
      
      <p>From role-playing servers to competitive gaming leagues, community leaders are taking steps to ensure that their spaces welcome members from all backgrounds. This includes thoughtful moderation policies, accessibility features, representation in character options, and community leadership that reflects diverse perspectives.</p>
      
      <p>These efforts go beyond superficial changes to create fundamental shifts in how gaming communities operate and who feels welcome within them.</p>
      
      <h2>Success Stories</h2>
      
      <p>Several gaming communities have seen remarkable success in building truly inclusive spaces:</p>
      
      <ul>
        <li>Role-playing servers that offer diverse character creation options and storylines</li>
        <li>Competitive leagues that have implemented accessibility features and inclusive policies</li>
        <li>Creative communities that showcase diverse player creations and perspectives</li>
      </ul>
      
      <p>These communities demonstrate that inclusivity isn't just a moral imperative—it also creates more vibrant, creative, and engaging gaming experiences for everyone involved.</p>
      
      <h2>Challenges and Solutions</h2>
      
      <p>Building inclusive gaming communities isn't without challenges. Issues like harassment, tokenism, and superficial representation continue to affect many virtual spaces. However, forward-thinking communities are developing innovative solutions:</p>
      
      <ul>
        <li>Comprehensive moderation systems that address harassment while fostering positive engagement</li>
        <li>Consultation with diverse player groups during feature development</li>
        <li>Regular community feedback mechanisms to identify areas for improvement</li>
        <li>Educational resources that help community members understand the importance of inclusion</li>
      </ul>
      
      <p>By addressing these challenges head-on, gaming communities can create spaces that are truly welcoming to players of all backgrounds.</p>
    `,
    relatedPosts: ["ai-down-syndrome-representation", "influence-of-diversity", "the-future-of-ai"]
  }
};

// Add getStaticPaths to generate all possible blog post paths at build time
export async function getStaticPaths() {
  const paths = Object.keys(blogPosts).map(id => ({
    params: { id }
  }));
  
  return {
    paths,
    fallback: false // Return 404 for paths not returned by getStaticPaths
  };
}

// Add getStaticProps to fetch the blog post data
export async function getStaticProps({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id];
  
  if (!post) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      post,
      id: params.id
    }
  };
}

// Update the component to accept props
export default function BlogPostPage({ post, id }: { post: BlogPost, id: string }) {
  // We don't need router.query anymore since we get props directly
  if (!post) {
    return (
      <DefaultLayout>
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Post Not Found</h1>
          <p className="text-xl text-black mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/" className="text-[#004cff] hover:underline">
            Return Home
          </Link>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/blog" className="inline-flex items-center text-[#004cff] hover:underline mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Blog
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-black mb-4 !mt-0">{post.title}</h1>
          
          <div className="flex items-center gap-2 text-sm text-black mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
          
          {post.heroImage && (
            <div className="mb-8">
              <div className="aspect-video w-full max-h-[400px] relative rounded-xl overflow-hidden">
                <ImagePlaceholder 
                  title={post.imageAlt}
                  caption={post.imageAlt}
                  className="h-96"
                  gradientColors={["from-blue-100", "to-blue-200"]}
                  imageSrc={post.heroImage}
                  imageAlt={post.imageAlt}
                />
              </div>
            </div>
          )}
          
          <div 
            className="text-black blog-content" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </div>
    </DefaultLayout>
  );
} 