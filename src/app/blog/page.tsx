import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/blog'
import styles from './blog.module.css'

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Gourmet Delights Blog</h1>

      <p className={styles.description}>Discover culinary insights, recipes, and food trends</p>
      
      <div className={styles.grid}>

        {posts.map((post) => (
          <Link href={`/blog/${post.page}/`} key={post.page} className={styles.card}>
            
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              width={300} 
              height={200} 
              className={styles.cardImage}
            />

            <div className={styles.cardContent}>

              <h2>{post.title}</h2>

              <p>{post.excerpt}</p>

              <span className={styles.date}>{new Date(post.date).toLocaleDateString()}</span>
            
            </div>

          </Link>
        ))}

      </div>
      
    </div>
  )
}

