import Image from 'next/image'
import { getBlogPost } from '@/lib/blog'
import styles from '../blogPost.module.css'

export default async function PerfectPasta() {
  const post = await getBlogPost('perfect-pasta')

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className={styles.container}>

      <Image 
        src={post.coverImage} 
        alt={post.title} 
        width={1200} 
        height={600} 
        className={styles.coverImage}
      />

      <h1 className={styles.title}>{post.title}</h1>

      <p className={styles.date}>{new Date(post.date).toLocaleDateString()}</p>

      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
      
    </article>
  )
}

