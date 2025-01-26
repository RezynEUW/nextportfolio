export default function ContactSection() {
    return (
      <section id="contact" className="h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">Feel free to reach out for collaborations or inquiries.</p>
          <a href="/contact" className="px-6 py-3 bg-primary text-white rounded hover:bg-opacity-90">
            Contact Me
          </a>
        </div>
      </section>
    );
  }
  