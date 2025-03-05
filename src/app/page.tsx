export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-10">
        <div className="text-black container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MyWebsite</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-blue-500 text-white">
        <h2 className="text-4xl font-bold">Welcome to My Website</h2>
        <p className="mt-4 text-lg">Building modern web experiences with React & Tailwind CSS</p>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto p-12 text-center">
        <h2 className="text-gray-600 text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-gray-600">We create fast and beautiful websites using the latest technologies.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-200 p-12 text-center">
        <h2 className="text-gray-600 text-3xl font-bold">Our Services</h2>
        <div className="flex flex-wrap justify-center mt-6 space-x-6">
          <div className="bg-white p-6 shadow-md rounded-lg w-64">
            <h3 className="text-gray-600 font-bold">Web Development</h3>
            <p className="text-gray-600">We build modern and scalable web applications.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg w-64">
            <h3 className="text-gray-600 font-bold">UI/UX Design</h3>
            <p className="text-gray-600">Designing sleek and intuitive interfaces.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg w-64">
            <h3 className="text-gray-600 font-bold">SEO Optimization</h3>
            <p className="text-gray-600">Improving your site's search engine ranking.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto p-12 text-center">
        <h2 className="text-gray-600 text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-gray-600">Get in touch with us for your next project.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}
