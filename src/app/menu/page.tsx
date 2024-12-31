'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './menu.module.css'
import { menuItems } from '../data/menuItems'

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')

  const categories = ['All', ...new Set(menuItems.map(item => item.category))]

  const filteredItems = menuItems.filter(item => 
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  ).sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name)
    } else if (sortBy === 'price') {
      return a.price - b.price
    }
    return 0
  })

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Our Menu</h1>

      <div className={styles.filters}>

        <input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <div className={styles.categories}>

          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            >
              {category}
            </button>
          ))}

        </div>

        <div className={styles.sortBy}>

          <label htmlFor="sortBy">Sort by:</label>

          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.sortSelect}
          >

            <option value="name">Name</option>

            <option value="price">Price</option>

          </select>

        </div>
        
      </div>

      <div className={styles.menuGrid}>

        {filteredItems.map((item) => (
          <div key={item.id} className={styles.menuItem}>

            <Image src={item.image} alt={item.name} width={300} height={200} className={styles.menuImage} />

            <div className={styles.menuInfo}>

              <h2>{item.name}</h2>

              <p className={styles.category}>{item.category}</p>

              <p className={styles.description}>{item.description}</p>

              <p className={styles.price}>${item.price.toFixed(2)}</p>

              <button className={styles.addToCartButton}>Add to Cart</button>

            </div>
            
          </div>
        ))}

      </div>

    </div>
  )
}

