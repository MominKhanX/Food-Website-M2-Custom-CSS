import Image from 'next/image'
import styles from './about.module.css'

export default function About() {
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>About Gourmet Delights</h1>

            <div className={styles.content}>

                <div className={styles.imageWrapper}>
                    <Image src="/Images/AboutUs.webp" alt="Our Team" width={600} height={400} className={styles.image} />
                </div>

                <div className={styles.text}>
                    <p>
                        Welcome to Gourmet Delights, where passion for food meets exceptional service. Founded in 2010 by culinary enthusiasts John Smith and Emily Chen, we&apos;ve been on a mission to bring the finest culinary experiences right to your doorstep.
                    </p>
                    <p>
                        Our journey began in a small kitchen with big dreams. Today, we&apos;ve grown into a team of over 50 dedicated food lovers, including expert chefs, attentive customer service representatives, and efficient delivery personnel. Together, we work tirelessly to ensure that every meal we serve is a delightful experience for our customers.
                    </p>
                    <p>
                        At the heart of Gourmet Delights is our team of expert chefs, led by renowned culinary artist Chef Maria Rodriguez. With her innovative approach to cooking and commitment to using only the freshest, highest-quality ingredients, Chef Maria has elevated our menu to new heights of gastronomic excellence.
                    </p>
                    <p>
                        We believe that great food has the power to bring people together. Whether you&apos;re celebrating a special occasion or simply treating yourself to a weeknight indulgence, we&apos;re here to make your dining experience unforgettable. From our kitchen to your table, every dish is crafted with care, creativity, and a commitment to culinary excellence.
                    </p>
                </div>

            </div>

            <section className={styles.mission}>
                <h2>Our Mission</h2>
                <p>To deliver exceptional culinary experiences that inspire joy and bring people together, one meal at a time. We strive to redefine the standards of food delivery by offering restaurant-quality meals, impeccable service, and a diverse menu that caters to all tastes and dietary needs.</p>
            </section>

            <section className={styles.values}>

                <h2>Our Values</h2>

                <ul>
                    <li>Quality: We never compromise on the quality of our ingredients or our service.</li>
                    <li>Innovation: We constantly explore new flavors and techniques to surprise and delight our customers.</li>
                    <li>Sustainability: We are committed to environmentally friendly practices and supporting local producers.</li>
                    <li>Community: We believe in giving back to the communities we serve and fostering a sense of belonging.</li>
                    <li>Integrity: We conduct our business with honesty, transparency, and respect for our customers and employees.</li>
                </ul>

            </section>

            <section className={styles.timeline}>

                <h2>Our Journey</h2>

                <div className={styles.timelineItem}>

                    <div className={styles.timelineContent}>
                        <h3>2010</h3>
                        <p>Gourmet Delights is founded with a small kitchen and big dreams.</p>
                    </div>

                </div>

                <div className={styles.timelineItem}>

                    <div className={styles.timelineContent}>
                        <h3>2013</h3>
                        <p>We expand our menu and introduce our signature dishes, including the now-famous Gourmet Burger.</p>
                    </div>

                </div>

                <div className={styles.timelineItem}>

                    <div className={styles.timelineContent}>
                        <h3>2016</h3>
                        <p>Gourmet Delights wins {"Best Food Delivery Service"} in the city and opens our second kitchen location.</p>
                    </div>

                </div>

                <div className={styles.timelineItem}>

                    <div className={styles.timelineContent}>
                        <h3>2019</h3>
                        <p>We launch our mobile app for easier ordering and customization, and introduce our loyalty program.</p>
                    </div>

                </div>

                <div className={styles.timelineItem}>

                    <div className={styles.timelineContent}>
                        <h3>2022</h3>
                        <p>Gourmet Delights expands to multiple cities across the country and partners with local farms for fresh ingredients.</p>
                    </div>

                </div>

            </section>

            <section className={styles.team}>

                <h2>Meet Our Team</h2>

                <div className={styles.teamGrid}>

                    <div className={styles.teamMember}>
                        <Image src="/Images/TeamMember1.jpg" alt="John Smith" width={200} height={200} className={styles.teamMemberImage} />
                        
                        <h3>John Smith</h3>

                        <p>Co-founder & CEO</p>
                    </div>

                    <div className={styles.teamMember}>
                        <Image src="/Images/TeamMember2.jpg" alt="Emily Chen" width={200} height={200} className={styles.teamMemberImage} />
                        
                        <h3>Emily Chen</h3>

                        <p>Co-founder & COO</p>
                    </div>

                    <div className={styles.teamMember}>
                        <Image src="/Images/TeamMember3.jpg" alt="Chef Maria Rodriguez" width={200} height={200} className={styles.teamMemberImage} />
                        
                        <h3>Maria Rodriguez</h3>

                        <p>Executive Chef</p>
                    </div>

                    <div className={styles.teamMember}>
                        <Image src="/Images/TeamMember4.jpg" alt="David Lee" width={200} height={200} className={styles.teamMemberImage} />

                        <h3>David Lee</h3>

                        <p>Head of Customer Experience</p>
                    </div>

                </div>

            </section>

        </div>
    )
}

