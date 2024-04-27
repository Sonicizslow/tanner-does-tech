//ProjectsPage.js

import Helmet from "react-helmet";
import Books from "../assets/books.jpg";
import SiteLogo from "../assets/logo.png";
import BoringWeatherLogo from "../assets/BoringWeather.png";
import PageTracker from "../components/pageTracker";

function ProjectsPage() {

  return (
    <>
    <PageTracker />
      <Helmet>
        <title>Tanner's Projects - Showcase of Tech Creations</title>
        <meta name="description" content="Explore Tanner's portfolio of tech projects, featuring a range of work in software development, mobile app creation, and cybersecurity." />
      </Helmet>
    
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
                "Boring Weather" is an elegantly simplistic iOS weather application, released in November 2023. 
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

              <h4 className="font-bold text-xl mt-4">Personal Significance:</h4>
              <p className="mt-1">
                This project marks a pivotal milestone in my journey as a developer, reflecting my passion for learning new technologies and commitment to creating functional and aesthetically simple applications.
              </p>

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

              <h4 className="font-bold text-xl mt-4">Personal Significance:</h4>
              <p className="mt-1">
                This website is a representation of Tanner's dedication to continuous learning and adaptation in the ever-evolving landscape of technology.
              </p>

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
    </>
  );
}

export default ProjectsPage;
