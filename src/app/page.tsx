import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { menuItems } from './data/menuItems'
import { getBlogPosts } from '@/lib/blog'
import { ArrowRight } from 'lucide-react'

export default async function Home() {
  const featuredDishes = menuItems.slice(0, 4)
  const recentBlogPosts = await getBlogPosts()

  return (
    <div className={styles.container}>

      <section className={styles.hero}>

        <div className={styles.heroContent}>

          <div className={styles.heroText}>

            <h1>Savor the Flavor, <span className={styles.highlight}>Delivered</span></h1>

            <p>Gourmet meals crafted with passion, brought right to your doorstep</p>

            <div className={styles.ctaContainer}>

              <Link href="/order" className={styles.ctaButton}>
                Start Your Order <ArrowRight size={20} />
              </Link>

              <Link href="/menu" className={styles.secondaryButton}>
                Explore Menu
              </Link>

            </div>

          </div>

          <div className={styles.heroImageContainer}>

            <Image
              src="/Images/Gourmet-Burger.jpg"
              alt="Gourmet dish"
              width={500}
              height={500}
              className={styles.heroImage}
            />

            <div className={styles.imageOverlay}></div>

          </div>

        </div>

        <div className={styles.heroFooter}>

          <div className={styles.stat}>
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statText}>Satisfied Customers</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statText}>Gourmet Dishes</span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statNumber}>30 min</span>
            <span className={styles.statText}>Average Delivery Time</span>
          </div>

        </div>

      </section>

      <section className={styles.features}>

        <div className={styles.feature}>

          <Image src="/Images/QualityCheck2.png" alt="High Quality" width={300} height={50} />

          <h2>Premium Quality</h2>

          <p>We source only the finest ingredients for our dishes</p>

        </div>

        <div className={styles.feature}>

          <Image src="/Images/food-delivery.jpg" alt="Fast Delivery" width={300} height={300} />

          <h2>Swift Delivery</h2>

          <p>Hot and fresh food delivered right to your doorstep</p>

        </div>

        <div className={styles.feature}>

          <Image src="/Images/Menu4.png" alt="Diverse Menu" width={300} height={300} />

          <h2>Diverse Menu</h2>

          <p>A wide range of cuisines to satisfy every palate</p>

        </div>

      </section>

      <section className={styles.featured}>

        <h2>Featured Dishes</h2>

        <div className={styles.dishes}>

          {featuredDishes.map((dish) => (
            <div key={dish.id} className={styles.dish}>

              <Image src={dish.image} alt={dish.name} width={300} height={200} />

              <h3>{dish.name}</h3>

              <p>{dish.description}</p>

              <Link href="/menu" className={styles.viewMenuButton}>View Menu</Link>

            </div>
          ))}

        </div>

      </section>

      <section className={styles.chefSpotlight}>

        <h2>Chef&apos;s Spotlight</h2>

        <div className={styles.chefContent}>

          <Image src="/Images/TeamMember3.jpg" alt="Chef Maria Rodriguez" width={400} height={800} className={styles.chefImage} />

          <div className={styles.chefInfo}>
            <h3>Chef Maria Rodriguez</h3>

            <p>With over 10 years of culinary experience, Chef Maria brings her passion for innovative flavors and techniques to every dish at Gourmet Delights. Her commitment to using locally-sourced, seasonal ingredients ensures that each meal is a celebration of taste and quality.</p>

            <p>Chef Maria&apos;s signature dishes, like the Gourmet Burger and Grilled Salmon, showcase her unique blend of traditional techniques and modern creativity. Her dedication to culinary excellence has earned Gourmet Delights numerous accolades and a loyal following of food enthusiasts.</p>

            <Link href="/about" className={styles.learnMoreButton}>Learn More About Our Team</Link>
          </div>

        </div>

      </section>

      <section className={styles.testimonials}>

        <h2>What Our Customers Say</h2>

        <div className={styles.testimonialSlider}>

          {[
            { name: 'John D.', text: 'The food from Gourmet Delights is simply amazing. The flavors are out of this world, and the delivery is always on time!' },
            { name: 'Sarah M.', text: 'I\'ve tried many food delivery services, but Gourmet Delights stands out for its quality and variety. The Margherita Pizza is to die for!' },
            { name: 'Michael L.', text: 'As a busy professional, I rely on Gourmet Delights for delicious, restaurant-quality meals. Their service has never disappointed me.' }
          ].map((testimonial, i) => (
            <div key={i} className={styles.testimonial}>

              <p>"{testimonial.text}"</p>

              <div className={styles.testimonialAuthor}>

                <Image src={`/Images/TeamMember${i + 1}.jpg`} alt={testimonial.name} width={50} height={50} className={styles.authorImage} />

                <span>{testimonial.name}</span>

              </div>

            </div>
          ))}

        </div>

      </section>

      <section className={styles.cta}>

        <h2>Ready to Indulge?</h2>

        <p>Treat yourself to a gourmet meal today!</p>

        <Link href="/order" className={styles.ctaButton}>Order Now</Link>

      </section>

      <section className={styles.specialsHighlight}>

        <h2>Check Out Our Specials</h2>

        <p>Discover our latest culinary creations, seasonal offerings, and limited-time deals!</p>

        <Link href="/specials" className={styles.specialsButton}>View Specials</Link>

      </section>

      <section className={styles.blogHighlight}>

        <h2>From Our Blog</h2>

        <div className={styles.blogPosts}>

          {recentBlogPosts.slice(0, 3).map((post) => (
            <Link href={`/blog/${post.page}/`} key={post.page} className={styles.blogPost}>

              <Image
                src={post.coverImage}
                alt={post.title}
                width={300}
                height={200}
                className={styles.blogImage}
              />

              <h3>{post.title}</h3>

              <p>{post.excerpt}</p>

            </Link>
          ))}

        </div>

        <Link href="/blog" className={styles.viewAllButton}>View All Posts</Link>

      </section>

    </div>
  )
}

