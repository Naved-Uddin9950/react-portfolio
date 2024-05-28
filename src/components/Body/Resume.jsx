import React from 'react'

function Resume() {
  const preview = () => {
    const link = 'https://drive.google.com/file/d/10ulVTMP56J0FMJRXIGzkx-fk71Isq4Qn/view?usp=sharing';
    let prev = document.createElement('a');
    prev.setAttribute('href', link);
    prev.setAttribute('target', '_blank');
    prev.click();
  }

  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl border rounded text-center py-2 mb-6 shadow-md'>Resume</h1>

      <div className="max-w-4xl mx-auto p-6 rounded-lg border shadow-lg">
      <button type="button" className='border rounded bg-blue-600 border-transparent shadow-md py-1 px-3 mx-2 mb-4 hover:bg-blue-700 active:bg-blue-800' onClick={preview}>View Original</button>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Naved Uddin</h1>
          <p className="text-gray-700 mb-2">+91 7023673273 | naveduddin83@gmail.com</p>
          <p className="text-blue-600">
            <a href="https://www.linkedin.com/in/naved-uddin-800241195/" className="mr-2">LinkedIn</a> |
            <a href="https://github.com/Naved-Uddin9950/" className="ml-2">GitHub</a>
          </p>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">SeekSphere Search Engine</h3>
            <p className="text-gray-700">31 March 2024 – Present</p>
            <ul className="list-disc list-inside">
              <li>Successfully integrated external APIs to fetch data from diverse sources, enriching search capabilities and expanding the breadth of accessible information.</li>
              <li>Led the development of a responsive and user-centric interface, ensuring optimal user experience across various devices and screen sizes.</li>
              <li>Implemented dynamic content loading techniques to enhance performance and expedite data retrieval, resulting in faster response times and improved user interaction.</li>
            </ul>
            <p className="text-blue-600">
              <a href="https://github.com/Naved-Uddin9950/SeekSphere" className="mr-2">GitHub</a> |
              <a href="https://seeksphere.onrender.com/" className="ml-2">Live</a>
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Ribald: NPM Package</h3>
            <p className="text-gray-700">04 March 2024 – Present</p>
            <ul className="list-disc list-inside">
              <li>Developed Ribald, a lightweight and efficient Node.js package designed for detecting vulgar and obscene words within strings.</li>
              <li>Engineered a detection algorithm to identify and flag vulgar words within input strings, ensuring content moderation.</li>
              <li>Curated and maintained a predefined list of offensive words to enhance the effectiveness of content filtering.</li>
              <li>Provided clear and concise usage instructions to facilitate straightforward implementation of Ribald within various applications.</li>
            </ul>
            <p className="text-blue-600">
              <a href="https://www.npmjs.com/package/ribald" className="mr-2">NPM</a>
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Personaforge: Random User Generator</h3>
            <p className="text-gray-700">24 March 2024</p>
            <ul className="list-disc list-inside">
              <li>Personaforge is a frontend-only web app that dynamically generates random user details using an external API. It fetches data and populates user profiles with information like name, email, location, and more.</li>
              <li>Led the frontend development efforts for Personaforge, employing HTML, CSS, and JavaScript to create a seamless user experience without the need for a backend.</li>
              <li>Implemented interactive features and optimized UI/UX elements to ensure intuitive user interaction and engagement.</li>
              <li>Successfully integrated an external API to fetch a diverse range of user data, enabling the generation of realistic and dynamic user profiles directly within the frontend interface.</li>
            </ul>
            <p className="text-blue-600">
              <a href="https://personaforge.netlify.app/" className="mr-2">Live</a>
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Noris: Random Jokes Generator</h3>
            <p className="text-gray-700">21 March 2024</p>
            <ul className="list-disc list-inside">
              <li>Noris is a frontend web app generating Chuck Norris jokes via an external API. Users get instant entertainment and can also select joke categories for personalized laughs.</li>
              <li>Developed functionality to fetch and display random Chuck Norris jokes in real-time, providing users with humorous content at the click of a button.</li>
              <li>Implemented a feature for generating Chuck Norris jokes by category, enabling users to select from predefined category buttons for tailored joke experiences.</li>
            </ul>
            <p className="text-blue-600">
              <a href="https://noris.netlify.app/" className="mr-2">Live</a>
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li><strong>Frontend:</strong> ReactJS, CSS, Bootstrap, Tailwind CSS, HTML, JavaScript, React Router, React Redux</li>
            <li><strong>Backend:</strong> NodeJS, ExpressJS, EJS, PHP, Laravel</li>
            <li><strong>Database:</strong> MongoDB (Mongoose), MySQL</li>
            <li><strong>Programming:</strong> C++, Java, C, Python</li>
            <li><strong>Technical Skills:</strong> API, MVC Architecture, REST API, Microservices</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Coursework</h2>
          <ul className="list-disc list-inside">
            <li>Web Development (IIIT)</li>
            <li>Introduction to Front-End Development (META)</li>
            <li>Programming with JavaScript (META)</li>
            <li>Version Control (META)</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Agrawal P.G. College, Jaipur</h3>
            <p className="text-gray-700">Bachelor Of Computer Application</p>
            <p className="text-gray-700">2021-2024 | Jaipur</p>
            <p className="text-gray-700">Percentage: 68%</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Sadaat Senior Secondary School</h3>
            <p className="text-gray-700">12th Science | RBSE</p>
            <p className="text-gray-700">2020-2021 | Jaipur</p>
            <p className="text-gray-700">GPA: 92.8%</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <ul className="list-disc list-inside">
            <li>Development</li>
            <li>Watching Anime</li>
            <li>Watching Movies</li>
            <li>Reading Books</li>
            <li>Developing different web apps</li>
          </ul>
        </section>
      </div>

    </div>
  )
}

export default Resume