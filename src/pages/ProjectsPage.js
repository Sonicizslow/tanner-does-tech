//ProjectsPage.js

function ProjectsPage() {
  return (
    <div className="bg-black text-white">
      
      <body class='text-center text-lg'>

        {/* Header Section */}
        <div class='py-8 sm:py-14'>
          <h1 class='text-6xl font-bold'>My Projects</h1>
          <p class='text-xl mt-4'>Showcasing my latest work in technology</p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 py-5 leading-relaxed'>
          {/* Repeat this block for each project */}
          <div className='border border-gray-200 rounded-lg p-4'>
            <h3 className='font-extrabold'>Boring Weather</h3>
                <p className='mt-2'>
                Released in November of 2023, <a className='hover:text-blue-600 underline' target="_blank" href="https://apps.apple.com/us/app/boring-weather/id6464798240">Boring Weather</a> is an iOS app created to provide straightforward weather information. 
                Developed as a learning project in Swift and mobile app development, it uses Apple's WeatherKit. 
                Released in November of 2023, the app emphasizes simplicity, marking a significant personal step in mobile app publishing.
                </p>

                <p className='mt-5'>
                Developed in Xcode using Swift, SwiftUI, WidgetKit and Weatherkit, showcasing my venture into mobile app development. 
                The project involved the complexities of the App Store submission process and its technical requirements. 
                he app, designed with a focus on basic yet essential functionality, aims to provide weather information in a user-friendly widget. 
                Future updates will include enhanced UI, additional widget options, and more detailed forecasts, all while maintaining its signature simplicity. 
                This app not only serves its users with efficiency but also marks a significant milestone in my development skills.
                </p>
          </div>

          <div className='border border-gray-200 rounded-lg p-4'>
            <h3 className='font-extrabold'>Project Name</h3>
            <p className='mt-2'>
              Brief description of the project. Maybe some key technologies used.
            </p>
            {/* Add more details or a link to the project */}
          </div>
          <div className='border border-gray-200 rounded-lg p-4 hover:bg-gray-700 hover:text-white'>
            <h3 className='font-extrabold'>Project Name</h3>
            <p className='mt-2'>
              Brief description of the project. Maybe some key technologies used.
            </p>
            {/* Add more details or a link to the project */}
          </div>
          <div className='border border-gray-200 rounded-lg p-4 hover:bg-gray-700 hover:text-white'>
            <h3 className='font-extrabold'>Project Name</h3>
            <p className='mt-2'>
              Brief description of the project. Maybe some key technologies used.
            </p>
            {/* Add more details or a link to the project */}
          </div>
          <div className='border border-gray-200 rounded-lg p-4 hover:bg-gray-700 hover:text-white'>
            <h3 className='font-extrabold'>Project Name</h3>
            <p className='mt-2'>
              Brief description of the project. Maybe some key technologies used.
            </p>
            {/* Add more details or a link to the project */}
          </div>
          <div className='border border-gray-200 rounded-lg p-4 hover:bg-gray-700 hover:text-white'>
            <h3 className='font-extrabold'>Project Name</h3>
            <p className='mt-2'>
              Brief description of the project. Maybe some key technologies used.
            </p>
            {/* Add more details or a link to the project */}
          </div>
          

          {/* ... other project blocks ... */}
        </div>
        {/* end of Projects Grid */}

      </body>

    </div>
  );
}

export default ProjectsPage;
