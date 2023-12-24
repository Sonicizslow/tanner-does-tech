//ContactPage.js

function ContactPage() {
  return (
    <div className="bg-black text-white">

      <body class='text-center text-lg'>

        {/* Header Section */}
        <div class='py-8 sm:py-14'>
          <h1 class='text-6xl font-bold'>Contact Me</h1>
          <p class='text-xl mt-4'>Let's get in touch</p>
        </div>

        {/* Contact Form and Details */}
        <div className='px-8 py-5'>
          <div className='max-w-lg mx-auto'>
            <form>
              <div class='mb-6'>
                <label for='name' class='block mb-2 text-xl font-medium'>Your Name</label>
                <input type='text' id='name' class='bg-gray-700 border border-gray-600 text-white text-lg rounded-lg block w-full p-2.5' placeholder='Name'/>
              </div>

              <div class='mb-6'>
                <label for='email' class='block mb-2 text-xl font-medium'>Your Email</label>
                <input type='email' id='email' class='bg-gray-700 border border-gray-600 text-white text-lg rounded-lg block w-full p-2.5' placeholder='Email'/>
              </div>

              <div class='mb-6'>
                <label for='message' class='block mb-2 text-xl font-medium'>Your Message</label>
                <textarea id='message' class='bg-gray-700 border border-gray-600 text-white text-lg rounded-lg block w-full p-2.5' rows='4' placeholder='Message'></textarea>
              </div>

              <button type='submit' class='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center'>Submit</button>
            </form>
          </div>
        </div>

        {/* Optional: Additional Contact Information */}
        <div className='px-8 py-5'>
          <p class='text-xl'>Alternatively, feel free to reach out via email at contact@email.com or connect with me on LinkedIn.</p>
        </div>

      </body>

    </div>
  );
}

export default ContactPage;
