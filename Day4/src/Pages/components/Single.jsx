
const Single = () => {
  return (
    <div>
  <div className="w-screen h-full overflow-y-scroll bg-gray-900 bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8Z3JhcGhpY3MlMjBiYWNrZ3JvdW5kfGVufDB8MHx8fDE3MzUyODE0NTB8MA&ixlib=rb-4.0.3&q=80&w=1080')]">
    <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] mx-auto relative md:px-0 px-4 md:my-10 bg-[#111111] rounded-xl overflow-hidden">
      {/* Nav */}
      <nav className="bg-[#111111] shadow-lg w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="lg:text-xl md:text-lg text-sm font-bold text-gray-700">
                <span className="px-1 bg-green-400 rounded-full animate-[ping_1.9s_linear_infinite]">P</span>
                <span className="px-1 bg-green-400 rounded-full animate-[ping_2s_linear_infinite]">O</span>
                <span className="px-1 bg-green-400 rounded-full animate-[ping_2.1s_linear_infinite]">R</span>
                <span className="px-1 bg-green-400 rounded-full animate-[ping_2.2s_linear_infinite]">T</span>
                <span className="px-1 bg-green-400 rounded-full animate-[ping_2.3s_linear_infinite]">F</span>
                <span className="px-1 bg-green-400 rounded-full animate-[ping_2.4s_linear_infinite]">O</span>
                <span className="px-1 bg-green-400 rounded-full animate-[ping_2.5s_linear_infinite]">L</span>
                <span className="px-1 bg-green-400 rounded-full animate-[ping_2.6s_linear_infinite]">I</span>
                <span className="px-1 bg-green-400 rounded-full animate-[ping_2.7s_linear_infinite]">O</span>
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <a href="#about" className="text-green-400 hover:text-green-400">About</a>
              <a href="#what-i-do" className="text-gray-400 hover:text-green-400">What I Do</a>
              <a href="#testimonials" className="text-gray-400 hover:text-green-400">Testimonials</a>
              <a href="#clients" className="text-gray-400 hover:text-green-400">Clients</a>
              <a href="#fun-facts" className="text-gray-400 hover:text-green-400">Fun Facts</a>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button id="mobile-menu-button" className="text-green-400 hover:text-green-600 focus:outline-none">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="absolute inset-0 bg-[#111111] bg-opacity-50 z-50 hidden">
          <div className="fixed inset-y-0 left-0 bg-[#111111] w-64 p-6 transform -translate-x-full transition-transform">
            <button id="close-menu-button" className="text-green-400 hover:text-green-600 focus:outline-none mb-4">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="space-y-4">
              <a href="#about" className="block text-green-400 hover:text-green-400">About</a>
              <a href="#what-i-do" className="block text-gray-400 hover:text-green-400">What I Do</a>
              <a href="#testimonials" className="block text-gray-400 hover:text-green-400">Testimonials</a>
              <a href="#clients" className="block text-gray-400 hover:text-green-400">Clients</a>
              <a href="#fun-facts" className="block text-gray-400 hover:text-green-400">Fun Facts</a>
            </nav>
          </div>
        </div>
      </nav>
      <div className="w-full h-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full relative flex items-center flex-col lg:flex-row" id="about">
          <img className="lg:w-1/2 " src="https://techakim.com/sam/tg/7268/li/imgs/p-2.png" alt="port image" />
          {/*  */}
          <div className="lg:absolute lg:left-[40%] md:left-[30%] lg:w-[55%] lg:p-12 sm:p-6 p-4 flex flex-col justify-center bg-[#222222]">
            <p className="text-gray-400 text-sm mb-1">FullStack Developer</p>
            <h2 className="text-white md:text-5xl text-2xl font-bold mb-4">Samuel Abera</h2>
            <p className="text-gray-400 text-md mb-6">
              I am a dedicated and innovative FullStack Developer passionate about creating impactful
              digital experiences. With a keen eye for detail and a commitment to excellence, I specialize in designing
              and developing solutions that combine creativity with functionality.
            </p>
            {/* My expertise lies in Vue, Nuxt, Svelt, Laravel and Nestjs and I thrive on transforming complex challenges into user-friendly solutions. */}
            <div>
              <button className="md:px-6 px-4 py-2 text-white font-semibold  outline outline-green-400 rounded-full hover:bg-green-500 transform trasition delay-300">Download CV</button>
            </div>
          </div>
        </section>
        {/* What I DO */}
        <section className="md:pt-20 pt-10 md:px-20 px-2" id="what-i-do">
          {/* Heading */}
          <div className="w-fit">
            <h2 className="text-2xl font-bold text-white pb-2">What I Do</h2>
            <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
              <hr className="border-[3px] border-green-400 w-[20%]" />
            </div>
          </div>
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 mt-8">
            {/* 1 */}
            <div className="flex sm:gap-4 gap-1">
              <span className>
                <ion-icon className="sm:text-5xl text-3xl text-green-400" name="code-slash-outline" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">Web Development</h3>
                <p className="text-gray-400">
                  Crafting responsive and intuitive websites tailored to your unique needs using cutting-edge
                  technologies.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex sm:gap-4 gap-2">
              <span>
                <ion-icon className="sm:text-5xl text-3xl text-green-400" name="browsers-outline" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
                <p className="text-gray-400">Creating visually appealing and user-centric designs that enhance user
                  experiences and engagement.</p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex sm:gap-4 gap-2">
              <span>
                <ion-icon className="sm:text-5xl text-3xl text-green-400" name="archive-outline" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">Custom CMS Solutions</h3>
                <p className="text-gray-400">Building reusable and efficient CMS APIs to simplify website management and
                  scalability.</p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex sm:gap-4 gap-2">
              <span>
                <ion-icon className="sm:text-5xl text-3xl text-green-400" name="phone-portrait-outline" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">Mobile App Dev't</h3>
                <p className="text-gray-400">Designing and developing user-friendly mobile applications for iOS and Android,
                  ensuring seamless performance and user satisfaction.</p>
              </div>
            </div>
            {/* 5 */}
            <div className="flex sm:gap-4 gap-2">
              <span>
                <ion-icon className="sm:text-5xl text-3xl text-green-400" name="bag-check-outline" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">E-commerce Development</h3>
                <p className="text-gray-400">Creating robust platforms to elevate your online business presence.</p>
              </div>
            </div>
            {/* 6 */}
            <div className="flex sm:gap-4 gap-2">
              <span>
                <ion-icon className="sm:text-5xl text-3xl text-green-400" name="swap-horizontal-outline" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">API Integration</h3>
                <p className="text-gray-400">Seamlessly connecting systems to enhance functionality and performance.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="sm:mt-20 mt-10 md:px-20 px-6" id="testimonial">
          {/* Heading */}
          <div className="w-fit sm:mb-20 mb-10">
            <h2 className="text-2xl font-bold text-white pb-2">Testimonials</h2>
            <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
              <hr className="border-[3px] border-green-400 w-[40%]" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
            {/* 1 */}
            <div className="flex flex-col justify-center-center border border-gray-400 md:p-8 p-2 rounded-xl relative">
              <img className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 sm lg:w-[6rem] lg:h-[6rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full outline outline-offset-2 outline-green-400" src="https://images.unsplash.com/photo-1598062547942-17806c4df368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNoJTIwZ2lybHxlbnwwfDB8fHwxNzM1NDE5MTgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="testimonials" />
              <p className="md:pl-8 text-gray-300 sm:text-xl font-semibold text-center font-serif">
                <span className="sm:text-5xl text-xl text-gray-300">❝</span>An exceptional professional! Delivered beyond our
                expectations, ensuring every detail was perfect. Highly recommended!
                <br /><span className="sm:text-5xl text-xl text-gray-300">❞</span>
              </p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-gray-400 sm:text-xl sm:mt-2">Emily Carter</p>
                <p className="text-gray-500">CEO of Innovate Solutions</p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col justify-center-center border border-gray-400 md:p-8 p-2 rounded-xl relative">
              <img className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 sm lg:w-[6rem] lg:h-[6rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full outline outline-offset-2 outline-green-400" src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHx5b3VuZyUyMG1hbnxlbnwwfDB8fHwxNzM1NDEzMTM4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="testimonials" />
              <p className="md:pl-8 text-gray-300 sm:text-xl font-semibold text-center font-serif">
                <span className="sm:text-5xl text-xl text-gray-300">❝</span>
                Their ability to combine creativity and technical expertise is unmatched. The UI/UX design they delivered
                elevated our brand image significantly.
                <br /><span className="sm:text-5xl text-xl text-gray-300">❞</span>
              </p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-gray-400 sm:text-xl sm:mt-2">Ryan Mitchell</p>
                <p className="text-gray-500">Marketing Director at BrightWave Media</p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col justify-center-center border border-gray-400 md:p-8 p-2 rounded-xl relative">
              <img className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 sm lg:w-[6rem] lg:h-[6rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full outline outline-offset-2 outline-green-400" src="https://images.unsplash.com/photo-1598096969068-7f52cac10c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8eW91bmclMjBtYW58ZW58MHwwfHx8MTczNTQxMzEzOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="testimonials" />
              <p className="md:pl-8 text-gray-300 sm:text-xl font-semibold text-center font-serif">
                <span className="sm:text-5xl text-xl text-gray-300">❝</span>
                What stood out was the attention to detail and seamless communication throughout the project. The mobile
                app they developed exceeded our expectations.
                <br /><span className="sm:text-5xl text-xl text-gray-300">❞</span>
              </p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-gray-400 sm:text-xl sm:mt-2">James Patel</p>
                <p className="text-gray-500">Product Manager at TechSphere</p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex flex-col justify-center-center border border-gray-400 md:p-8 p-2 rounded-xl relative">
              <img className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 sm lg:w-[6rem] lg:h-[6rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full outline outline-offset-2 outline-green-400" src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHx0ZWNoJTIwZ2lybHxlbnwwfDB8fHwxNzM1NDE5MTgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="testimonials" />
              <p className="md:pl-8 text-gray-300 sm:text-xl font-semibold text-center font-serif">
                <span className="sm:text-5xl text-xl text-gray-300">❝</span>
                Reliable, efficient, and innovative – their work has transformed our online platform. Our sales have seen
                a massive boost since launching the new website!
                <br /><span className="sm:text-5xl text-xl text-gray-300">❞</span>
              </p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-gray-400 sm:text-xl sm:mt-2">Sarah Nguyen</p>
                <p className="text-gray-500">Founder of Craft&amp;Co</p>
              </div>
            </div>
          </div>
        </section>
        {/* Clientts */}
        <section className="w-full sm:pt-20 pt-10 md:px-20 px-6" id="clients">
          {/* Heading */}
          <div className="w-fit sm:mb-20 mb-10">
            <h2 className="text-2xl font-bold text-white pb-2">Clients</h2>
            <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
              <hr className="border-[3px] border-green-400 w-[60%]" />
            </div>
          </div>
          <div className="w-full flex md:flex-nowrap flex-wrap gap-4 items-center justify-center">
            <img className="lg:w-[15rem] w-[10rem] rounded-lg object-cover" src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxmYWNlYm9vayUyMGxvZ298ZW58MHwwfHx8MTczNTI5MTQzMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="clients" />
            <img className="lg:w-[15rem] w-[10rem] rounded-lg object-cover" src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxmYWNlYm9vayUyMGxvZ298ZW58MHwwfHx8MTczNTI5MTQzMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="clients" />
            <img className="lg:w-[15rem] w-[10rem] rounded-lg object-cover" src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxmYWNlYm9vayUyMGxvZ298ZW58MHwwfHx8MTczNTI5MTQzMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="clients" />
          </div>
        </section>
        {/* Fun Facts */}
        <section className="w-full sm:py-20 py-10 md:px-20 px-6" id="fun-facts">
          {/* Heading */}
          <div className="w-fit sm:mb-20 mb-10">
            <h2 className="text-2xl font-bold text-white pb-2">Fun Facts</h2>
            <div className="rounded-t-full border-[1px] border-gray-500 overflow-hidden">
              <hr className="border-[3px] border-green-400 w-[80%]" />
            </div>
          </div>
          <div className="w-full grid gap-2 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            {/* 1 */}
            <div className="flex flex-col gap-4 items-center justify-center border border-2 border-gray-400 p-6 rounded-lg text-gray-400">
              <span className="text-4xl">😁</span>
              <h3 className="sm:text-xl text-md font-bold text-gray-200">Happy Clients</h3>
              <span className="sm:text-5xl text-3xl font-semibold">400<sup>+</sup></span>
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-4 items-center justify-center border border-2 border-gray-400 p-6 rounded-lg text-gray-400">
              <span className="text-4xl">😬</span>
              <h3 className="sm:text-xl text-md font-bold text-gray-200">Working Hours</h3>
              <span className="sm:text-5xl text-3xl font-semibold">7,845<sup>+</sup></span>
            </div>
            {/* 3 */}
            <div className="flex flex-col gap-4 items-center justify-center border border-2 border-gray-400 p-6 rounded-lg text-gray-400">
              <span className="text-4xl">👋</span>
              <h3 className="sm:text-xl text-md font-bold text-gray-200">Certification</h3>
              <span className="sm:text-5xl text-3xl font-semibold">77<sup>+</sup></span>
            </div>
            {/* 4 */}
            <div className="flex flex-col gap-4 items-center justify-center border border-2 border-gray-400 p-6 rounded-lg text-gray-400">
              <span className="text-4xl">😲</span>
              <h3 className="sm:text-xl text-md  font-bold text-gray-200">Portfolios</h3>
              <span className="sm:text-5xl text-3xl font-semibold">65<sup>+</sup></span>
            </div>
          </div>
        </section>
        <footer className="w-full mt-10 border-t-2 pt-4 pb-8 border-gray-500">
          <div className="flex sm:flex-row flex-col sm:justify-between items-center md:px-20 px-4">
            <div className="flex gap-4 items-center sm:text-xl text-sm text-gray-500">
              <a href className="hover:text-green-400">facebook</a>
              <a href className="hover:text-green-400">instagram</a>
              <a href className="hover:text-green-400">Linkedin</a>
            </div>
            <div className="text-lg text-gray-400">©2024 Samuel Abera</div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</div>

  )
}

export default Single
