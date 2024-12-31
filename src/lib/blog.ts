export type BlogPost = {
    page: string;
    title: string;
    date: string;
    coverImage: string;
    excerpt: string;
    content: string;
  }
  
  const blogPosts: BlogPost[] = [
    {
      page: 'perfect-pasta',
      title: 'The Secret to Perfect Pasta',
      date: '2024-01-15',
      coverImage: '/Images/Perfect-Pasta.jpeg',
      excerpt: 'Learn the techniques to cook pasta like a true Italian chef.',
      content: `
        <p>Pasta is a staple in Italian cuisine, and cooking it to perfection is an art. Here are some tips to elevate your pasta game:</p>
        <h2>1. Use Plenty of Water</h2>
        <p>Always use more water than you think you need. A good rule of thumb is 4 quarts of water for every pound of pasta.</p>
        <h2>2. Salt the Water Generously</h2>
        <p>Your pasta water should taste like the sea. Add about 1 tablespoon of salt per quart of water.</p>
        <h2>3. Don't Add Oil to the Water</h2>
        <p>Contrary to popular belief, adding oil to pasta water doesn't prevent sticking. It can actually make your sauce slide off the pasta.</p>
        <h2>4. Stir Immediately After Adding Pasta</h2>
        <p>Give your pasta a good stir as soon as you add it to the boiling water to prevent it from sticking together.</p>
        <h2>5. Cook Until Al Dente</h2>
        <p>For the perfect texture, cook your pasta until it's al dente - tender but still firm to the bite.</p>
        <p>Master these techniques, and you'll be cooking pasta like a pro in no time!</p>
      `
    },
    {
      page: 'seasonal-ingredients',
      title: 'Cooking with Seasonal Ingredients',
      date: '2024-01-22',
      coverImage: '/Images/Seasonal-Ingredients.webp',
      excerpt: 'Discover the benefits of using seasonal ingredients in your cooking.',
      content: `
        <p>Cooking with seasonal ingredients not only ensures the best flavor but also supports local farmers and reduces environmental impact. Here's why you should embrace seasonal cooking:</p>
        <h2>1. Superior Taste</h2>
        <p>Fruits and vegetables picked at their peak of ripeness have the best flavor and nutritional value.</p>
        <h2>2. Lower Cost</h2>
        <p>Seasonal produce is often more abundant and therefore less expensive.</p>
        <h2>3. Environmental Benefits</h2>
        <p>Seasonal produce typically travels shorter distances, reducing carbon emissions from transportation.</p>
        <h2>4. Variety in Your Diet</h2>
        <p>Eating seasonally encourages you to try new ingredients and recipes throughout the year.</p>
        <h2>5. Supporting Local Economy</h2>
        <p>Buying seasonal often means supporting local farmers and businesses.</p>
        <p>Start by visiting your local farmer's market and see what's in season. You'll be amazed at the difference it makes in your cooking!</p>
      `
    },
    {
      page: 'knife-skills',
      title: 'Essential Knife Skills for Home Cooks',
      date: '2024-01-29',
      coverImage: '/Images/Knife-Skills.webp',
      excerpt: 'Improve your cooking efficiency and presentation with these knife skills.',
      content: `
        <p>Good knife skills are the foundation of efficient and safe cooking. Here are some essential techniques every home cook should master:</p>
        <h2>1. The Claw Grip</h2>
        <p>Curl your fingertips under and use your knuckles to guide the knife. This protects your fingertips from cuts.</p>
        <h2>2. The Rocking Chop</h2>
        <p>Keep the tip of the knife on the cutting board and rock the blade down and forward to chop herbs and vegetables efficiently.</p>
        <h2>3. Dicing an Onion</h2>
        <p>Make horizontal and vertical cuts before slicing across to create uniform dice.</p>
        <h2>4. Julienne Cut</h2>
        <p>Create thin, matchstick-sized pieces by first slicing, then stacking and cutting again.</p>
        <h2>5. Chiffonade</h2>
        <p>Roll leafy herbs or greens into a tight cylinder and slice thinly to create ribbon-like strips.</p>
        <p>Practice these techniques, and you'll soon find yourself cooking faster and creating more visually appealing dishes!</p>
      `
    }
  ];
  
  export async function getBlogPosts(): Promise<BlogPost[]> {
    return blogPosts;
  }
  
  export async function getBlogPost(page: string): Promise<BlogPost | undefined> {
    const post = blogPosts.find(post => post.page === page);
    if (!post) {
      throw new Error(`Blog post not found: ${page}`);
    }
    return post;
  }
  
  