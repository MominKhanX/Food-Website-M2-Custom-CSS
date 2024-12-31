'use client'

import { useState } from 'react'
import styles from './contact.module.css'
import { FaRegClock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [activeTab, setActiveTab] = useState('contact')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const faqItems = [
    {
      question: "What are your delivery hours?",
      answer: "We deliver from 11 AM to 10 PM, seven days a week. Last orders are accepted 30 minutes before closing time."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes, we have a wide range of vegetarian and vegan dishes available on our menu. You can easily filter these options on our Menu page."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is confirmed, you'll receive a tracking link via email and SMS. You can use this link to monitor your order's progress in real-time."
    },
    {
      question: "What if I have food allergies?",
      answer: "We take food allergies very seriously. Please inform us of any allergies when placing your order, and we'll ensure your meal is prepared safely. You can also find allergen information for each dish on our menu."
    },
    {
      question: "Do you cater for events?",
      answer: "Yes, we offer catering services for events of all sizes. Please contact us at least 48 hours in advance for catering requests. You can find our catering menu and request a quote on our website."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your order free of charge within 5 minutes of placing it. After this time, we may charge a cancellation fee as food preparation may have already begun."
    },
    {
      question: "Do you have a loyalty program?",
      answer: "Yes, we have a rewards program where you earn points on every order. These points can be redeemed for discounts on future orders or exclusive menu items."
    }
  ]

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Get in Touch</h1>

      <div className={styles.tabs}>

        <button 
          className={`${styles.tab} ${activeTab === 'contact' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Us
        </button>

        <button 
          className={`${styles.tab} ${activeTab === 'faq' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </button>

      </div>

      {activeTab === 'contact' && (
        <div className={styles.content}>

          <div className={styles.contactInfo}>

            <h2>Contact Information</h2>

            <p>We&apos;d love to hear from you! Whether you have a question about our menu, delivery, or anything else, our team is ready to answer all your questions.</p>
            
            <ul className={styles.contactDetails}>
              <li><FaLocationDot /> 123 Gourmet Street, Foodville, FV 12345</li>
              <li><FaPhone /> (123) 456-7890</li>
              <li><MdEmail /> info@gourmetdelights.com</li>
              <li><FaRegClock /> Monday - Sunday: 11:00 AM - 10:00 PM</li>
            </ul>

            <div className={styles.map}>

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844197932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616562084134!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy"
              />

            </div>
            
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.formGroup}>

              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className={styles.formGroup}>

              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className={styles.formGroup}>

              <label htmlFor="subject">Subject</label>
              
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Issue</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>

            </div>

            <div className={styles.formGroup}>

              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              
            </div>

            <button type="submit" className={styles.submitButton}>Send Message</button>
          
          </form>

        </div>
      )}

      {activeTab === 'faq' && (
        <div className={styles.faqSection}>

          <h2>Frequently Asked Questions</h2>

          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>

              <h3>{item.question}</h3>

              <p>{item.answer}</p>
              
            </div>
          ))}

        </div>
      )}

    </div>
  )
}

