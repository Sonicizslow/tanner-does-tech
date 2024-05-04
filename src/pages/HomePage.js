//HomePage.js
import imgbreak from '../assets/main_break.png';
import { Helmet } from 'react-helmet';
import PageTracker from '../components/pageTracker';
import Books from "../assets/books.jpg";
import SiteLogo from "../assets/logo.png";
import BoringWeatherLogo from "../assets/BoringWeather.png";

function HomePage() {
  return (
    <>
    <PageTracker />
      <Helmet>
        <title>Tanner - Tech Enthusiast</title>
        <meta name="description" content="Welcome to Tanner's site, showcasing tech projects, interests and insights. Discover Tanner's journey from emergency services to the tech world, his passion for software development, cybersecurity, and IT operations." />
      </Helmet>


      <div className="text-white text-center text-lg">
    
        <header class='text-4xl py-6 sm:py-14 tracking-[0.5rem] font-medium sm:text-7xl'>
          <h1>Hi, I'm Tanner</h1>
        </header>

        <main>
          <h2 class='text-xl pb-10 sm:pb-15 tracking-wide italic font-light sm:text-xl sm:leading-loose'>
          Tech nerd with experience in IT operations and support, with an interest in cyber security, software development, and machine learning. 
          </h2>

          <p className='py-5 px-8 text-xl max-w-7xl leading-relaxed mx-auto'>
          As an IT Technical Support Specialist at Nuna, my role revolves around enhancing user productivity and streamlining operations.
           We successfully migrated security software for a diverse user base and managed a vast Microsoft 365 environment, demonstrating our team's effectiveness in handling complex IT ecosystems. 
           My education in Computer Science at the University of Phoenix is a cornerstone of my approach, providing a theoretical framework for practical problem-solving.
          <br></br>
          <br></br>
          My experience extends to administering a substantial number of Apple devices and automating departmental processes, cutting labor hours significantly. 
          This background, paired with my certifications in Microsoft technologies, fuels my commitment to delivering robust solutions and maintaining secure, efficient systems.
           With a background as a National Registered Paramedic, I bring a unique perspective to IT, prioritizing precision and critical response in every task.
          </p>
        </main>

        <div className="bg-black text-white">
        
        <body class='text-center text-lg'>

          {/* Header Section */}
          <header class='py-8 sm:py-14'>
            <h1 class='text-6xl font-bold'>My Projects</h1>
            <p class='text-xl mt-4'>Showcasing my latest work in technology</p>
          </header>

          {/* Projects Grid */}
          <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 py-5 leading-relaxed'>
            {/* start of boring weather */}
            <div className='border border-gray-200 rounded-lg p-4'>
              <img src={BoringWeatherLogo} alt="A 2d white cloud on a gray background" className="w-full h-auto mb-4" />
              <h3 className="font-extrabold text-2xl mb-2">Boring Weather - iOS Weather Application</h3>

              <h4 className="font-bold text-xl">Overview:</h4>
              <p className="mt-1">
                "Boring Weather" is a simplistic iOS weather application, released in November 2023. 
                It stands out as a prime example of my venture into mobile app development, encapsulating my proficiency in Swift and my ability to navigate the complexities of the App Store's submission process.
              </p>

              <h4 className="font-bold text-xl mt-4">Features:</h4>
              <ul className="list-disc list-inside mt-1">
                <li>User-Friendly Design: Minimalist design focusing on delivering weather information.</li>
                <li>Swift and SwiftUI Implementation: Developed using Swift and SwiftUI, leveraging Apple's WeatherKit.</li>
                <li>WidgetKit Integration: Interactive widget experience on iOS devices.</li>
              </ul>

              <h4 className="font-bold text-xl mt-4">Technical Highlights:</h4>
              <ul className="list-disc list-inside mt-1">
                <li>Development Environment: Built and tested within Xcode.</li>
                <li>Apple's WeatherKit: Utilizes WeatherKit for accurate weather data.</li>
                <li>SwiftUI for UI Design: Modern iOS UI development with SwiftUI.</li>
              </ul>

              <h4 className="font-bold text-xl mt-4">Future Enhancements:</h4>
              <p className="mt-1">
                Future plans include enhanced UI elements, additional widget options, and more detailed forecasts, aiming to expand functionality while maintaining simplicity.
              </p>
              <a href="https://apps.apple.com/us/app/boring-weather/id6464798240" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on App Store</a>
            </div>
            {/* END OF BORING WEATHER */}

            {/* START OF PERSONAL WEBSITE */}
            <div className='border border-gray-200 rounded-lg p-4'>
              <img src={SiteLogo} alt="Tanner Does Tech logo" className="w-full h-auto mb-4" />
              <h3 className="font-extrabold text-2xl mb-2">Personal Portfolio Website - Tanner Miller</h3>

              <h4 className="font-bold text-xl">Overview:</h4>
              <p className="mt-1">
                Tanner's personal website is a comprehensive showcase of his journey and accomplishments in the tech world. 
                Designed and developed as a personal project, this website serves as a digital portfolio, highlighting Tanner's transition from emergency services to a flourishing career in technology...
              </p>

              <h4 className="font-bold text-xl mt-4">Features:</h4>
              <ul className="list-disc list-inside mt-1">
                <li>Engaging Design: A clean, modern design with a black-and-white color scheme.</li>
                <li>Responsive Development: Built using React.js and styled with Tailwind CSS.</li>
                <li>Content-Rich Sections: Home, About, Projects, and Contact sections.</li>
                <li>SEO Optimization: Employing React Helmet for enhanced web presence.</li>
              </ul>

              <h4 className="font-bold text-xl mt-4">Technical Highlights:</h4>
              <ul className="list-disc list-inside mt-1">
                <li>React.js for dynamic content rendering and state management.</li>
                <li>Tailwind CSS for custom, responsive design.</li>
                <li>React Helmet for effective SEO optimization.</li>
              </ul>

              <h4 className="font-bold text-xl mt-4">Future Enhancements:</h4>
              <p className="mt-1">
                Planned future enhancements include integrating a blog section, further development of the UI/UX, and ongoing updates to reflect Tanner's latest work and achievements.
              </p>
            </div>
            {/* End of Personal Site */}

          {/* START OF Capstone */}
            <div className='border border-gray-200 rounded-lg p-4'>
              <img src={Books} alt="GoDot's logo, featuring a rounded blue robot head" className="w-full h-auto mb-4" />
              <h3 className="font-extrabold text-2xl mb-2">University of Phoenix - Capstone "How-To Bookstore"</h3>

              <h4 className="font-bold text-xl">Overview:</h4>
                <p className="mt-1">
                  For the final three credits of my computer science degree, the course tasked me with creating an e-commerce application over the course of 5 weeks.
                </p>

              <h4 className="font-bold text-xl mt-4">Development Dynamics:</h4>
                <ul className="list-disc list-inside mt-1">
                  <li>Timeline: Due to the short timeline to build an MVP, planning tasks and prioritizing work on the project while working full time was key</li>
                  <li>Languages: Professor requested development using HTML, CSS, and Javascript</li>
                  <li>Documentation: Part of the capstone is documentation on planning development, user stories, and task completion. </li>
                </ul>

              <h4 className="font-bold text-xl mt-4">Features:</h4>
                <ul className="list-disc list-inside mt-1">
                  <li>Search Function: Implemented search function to find matches in title, book description, or author's name.</li>
                  <li>Filtering: Realtime dynamic filtering.</li>
                  <li>Cart: Added ability for users to add items to their cart and to view the cart.</li>
                </ul>

              <h4 className="font-bold text-xl mt-4">Personal Insights:</h4>
                <p className="mt-1">
                  This has been written at the start of the project and will be updated as time permits. So far I find it difficult to not want to add on more features, but we were heavily advised to start small and avoid scope creep  
                </p>
            </div>
            {/* END OF Capstone */}
            
            {/* 
              template for more projects

            <div className='border border-gray-200 rounded-lg p-4'>
              <h3 className='font-extrabold'>Project Name</h3>
              <p className='mt-2'>
                Brief description of the project. Maybe some key technologies used.
              </p>
              {/* Add more details or a link to the project
            </div> */}
            
          </main>
          {/* end of Projects Grid */}

        </body>

      </div>

      </div>
    </>
  );
};

export default HomePage;
