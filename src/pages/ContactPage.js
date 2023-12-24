// ContactPage.js

function ContactPage() {
  return (
    <div className="App bg-black text-white text-center py-10">
      <h1 className="text-4xl font-bold mb-5">Contact Me</h1>
      
      <p className="mb-4 text-xl max-w-4xl mx-auto leading-relaxed">
        I'm always open to discussing new opportunities, collaborations, or just to chat about tech. Feel free to reach out to me through any of the following channels:
      </p>

      <div className="contact-options">
        <div className="email mb-3">
          <h2 className="text-2xl font-semibold">Email</h2>
          <p><a href="mailto:your-email@example.com" className="hover:text-gray-300">your-email@example.com</a></p>
        </div>

        <div className="social-media">
          <h2 className="text-2xl font-semibold">Social Media</h2>
          <p className="social-links">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a> |
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"> Twitter</a> |
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"> GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
