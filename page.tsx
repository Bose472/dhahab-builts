import Link from "next/link"

export default function Home() {
  return (
    <main>
      <header>
        <h1>DHAHAB BUILT&apos;S</h1>
        <nav>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#investment">Investment</Link>
          <Link href="#products">Products</Link>
          <Link href="#order">Order</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>
          DHAHAB BUILT&apos;S is a premium construction and investment company offering top-tier services with a touch
          of luxury and reliability.
        </p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Architectural Design</h3>
          <p>Modern and Shariah-compliant building designs tailored to your needs.</p>
        </div>
        <div className="service">
          <h3>Construction Management</h3>
          <p>We oversee and manage building projects from foundation to finish.</p>
        </div>
      </section>

      <section id="investment">
        <h2>Investment Opportunities</h2>
        <p>
          We offer Islamic-compliant investment opportunities for partners looking to grow with DHAHAB BUILT&apos;S.
        </p>
      </section>

      <section id="products">
        <h2>Products</h2>
        <div className="product">
          <h3>Luxury Tiles</h3>
          <p>Elegant, durable, and available in various styles.</p>
        </div>
        <div className="product">
          <h3>Modern Doors</h3>
          <p>Secure and stylish doors for residential and commercial projects.</p>
        </div>
      </section>

      <section id="order">
        <h2>Place an Order</h2>
        <form action="https://formspree.io/f/mwkgrkwp" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="product" placeholder="Product/Service Name" required />
          <input type="number" name="quantity" placeholder="Quantity" required />
          <textarea name="message" rows={4} placeholder="Additional Notes"></textarea>
          <button type="submit">Submit Order</button>
        </form>
      </section>

      <section id="testimonials">
        <h2>What Our Clients Say</h2>
        <p>&quot;DHAHAB BUILT&apos;S turned our vision into reality with elegance and precision.&quot; – A. Yusuf</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <form action="https://formspree.io/f/mwkgrkwp" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={4} placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} DHAHAB BUILT&apos;S. All rights reserved.</p>
      </footer>
    </main>
  )
}
