'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './order.module.css'
import { menuItems } from '../data/menuItems'

type CartItem = {
  id: number;
  quantity: number;
}

export default function Order() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  })

  const addToCart = (itemId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevCart, { id: itemId, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId)
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      } else {
        return prevCart.filter(item => item.id !== itemId)
      }
    })
  }

  const getItemQuantity = (itemId: number) => {
    const item = cart.find(item => item.id === itemId)
    return item ? item.quantity : 0
  }

  const calculateTotal = () => {
    return cart.reduce((total, cartItem) => {
      const menuItem = menuItems.find(item => item.id === cartItem.id)
      return total + (menuItem?.price || 0) * cartItem.quantity
    }, 0)
  }

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Order submitted:', { customerInfo, cart })
    alert('Thank you for your order! It will be delivered soon.')
    setCart([])
    setIsCheckingOut(false)
    setCustomerInfo({ name: '', email: '', address: '', phone: '' })
  }

  const handleCustomerInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCustomerInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }))
  }

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Order Online</h1>

      <div className={styles.content}>

        <div className={styles.menuItems}>

          {menuItems.map(item => (
            <div key={item.id} className={styles.menuItem}>

              <Image src={item.image} alt={item.name} width={200} height={150} className={styles.itemImage} />
              
              <div className={styles.itemInfo}>

                <h2>{item.name}</h2>

                <p className={styles.itemDescription}>{item.description}</p>
                
                <p className={styles.price}>${item.price.toFixed(2)}</p>
                
                <div className={styles.itemActions}>
                  <button onClick={() => removeFromCart(item.id)} disabled={getItemQuantity(item.id) === 0}>-</button>
                  
                  <span>{getItemQuantity(item.id)}</span>
                  
                  <button onClick={() => addToCart(item.id)}>+</button>
                </div>

              </div>

            </div>
          ))}

        </div>

        <div className={styles.cart}>

          <h2>Your Order</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map(cartItem => {
                const menuItem = menuItems.find(item => item.id === cartItem.id)
                return menuItem ? (
                  <div key={cartItem.id} className={styles.cartItem}>
                    
                    <span>{menuItem.name}</span>
                    
                    <span>x{cartItem.quantity}</span>
                    
                    <span>${(menuItem.price * cartItem.quantity).toFixed(2)}</span>
                  
                  </div>
                ) : null
              })}
              <div className={styles.total}>

                <strong>Total:</strong>

                <span>${calculateTotal().toFixed(2)}</span>

              </div>

              {!isCheckingOut ? (
                <button className={styles.checkoutButton} onClick={() => setIsCheckingOut(true)}>Proceed to Checkout</button>
              ) : (
                <form onSubmit={handleCheckout} className={styles.checkoutForm}>
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={customerInfo.name}
                    onChange={handleCustomerInfoChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={customerInfo.email}
                    onChange={handleCustomerInfoChange}
                    required
                  />

                  <input
                    type="text"
                    name="address"
                    placeholder="Delivery Address"
                    value={customerInfo.address}
                    onChange={handleCustomerInfoChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={handleCustomerInfoChange}
                    required
                  />

                  <button type="submit" className={styles.submitOrderButton}>Submit Order</button>
                
                </form>
              )}

            </>
          )}

        </div>

      </div>
      
    </div>
  )
}
