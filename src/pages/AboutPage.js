//AboutPage.js 

import { Helmet } from "react-helmet";

function AboutMePage() {
  return (
    <>
    <Helmet>
      <title>About Tanner - Tech Journey and Skills</title>
      <meta name="description" content="Learn about Tanner's transition from emergency services to a career in tech, including his educational background, skills in software development, cybersecurity, and IT operations." />
    </Helmet>


    <div className="bg-black text-white">

      <section class='text-center text-lg'>

        {/* Header Section */}
        <header class='py-8 sm:py-8'>
          <h1 class='text-6xl font-bold'>About Me</h1>
        </header>

        {/* About Me Content */}
        <main className='px-8 pb-5 font-medium'>
          <p className='text-xl mx-auto max-w-6xl leading-relaxed'>
          Hi there! I'm Tanner Miller, currently navigating the tech world as an IT Technical Support Specialist. 
          My journey into technology is a blend of passion, continuous learning, and a shift from a hands-on healthcare background to the dynamic realm of tech.
          </p>



          <div className='mt-10'>
            <h3 className='text-4xl py-5 font-extrabold'>Educational Journey & Shift to Tech</h3>
                <p className='text-xl mx-auto max-w-6xl leading-relaxed'>
                I began my professional life in emergency medical services, where I worked as a Paramedic and EMT, embodying a role that demanded quick thinking and a calm demeanor under pressure. 
                Graduating with honors from the Reading Hospital School of Health Sciences Paramedic program was a stepping stone in my journey. 
                However, my true calling was always in technology. This led me to pursue a degree in Computer Science from the University of Phoenix, where I'm set to graduate in May 2024. 
                I dove into the tech field with an internship in information security, marking the start of an exciting new chapter.
                </p>
          </div>

          <div className='mt-4'>
            <h3 className='text-4xl py-5 font-extrabold'>Skills and Interests</h3>
                <p className='text-xl mx-auto max-w-6xl leading-relaxed'>
                My tech toolkit is ever-growing, currently featuring skills in Swift, HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub, and Xcode. 
                My interests are diverse, spanning web and mobile development, game development, cybersecurity, and an eagerness to explore the practical applications of machine learning. 
                I love all aspects of tech - from gaming to networking and everything in between.
                {/* id like to revist this and expand on the support and cybersec side of things */}
                </p>
          </div>

          <div className='mt-4'>
            <h3 className='text-4xl py-5 font-extrabold'>Recent Achievements</h3>
                <p className='text-xl mx-auto max-w-6xl leading-relaxed'>
                A recent milestone I’m particularly proud of is publishing 'Boring Weather' on the Apple App Store. 
                It's a simple yet elegant weather app that stands as a testament to my growing development skills.
                </p>
          </div>

          <div className='mt-4'>
            <h3 className='text-4xl py-5 font-extrabold'>Beyond the Screen</h3>
                <p className='text-xl mx-auto max-w-6xl leading-relaxed'>
                When I’m not immersed in the digital world, you can find me embracing the outdoors. 
                Whether it's hiking, running, or just going for a leisurely drive, I find it rejuvenating to step away from the screens and get outside.
                </p>
          </div>

          <div className='mt-4'>
            <h3 className='text-4xl py-5 font-extrabold'>Looking Ahead</h3>
                <p className='text-xl mx-auto max-w-6xl leading-relaxed'>
                As I continue to evolve in the tech space, my goal is to integrate my diverse experiences and skills to create impactful, innovative solutions. 
                I'm driven by the quest to blend the precision of technology with the compassionate approach I've honed in EMS. 
                So here’s to the next challenge, the next project, and the endless possibilities that technology holds!
                </p>
          </div>

        </main>

      </section>

    </div>
    </>
  );
}

export default AboutMePage;
