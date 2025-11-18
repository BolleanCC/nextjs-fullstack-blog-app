import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import User from "./models/user.model.js";
import Post from "./models/post.model.js";
import Comment from "./models/comment.model.js";

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Comment.deleteMany({});
    await Post.deleteMany({});
    await User.deleteMany({});
    console.log("Cleared existing data");

    // Create demo users
    const users = await User.create([
      {
        clerkUserId: "demo_user_001",
        username: "sarah.mitchell",
        email: "sarah.mitchell@example.com",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      },
      {
        clerkUserId: "demo_user_002",
        username: "james.anderson",
        email: "james.anderson@example.com",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      },
      {
        clerkUserId: "demo_user_003",
        username: "emily.chen",
        email: "emily.chen@example.com",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      },
      {
        clerkUserId: "demo_user_004",
        username: "michael.rodriguez",
        email: "michael.rodriguez@example.com",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      },
    ]);
    console.log(`Created ${users.length} demo users`);

    // Create demo posts
    const posts = await Post.create([
      {
        user: users[0]._id,
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
        title: "The Future of Web Development in 2025",
        slug: "future-of-web-development-2025",
        desc: "Explore the emerging trends and technologies that will shape web development in the coming year, from AI integration to advanced frameworks.",
        category: "development",
        content: "<p>Web development continues to evolve at a rapid pace, and 2025 promises to bring exciting new possibilities. From the rise of AI-powered development tools to the maturation of WebAssembly, developers have more powerful tools than ever before.</p><p>One of the most significant trends is the integration of artificial intelligence into the development workflow. AI assistants can now help with code completion, bug detection, and even architecture decisions. This doesn't replace developers but augments their capabilities.</p><p>Another major trend is the shift towards edge computing and serverless architectures. These technologies enable faster, more scalable applications that can serve global audiences with minimal latency.</p><p>The JavaScript ecosystem continues to mature, with frameworks like React, Vue, and Svelte offering increasingly sophisticated solutions for building interactive user interfaces. TypeScript has become the de facto standard for large-scale applications.</p><p>As we look ahead, the key for developers is to stay curious, keep learning, and embrace these new technologies while maintaining a solid foundation in core web principles.</p>",
        isFeatured: true,
        visit: 1847,
      },
      {
        user: users[1]._id,
        img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
        title: "Modern UI/UX Design Principles That Matter",
        slug: "modern-ui-ux-design-principles",
        desc: "Learn the essential design principles that create intuitive, beautiful, and accessible user experiences in today's digital landscape.",
        category: "web-design",
        content: "<p>Great design is invisible. When users interact with a well-designed interface, they focus on their tasks, not on figuring out how to use the interface. This principle guides all modern UI/UX design.</p><p>Color theory remains fundamental. Understanding how colors interact, evoke emotions, and guide user attention is crucial. Modern designs favor clean color palettes with purposeful contrast.</p><p>Typography has become increasingly important in web design. With variable fonts and improved rendering, text can be both beautiful and highly readable across all devices.</p><p>Accessibility is no longer optional. Designs must work for users with diverse abilities, following WCAG guidelines to ensure everyone can access your content.</p><p>Microinteractions add delight and provide feedback. These small animations and transitions make interfaces feel responsive and alive, improving the overall user experience.</p>",
        isFeatured: true,
        visit: 1523,
      },
      {
        user: users[2]._id,
        img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
        title: "Database Optimization Techniques for Scale",
        slug: "database-optimization-techniques-scale",
        desc: "Practical strategies for optimizing database performance as your application grows from hundreds to millions of users.",
        category: "databases",
        content: "<p>As applications scale, database performance often becomes the primary bottleneck. Understanding optimization techniques is essential for maintaining fast, responsive applications.</p><p>Indexing is the first line of defense. Properly designed indexes can transform slow queries into lightning-fast operations. However, over-indexing can hurt write performance, so balance is key.</p><p>Query optimization requires understanding how your database executes queries. Use EXPLAIN plans to identify slow operations and rewrite queries for better performance.</p><p>Caching strategies can dramatically reduce database load. Redis and Memcached are popular choices for caching frequently accessed data.</p><p>Connection pooling prevents the overhead of creating new database connections for each request. Most modern ORMs handle this automatically, but understanding the concept is important.</p><p>For truly massive scale, consider sharding and replication strategies. These advanced techniques distribute data across multiple servers, enabling horizontal scaling.</p>",
        isFeatured: false,
        visit: 892,
      },
      {
        user: users[0]._id,
        img: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800",
        title: "SEO in the Age of AI: What's Changed",
        slug: "seo-age-of-ai-whats-changed",
        desc: "How artificial intelligence is transforming search engine optimization and what strategies still matter in 2025.",
        category: "seo",
        content: "<p>Search engine optimization has undergone dramatic changes with the rise of AI-powered search algorithms. Google's AI now understands context and user intent better than ever before.</p><p>Traditional keyword stuffing is not just ineffective—it's harmful. Modern SEO focuses on creating genuinely valuable content that answers user questions comprehensively.</p><p>Semantic search means related concepts matter as much as exact keywords. Write naturally about your topic, covering related concepts and questions users might have.</p><p>Technical SEO remains crucial. Fast page loads, mobile optimization, and proper schema markup help search engines understand and rank your content.</p><p>User engagement signals are increasingly important. Dwell time, bounce rate, and click-through rates tell search engines whether users find your content valuable.</p>",
        isFeatured: false,
        visit: 1234,
      },
      {
        user: users[3]._id,
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        title: "Content Marketing Strategies That Convert",
        slug: "content-marketing-strategies-convert",
        desc: "Proven content marketing approaches that build audience trust and drive real business results.",
        category: "marketing",
        content: "<p>Content marketing has evolved from simple blogging to a sophisticated discipline that combines storytelling, data analysis, and strategic distribution.</p><p>Understanding your audience is the foundation. Create detailed buyer personas and map content to each stage of the customer journey.</p><p>Quality beats quantity every time. One comprehensive, well-researched article provides more value than ten shallow posts.</p><p>Distribution matters as much as creation. Great content needs to reach your audience through social media, email, and strategic partnerships.</p><p>Measurement drives improvement. Track engagement metrics, conversion rates, and ROI to understand what content resonates with your audience.</p>",
        isFeatured: false,
        visit: 567,
      },
      {
        user: users[1]._id,
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
        title: "Building Scalable APIs with Node.js",
        slug: "building-scalable-apis-nodejs",
        desc: "Best practices for designing and implementing RESTful APIs that can handle millions of requests.",
        category: "development",
        content: "<p>Node.js excels at building fast, scalable APIs. Its event-driven architecture handles concurrent requests efficiently, making it ideal for modern web applications.</p><p>RESTful design principles create predictable, maintainable APIs. Use proper HTTP methods, status codes, and resource naming conventions.</p><p>Authentication and authorization protect your API. JWT tokens provide a stateless authentication mechanism that scales well.</p><p>Rate limiting prevents abuse and ensures fair resource allocation. Libraries like express-rate-limit make implementation straightforward.</p><p>Error handling must be consistent and informative. Return meaningful error messages with appropriate status codes to help API consumers debug issues.</p><p>Documentation is crucial. Tools like Swagger/OpenAPI make it easy to maintain up-to-date, interactive API documentation.</p>",
        isFeatured: true,
        visit: 1678,
      },
      {
        user: users[2]._id,
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
        title: "Responsive Design Beyond Media Queries",
        slug: "responsive-design-beyond-media-queries",
        desc: "Advanced techniques for creating truly responsive layouts that adapt to any screen size.",
        category: "web-design",
        content: "<p>Responsive design has matured beyond simple breakpoints. Modern CSS provides powerful tools for creating fluid, adaptive layouts.</p><p>CSS Grid and Flexbox enable intrinsically responsive designs that adapt without media queries. Use auto-fit, minmax, and clamp for intelligent sizing.</p><p>Container queries are game-changing. Components can now respond to their container's size rather than the viewport, enabling truly modular design.</p><p>Fluid typography using clamp() creates smooth size transitions across all screen sizes, eliminating awkward jumps at breakpoints.</p><p>Aspect ratio boxes maintain proportions without JavaScript. The aspect-ratio property makes this simple and reliable.</p>",
        isFeatured: false,
        visit: 945,
      },
      {
        user: users[0]._id,
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        title: "MongoDB Performance Tuning Guide",
        slug: "mongodb-performance-tuning-guide",
        desc: "Essential techniques for optimizing MongoDB queries and improving database performance.",
        category: "databases",
        content: "<p>MongoDB's flexibility comes with performance considerations. Understanding how to optimize queries is essential for production applications.</p><p>Indexes are MongoDB's most powerful optimization tool. Create compound indexes for queries that filter on multiple fields.</p><p>The aggregation pipeline can be incredibly efficient when used correctly. Push filtering and projection stages early in the pipeline.</p><p>Schema design impacts performance. Embedding related data can reduce queries, but denormalization requires careful consideration.</p><p>Connection pooling prevents connection overhead. Configure appropriate pool sizes based on your application's concurrency needs.</p><p>Monitoring tools like MongoDB Atlas provide insights into slow queries and index usage, guiding optimization efforts.</p>",
        isFeatured: false,
        visit: 723,
      },
      {
        user: users[3]._id,
        img: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?w=800",
        title: "Local SEO for Small Businesses",
        slug: "local-seo-small-businesses",
        desc: "How small businesses can dominate local search results and attract nearby customers.",
        category: "seo",
        content: "<p>Local SEO helps small businesses compete with larger competitors by focusing on geographic relevance.</p><p>Google Business Profile is the cornerstone of local SEO. Keep your profile complete, accurate, and updated with photos and posts.</p><p>Local citations across directories like Yelp and Yellow Pages build trust and improve rankings. Consistency in NAP (Name, Address, Phone) is crucial.</p><p>Reviews significantly impact local rankings. Encourage satisfied customers to leave reviews and respond professionally to all feedback.</p><p>Location-specific content helps search engines understand your service areas. Create pages for each location you serve.</p>",
        isFeatured: false,
        visit: 456,
      },
      {
        user: users[1]._id,
        img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800",
        title: "Email Marketing That Actually Works",
        slug: "email-marketing-actually-works",
        desc: "Proven email marketing tactics that drive engagement, build relationships, and increase conversions.",
        category: "marketing",
        content: "<p>Email marketing remains one of the highest ROI channels when done correctly. Success requires understanding both technical and creative aspects.</p><p>Segmentation enables personalized messaging. Divide your list by behavior, preferences, and demographics to send relevant content.</p><p>Subject lines determine open rates. Keep them concise, create curiosity, and deliver on promises in the email body.</p><p>Mobile optimization is non-negotiable. Most emails are opened on mobile devices, so design with small screens in mind.</p><p>A/B testing reveals what resonates with your audience. Test subject lines, send times, and content to continuously improve performance.</p>",
        isFeatured: false,
        visit: 834,
      },
      {
        user: users[2]._id,
        img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
        title: "React Performance Optimization Tips",
        slug: "react-performance-optimization-tips",
        desc: "Practical techniques for improving React application performance and user experience.",
        category: "development",
        content: "<p>React applications can become slow without proper optimization. Understanding React's rendering behavior is key to building fast apps.</p><p>Memo and useMemo prevent unnecessary re-renders. Use them for expensive computations and component trees that don't need frequent updates.</p><p>Code splitting with React.lazy reduces initial bundle size. Load components on demand to improve first contentful paint.</p><p>Virtual scrolling handles large lists efficiently. Libraries like react-window render only visible items, dramatically improving performance.</p><p>The React DevTools Profiler identifies performance bottlenecks. Use it to measure component render times and find optimization opportunities.</p>",
        isFeatured: false,
        visit: 1156,
      },
      {
        user: users[0]._id,
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
        title: "Color Psychology in Web Design",
        slug: "color-psychology-web-design",
        desc: "How to use color theory to evoke emotions and guide user behavior on your website.",
        category: "web-design",
        content: "<p>Colors powerfully influence emotions and behavior. Understanding color psychology helps designers create effective, engaging interfaces.</p><p>Blue conveys trust and professionalism, which is why financial and healthcare sites favor it. Different shades create different moods.</p><p>Red creates urgency and excitement, making it effective for calls-to-action and sale promotions. Use sparingly for maximum impact.</p><p>Green represents growth and harmony, often used for environmental and health-related content. It's also easier on the eyes.</p><p>Color combinations matter as much as individual colors. Complementary colors create vibrant designs, while analogous colors feel harmonious.</p><p>Cultural context affects color perception. What works in one market may not translate to another, so research your target audience.</p>",
        isFeatured: true,
        visit: 1389,
      },
      {
        user: users[3]._id,
        img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
        title: "SQL vs NoSQL: Choosing the Right Database",
        slug: "sql-vs-nosql-choosing-right-database",
        desc: "A comprehensive comparison to help you choose between SQL and NoSQL databases for your project.",
        category: "databases",
        content: "<p>Choosing between SQL and NoSQL databases depends on your specific requirements. Both have strengths that suit different use cases.</p><p>SQL databases excel at complex queries and transactions. If you need ACID guarantees and relational data, PostgreSQL or MySQL are excellent choices.</p><p>NoSQL databases offer flexibility and horizontal scaling. MongoDB, for example, handles unstructured data and scales across multiple servers easily.</p><p>Consider your data structure. Highly relational data benefits from SQL's join capabilities, while hierarchical data fits naturally in document databases.</p><p>Scale requirements matter. NoSQL databases generally scale out more easily, while SQL databases traditionally scale up.</p><p>Many modern applications use both. Polyglot persistence leverages the strengths of different databases for different parts of your application.</p>",
        isFeatured: false,
        visit: 678,
      },
      {
        user: users[1]._id,
        img: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800",
        title: "Link Building Strategies for 2025",
        slug: "link-building-strategies-2025",
        desc: "Ethical, effective link building techniques that improve domain authority and search rankings.",
        category: "seo",
        content: "<p>Link building remains crucial for SEO success, but tactics have evolved. Quality links from relevant sites matter far more than quantity.</p><p>Create link-worthy content that naturally attracts backlinks. Original research, comprehensive guides, and useful tools earn organic links.</p><p>Guest posting on reputable sites builds authority and relationships. Focus on adding value, not just getting links.</p><p>Broken link building helps webmasters while earning links. Find broken links, create replacement content, and suggest your resource.</p><p>Digital PR generates high-quality links from news sites and industry publications. Create newsworthy content and pitch it to journalists.</p>",
        isFeatured: false,
        visit: 512,
      },
      {
        user: users[2]._id,
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
        title: "Social Media Marketing Best Practices",
        slug: "social-media-marketing-best-practices",
        desc: "Effective strategies for building engaged communities and driving results across social platforms.",
        category: "marketing",
        content: "<p>Social media marketing requires authentic engagement and strategic planning. Each platform has unique characteristics and audience expectations.</p><p>Consistency in posting builds audience habits. Create a content calendar and maintain a regular publishing schedule.</p><p>Engagement matters more than follower count. Respond to comments, ask questions, and create conversations with your audience.</p><p>Visual content performs better across all platforms. Invest in quality images, videos, and graphics that stop scrolling.</p><p>Analytics guide strategy. Track engagement rates, reach, and conversions to understand what content resonates.</p><p>Platform-specific strategies work best. What succeeds on LinkedIn differs from Instagram or TikTok. Tailor content to each platform.</p>",
        isFeatured: false,
        visit: 923,
      },
      {
        user: users[0]._id,
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
        title: "TypeScript for JavaScript Developers",
        slug: "typescript-javascript-developers",
        desc: "A practical guide to adopting TypeScript and improving code quality in JavaScript projects.",
        category: "development",
        content: "<p>TypeScript adds static typing to JavaScript, catching errors early and improving developer experience through better tooling.</p><p>Start gradually by adding TypeScript to new files in existing projects. The .ts extension enables type checking without requiring a complete rewrite.</p><p>Interfaces and types define data structures, making code self-documenting and enabling intelligent autocomplete in IDEs.</p><p>Generic types create reusable, type-safe functions and components. They're especially powerful in utility functions and React components.</p><p>Strict mode catches more potential bugs but requires more careful type definitions. Enable it for new projects; add it gradually to existing ones.</p><p>The TypeScript ecosystem is mature. Most popular libraries include type definitions, and DefinitelyTyped fills remaining gaps.</p>",
        isFeatured: false,
        visit: 1445,
      },
      {
        user: users[3]._id,
        img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
        title: "Minimalist Design Principles",
        slug: "minimalist-design-principles",
        desc: "How to create clean, focused designs that communicate effectively through simplicity.",
        category: "web-design",
        content: "<p>Minimalist design isn't about removing everything—it's about removing anything that doesn't serve a purpose. Every element should have a reason for existing.</p><p>White space is a design element, not empty space. It guides attention, creates breathing room, and makes content more digestible.</p><p>Typography takes center stage in minimalist designs. With fewer visual elements, font choices and hierarchy become crucial.</p><p>Limited color palettes create cohesion. Two or three colors plus neutrals often suffice for effective minimalist designs.</p><p>Functionality drives minimalism. Remove features and design elements that don't help users accomplish their goals.</p>",
        isFeatured: false,
        visit: 789,
      },
      {
        user: users[1]._id,
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
        title: "Database Security Best Practices",
        slug: "database-security-best-practices",
        desc: "Essential security measures to protect your database from common threats and vulnerabilities.",
        category: "databases",
        content: "<p>Database security is critical—breaches can expose sensitive data and destroy user trust. A layered security approach provides the best protection.</p><p>Encryption protects data at rest and in transit. Use TLS for connections and encrypt sensitive fields in the database.</p><p>Principle of least privilege limits damage from compromised accounts. Grant only necessary permissions to each user and application.</p><p>Regular backups enable recovery from attacks or accidents. Automate backups and test restoration procedures regularly.</p><p>Input validation prevents SQL injection attacks. Use parameterized queries and never construct queries with string concatenation.</p><p>Monitor database activity for suspicious patterns. Logging and alerting help detect and respond to potential security incidents.</p>",
        isFeatured: false,
        visit: 1067,
      },
      {
        user: users[2]._id,
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
        title: "Voice Search Optimization Strategies",
        slug: "voice-search-optimization-strategies",
        desc: "How to optimize content for voice search and capitalize on the growing voice assistant market.",
        category: "seo",
        content: "<p>Voice search is transforming SEO. People speak differently than they type, using natural language and asking complete questions.</p><p>Long-tail keywords and conversational phrases match voice queries better than short keywords. Optimize for how people actually talk.</p><p>Featured snippets often provide voice search answers. Structure content to answer specific questions concisely for featured snippet placement.</p><p>Local optimization matters for voice search. Many voice queries have local intent, so strengthen local SEO efforts.</p><p>Page speed is crucial. Voice assistants favor fast-loading pages that can quickly provide answers to users.</p><p>Schema markup helps search engines understand your content's context, improving chances of appearing in voice search results.</p>",
        isFeatured: false,
        visit: 634,
      },
      {
        user: users[0]._id,
        img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
        title: "Influencer Marketing ROI Guide",
        slug: "influencer-marketing-roi-guide",
        desc: "How to measure and maximize return on investment from influencer marketing campaigns.",
        category: "marketing",
        content: "<p>Influencer marketing can drive significant results, but measuring ROI requires clear goals and tracking mechanisms.</p><p>Define objectives before campaigns. Are you building awareness, driving sales, or growing your audience? Metrics differ for each goal.</p><p>Micro-influencers often provide better ROI than celebrities. Their engaged, niche audiences convert well and cost less.</p><p>Authentic partnerships perform best. Let influencers create content in their style rather than dictating every detail.</p><p>Track unique links and codes to measure direct conversions. Use UTM parameters to monitor traffic and behavior in analytics.</p><p>Long-term partnerships build more value than one-off posts. Ongoing relationships create authentic endorsements that audiences trust.</p>",
        isFeatured: true,
        visit: 1821,
      },
    ]);
    console.log(`Created ${posts.length} demo posts`);

    // Create demo comments
    const comments = await Comment.create([
      {
        user: users[1]._id,
        post: posts[0]._id,
        desc: "Great article! I especially appreciate your insights on AI-powered development tools. We've been experimenting with GitHub Copilot and it's definitely changing how we work.",
      },
      {
        user: users[2]._id,
        post: posts[0]._id,
        desc: "Do you think WebAssembly will eventually replace JavaScript for performance-critical applications? Would love to hear your thoughts on this.",
      },
      {
        user: users[3]._id,
        post: posts[0]._id,
        desc: "The section on edge computing really resonated with me. We recently migrated to Cloudflare Workers and the performance improvements have been incredible.",
      },
      {
        user: users[0]._id,
        post: posts[1]._id,
        desc: "Excellent breakdown of modern design principles. The point about accessibility being non-negotiable is so important and often overlooked.",
      },
      {
        user: users[3]._id,
        post: posts[1]._id,
        desc: "I love the emphasis on microinteractions. Those small details really do make interfaces feel more polished and professional.",
      },
      {
        user: users[0]._id,
        post: posts[2]._id,
        desc: "Super helpful guide! The section on indexing strategies cleared up some confusion I had about when to use compound indexes.",
      },
      {
        user: users[1]._id,
        post: posts[2]._id,
        desc: "Have you had experience with read replicas for scaling? We're considering it but wondering about the complexity of keeping data synchronized.",
      },
      {
        user: users[2]._id,
        post: posts[3]._id,
        desc: "This is exactly what I needed to hear. We've been so focused on keywords that we forgot about creating genuinely valuable content. Time to refocus!",
      },
      {
        user: users[1]._id,
        post: posts[5]._id,
        desc: "The API documentation tip is gold. We switched to Swagger last year and it's made collaboration with frontend developers so much smoother.",
      },
      {
        user: users[3]._id,
        post: posts[5]._id,
        desc: "What's your take on GraphQL vs REST for new projects? We're debating which direction to go for our next API.",
      },
      {
        user: users[0]._id,
        post: posts[5]._id,
        desc: "Rate limiting saved us from a bot attack last month. Definitely a must-have for any production API!",
      },
      {
        user: users[2]._id,
        post: posts[6]._id,
        desc: "Container queries are a game changer! Can't believe we've been waiting for this feature for so long. CSS is finally catching up to what we've needed.",
      },
      {
        user: users[1]._id,
        post: posts[7]._id,
        desc: "The aggregation pipeline tips are really practical. We optimized some slow queries using these techniques and saw 10x performance improvements.",
      },
      {
        user: users[3]._id,
        post: posts[9]._id,
        desc: "Email marketing gets a bad rap but when done right, like you describe here, it's incredibly effective. Our best ROI channel by far.",
      },
      {
        user: users[0]._id,
        post: posts[10]._id,
        desc: "React.memo has been a lifesaver for our dashboard components. This guide does a great job explaining when and how to use it effectively.",
      },
      {
        user: users[2]._id,
        post: posts[11]._id,
        desc: "Color psychology is fascinating! I never realized how much thought should go into color choices beyond just 'what looks good'.",
      },
      {
        user: users[1]._id,
        post: posts[15]._id,
        desc: "Just started learning TypeScript last month and this guide would have been so helpful. Bookmarking for my team members who are making the transition.",
      },
      {
        user: users[3]._id,
        post: posts[15]._id,
        desc: "Generic types were confusing at first but now I can't imagine going back to plain JavaScript. The type safety is worth the learning curve.",
      },
      {
        user: users[0]._id,
        post: posts[17]._id,
        desc: "Database security is so critical yet often overlooked. The SQL injection prevention tips alone make this article worth reading.",
      },
      {
        user: users[2]._id,
        post: posts[19]._id,
        desc: "Working with micro-influencers has been our best strategy. Their audiences are more engaged and the partnerships feel more authentic.",
      },
    ]);
    console.log(`Created ${comments.length} demo comments`);

    console.log("\n✅ Database seeded successfully!");
    console.log(`Total: ${users.length} users, ${posts.length} posts, ${comments.length} comments`);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedData();
