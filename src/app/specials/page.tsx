'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './specials.module.css'

type Special = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Seasonal' | 'Limited Time' | "Chef's Special";
}

const specials: Special[] = [
  {
    id: 1,
    name: "Summer Berry Salad",
    description: "A refreshing mix of seasonal berries, feta cheese, and candied nuts on a bed of mixed greens, drizzled with our house-made berry vinaigrette.",
    price: 12.99,
    image: "/Images/Summer-Berry-Salad.jpg",
    category: "Seasonal"
  },
  {
    id: 2,
    name: "Truffle Mushroom Risotto",
    description: "Creamy Arborio rice cooked to perfection with a medley of wild mushrooms, finished with truffle oil and shaved Parmesan.",
    price: 18.99,
    image: "/Images/Truffle-Mushroom-Risotto.jpeg",
    category: "Chef's Special"
  },
  {
    id: 3,
    name: "Mango Tango Chicken",
    description: "Grilled chicken breast topped with a zesty mango salsa, served with coconut rice and grilled vegetables.",
    price: 16.99,
    image: "/Images/Tango-Mango-Chicken.webp",
    category: "Limited Time"
  },
  {
    id: 4,
    name: "Lobster Mac and Cheese",
    description: "Our signature mac and cheese elevated with succulent pieces of lobster meat, topped with a crispy herb crust.",
    price: 22.99,
    image: "/Images/Lobster-Mac-Cheese.webp",
    category: "Chef's Special"
  },
  {
    id: 5,
    name: "Watermelon Feta Gazpacho",
    description: "A cool and refreshing summer soup blending watermelon, cucumber, and feta cheese, garnished with mint.",
    price: 8.99,
    image: "/Images/Watermelon-Gazpacho.jpg",
    category: "Seasonal"
  },
  {
    id: 6,
    name: "BBQ Jackfruit Sliders",
    description: "Pulled jackfruit in our house-made BBQ sauce, served on mini brioche buns with crispy onion strings.",
    price: 13.99,
    image: "/Images/BBQ-Jackfruit-Sliders.jpg",
    category: "Limited Time"
  }
]

export default function Specials() {
  const [filter, setFilter] = useState<'All' | 'Seasonal' | 'Limited Time' | "Chef's Special">('All')

  const filteredSpecials = filter === 'All' ? specials : specials.filter(special => special.category === filter)

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Our Specials</h1>

      <p className={styles.subtitle}>Discover our latest culinary creations and limited-time offers</p>

      <div className={styles.filterButtons}>

        {['All', 'Seasonal', 'Limited Time', "Chef's Special"].map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category as typeof filter)}
          >
            {category}
          </button>
        ))}

      </div>

      <div className={styles.specialsGrid}>

        {filteredSpecials.map((special) => (
          <div key={special.id} className={styles.specialCard}>
            
            <Image src={special.image} alt={special.name} width={300} height={200} className={styles.specialImage} />
            
            <div className={styles.specialInfo}>

              <h2>{special.name}</h2>
              
              <p className={styles.specialDescription}>{special.description}</p>
              
              <p className={styles.specialPrice}>${special.price.toFixed(2)}</p>
              
              <span className={styles.specialCategory}>{special.category}</span>
              
              <Link href="/order" className={styles.orderButton}>Order Now</Link>
            
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

