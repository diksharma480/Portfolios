// File: app/page.tsx
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="font-sans bg-gradient-to-br from-purple-50 via-white to-emerald-50 text-gray-900 min-h-screen">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] to-[#ef4444]">
            Diksha Sharma
          </h1>

          <ul className="hidden md:flex space-x-8 text-lg">
  <li>
    <a
      href="#home"
      className="text-gray-900 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ec4899] hover:to-[#ef4444]"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#about"
      className="text-gray-900 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ec4899] hover:to-[#ef4444]"
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#projects"
      className="text-gray-900 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ec4899] hover:to-[#ef4444]"
    >
      Projects
    </a>
  </li>

  <li>
    <a
      href="#experience"
      className="text-gray-900 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ec4899] hover:to-[#ef4444]"
    >
      Experience
    </a>
  </li>
</ul>


          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Diksharma01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-2 rounded-lg border hover:bg-emerald-50"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/diksha-sharma-85b372223"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-[#ec4899] to-[#ef4444] text-white "
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-[#ec4899] to-[#ef4444] text-white rounded-xl "
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-16 text-center md:text-left px-6 pt-32"
      >
        {/* Photo With Smooth Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white shadow-2xl rounded-3xl p-6"
        >
          {/* replace with your image at /public/assets/myPhoto.jpeg */}
          <img
            src="/assets/myPhoto.jpeg" 
            alt="Diksha Sharma"
            className="w-72 rounded-2xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold leading-snug">
            Hi, I'm <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] to-[#ef4444]">Diksha Sharma</span>
            <br />
            Frontend Developer — Ionic • Angular • Next.js
          </h1>

          <p className="max-w-xl text-lg opacity-80 mt-4">
            I design modern, high-performance, user-friendly web & mobile
            applications using Angular, Ionic, React & Next.js. I build
            cross-platform apps with native features using Capacitor and
            optimize performance with lazy loading, caching, and modular
            architectures.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-[#ec4899] to-[#ef4444] text-white rounded-xl shadow "
            >
              My Projects
            </a>
            <a
               href="/assets/DikshaSharmaCV..pdf"
                download="DikshaSharmaCV..pdf"
              className="px-6 py-3 bg-white border rounded-xl shadow hover:bg-gray-100"
            >
              Download CV d
            </a>
            <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=diksharma480@gmail.com&su=Hello%20Diksha&body=Hi%20Diksha,"
               target="_blank"
               rel="noopener noreferrer"

              className="px-6 py-3 bg-emerald-50 border rounded-xl shadow hover:bg-emerald-100"
            >
              Email Me d
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <strong>Phone:</strong> +91 7828909283 • <strong>Email:</strong>{" "}
            diksharma480@gmail.com
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto leading-relaxed text-center opacity-90"
        >
          Experienced <strong>UI Developer</strong> with 2+ years of experience in building high-quality,
          scalable frontends using modern frameworks.  
          I specialize in:
          <br /><br />

          <span className="font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] to-[#ef4444]">
            • Angular • Ionic • Capacitor • React.js • Next.js  
            • Tailwind CSS • TypeScript • RxJS • Signals  
            • Firebase • REST APIs • Stripe Payment Integration  
            • PrimeNG • Angular Material • Git • Agile/Scrum  
            • Performance Optimization • Reusable Component Design  
            • WCAG Accessibility • UI/UX Collaboration
          </span>

          <br /><br />
          I also work as a <strong>Project Manager (Freelance)</strong> and <strong>QA Tester</strong>,
          handling sprint planning, test cases, bug tracking, automation strategy and product delivery.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Core Skills</h4>
            <ul className="text-sm opacity-90 space-y-1">
              <li>Angular • Ionic • Capacitor</li>
              <li>React.js • Next.js • Tailwind CSS</li>
              <li>TypeScript • RxJS • Signals</li>
              <li>Firebase • REST APIs • Stripe</li>
              <li>Reusable Components • Performance</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Tools & Tech</h4>
            <ul className="text-sm opacity-90 space-y-1">
              <li>PrimeNG • Angular Material</li>
              <li>Git • GitHub • VS Code</li>
              <li>Postman • Chrome DevTools</li>
              <li>Agile / Scrum • Jira Basics</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Other Roles</h4>
            <ul className="text-sm opacity-90 space-y-1">
              <li>Project Management (Freelance)</li>
              <li>QA Manual Testing</li>
              <li>Test Case Writing & Bug Reporting</li>
              <li>Cross-team Collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="py-24 bg-white/60">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {/* Xzit Event App */}
          <motion.article
            whileHover={{ translateY: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                alt="Xzit Event App"
                className="w-full md:w-1/3 rounded-xl object-cover"
              />
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold">Xzit Event App</h3>
                <p className="opacity-80 mt-2">
                  Hybrid event booking platform built with <strong>Ionic 6</strong>,{" "}
                  <strong>Angular</strong> and <strong>Capacitor</strong>. Focused
                  on user engagement with social features and native integrations.
                </p>

                <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
                  <li>
                    Integrated Stripe payments, Camera & Location plugins via
                    Capacitor for native-like experience.
                  </li>
                  <li>
                    Social features: short video reels, likes, comments and
                    real-time notifications for better retention.
                  </li>
                  <li>
                    Performance improvements: lazy loading, caching & optimized
                    media — improved load times by ~30%.
                  </li>
                  <li>
                    Reusable component library built with Angular Signals and RxJS.
                  </li>
                </ul>

                <div className="mt-4 flex gap-3">
                  <a
                    className="px-4 py-2 bg-gradient-to-r from-[#ec4899] to-[#ef4444] text-white rounded-lg"
                    href="#"
                  >
                    Live (Play Store / Test)
                  </a>
                  <a
                    className="px-4 py-2 border rounded-lg"
                    href="#"
                    title="More details"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Real Estate Platform */}
          <motion.article
            whileHover={{ translateY: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Real Estate Platform"
                className="w-full md:w-1/3 rounded-xl object-cover"
              />
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold">Real Estate Platform</h3>
                <p className="opacity-80 mt-2">
                  Scalable listings & booking system built with <strong>Ionic + Angular</strong>.
                  Responsive designs, dashboards, and real-time property updates.
                </p>

                <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
                  <li>Bookings, payments and admin dashboards for property managers.</li>
                  <li>Real-time status updates and filters via REST APIs.</li>
                  <li>Reuseable directives, pipes & modules for clean architecture.</li>
                  <li>Reduced redundant API calls by ~25% using RxJS caching patterns.</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Organic Mantra */}
          <motion.article
            whileHover={{ translateY: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg"
                alt="Organic Mantra"
                className="w-full md:w-1/3 rounded-xl object-cover"
              />
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold">Organic Mantra — (Angular / Firebase)</h3>
                <p className="opacity-80 mt-2">
                  Full-featured e-commerce app & admin panel for organic grocery shopping.
                </p>

                <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
                  <li>
                    Website & app: <a href="https://organicsmantra.in/" target="_blank" rel="noreferrer" className="bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] to-[#ef4444]
             underline underline-offset-2 decoration-[#ec4899]">organicsmantra.in</a>
                  </li>
                  <li>Real-time inventory sync using Firebase Realtime/Firestore.</li>
                  <li>Admin dashboards with role-based auth and order management.</li>
                  <li>Performance: lazy loading, modular routing & route guards.</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* SBI Global Website (Angular) */}
          <motion.article
            whileHover={{ translateY: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://images.pexels.com/photos/3182778/pexels-photo-3182778.jpeg"
                alt="SBI Global Website"
                className="w-full md:w-1/3 rounded-xl object-cover"
              />
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold">SBI Global Website (Angular)</h3>
                <p className="opacity-80 mt-2">
                  Banking & financial platform work — front-end development,
                  content integration and responsive UI.
                </p>
                <p className="mt-2 text-sm">
                  Production link:{" "}
                  <a
                    href="https://www.sbifactors.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] to-[#ef4444]
             underline underline-offset-2 decoration-[#ec4899]"
                  >
                    sbifactors.in
                  </a>
                </p>
              </div>
            </div>
          </motion.article>

          {/* AP4 Training / UAE Driving (React / Next.js) */}
          <motion.article
  whileHover={{ translateY: -6 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-white p-6 rounded-2xl shadow-lg"
>
  <div className="flex flex-col md:flex-row gap-6">
    <img
      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
      alt="AP4 Training Platform"
      className="w-full md:w-1/3 rounded-xl object-cover"
    />

    <div className="md:flex-1">
      <h3 className="text-2xl font-bold">AP4 Training Platform (React / Next.js)</h3>
      <p className="opacity-80 mt-2">
        A complete online learning platform (LMS) for gas turbine & technical courses.
      </p>

      <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
        <li>Developed LMS modules: analytics, progress tracking & course management.</li>
        <li>Built reusable UI components with React / Next.js and responsive layouts.</li>
        <li>Integrated quizzes, video modules & instructor dashboards.</li>
      </ul>
    </div>
  </div>
</motion.article>
<motion.article
  whileHover={{ translateY: -6 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="bg-white p-6 rounded-2xl shadow-lg"
>
  <div className="flex flex-col md:flex-row gap-6">
    <img
      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
      alt="UAE Driving"
      className="w-full md:w-1/3 rounded-xl object-cover"
    />

    <div className="md:flex-1">
      <h3 className="text-2xl font-bold">UAE Driving (Car / Van / Bus Rental Platform)</h3>
      <p className="opacity-80 mt-2">
        A public-facing rental platform for cars, vans, and buses across the UAE.
      </p>

      <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
        <li>Built booking flow, pricing pages, search & filtering for rental vehicles.</li>
        <li>Designed responsive UI with smooth transitions & modern layouts.</li>
        <li>
          Live Project:{" "}
          <a
            href="https://www.uaedriving.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] to-[#ef4444]
                       underline underline-offset-2 decoration-[#ec4899]"
          >
            uaedriving.com
          </a>
        </li>
      </ul>
    </div>
  </div>
</motion.article>


          {/* Other Projects (compact list) */}
          <motion.div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold">Other Projects</h3>
            <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
              <li>Bonnect Admin Panel — subscription & user management (Angular)</li>
              <li>Mawaeed App — government appointment booking (Ionic / Firebase)</li>
              <li>Tennis Game App — fun interactive web game</li>
              <li>Diamond Stock App — financial dashboard / POC</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="space-y-6">

  {/* DGmateck Corp */}
  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <h3 className="text-2xl font-bold  text-black">
      DGmateck Corp — Software Developer (Ionic / Angular)
    </h3>
    <p className="opacity-80 mt-2">Sep 2025 — Present</p>

    <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-2">
      <li>Developed the Xzit App (hybrid event booking) using Ionic 6, Angular & Capacitor.</li>
      <li>Integrated Stripe payments, Camera, GeoLocation & Native plugins for seamless UX.</li>
      <li>Added reels, likes, and real-time notifications for higher user engagement.</li>
      <li>Improved performance by 30% using lazy loading, caching & optimized assets.</li>
      <li>Built reusable UI components using Angular Signals & RxJS for clean modular architecture.</li>
    </ul>
  </div>

  {/* AB Decode7 Pvt Ltd */}
  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <h3 className="text-2xl font-bold  text-black">
      AB Decode7 Pvt. Ltd — Frontend Developer
    </h3>
    <p className="opacity-80 mt-2">Aug 2025</p>

    <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-2">
      <li>Developed a scalable Real Estate Platform for listings, bookings & payments using Ionic Angular.</li>
      <li>Created dashboards with analytics, filters & real-time property status using REST APIs.</li>
      <li>Reduced redundant API calls by 25% using RxJS caching & data-flow optimization.</li>
      <li>Implemented reusable directives, pipes & modules for better maintainability.</li>
      <li>Built cross-platform UIs using Tailwind CSS & collaborated with backend team.</li>
    </ul>
  </div>

  {/* RPA Technologies */}
  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <h3 className="text-2xl font-bold  text-black">
      RPA Technologies — Angular / Ionic Developer
    </h3>
    <p className="opacity-80 mt-2">Mar 2024</p>

    <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-2">
      <li>Developed Organic Mantra E-Commerce App using Angular, Firebase & PrimeNG.</li>
      <li>Built admin dashboards for product, order & user management with role-based auth.</li>
      <li>Integrated real-time Firebase updates for instant inventory sync & live data tracking.</li>
      <li>Optimized performance via lazy loading, modular architecture & route guards.</li>
      <li>Designed UI using Tailwind + Angular Material ensuring full WCAG accessibility.</li>
    </ul>
  </div>

  {/* ClickGoWeb */}
  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <h3 className="text-2xl font-bold  text-black">
      ClickGoWeb — UI Developer
    </h3>
    <p className="opacity-80 mt-2">Jan 2024 — Feb 2023</p>

    <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-2">
      <li>Developed Mawaeed App (Government Project) for appointment booking (web + mobile).</li>
      <li>Integrated Firebase Cloud Messaging, GeoLocation & Calendar APIs.</li>
      <li>Built Bonnect Admin Panel for subscriptions & real-time payment analytics.</li>
      <li>Developed Tennis Game App for entertainment.</li>
      <li>Designed and delivered responsive E-commerce websites.</li>
    </ul>
  </div>

</div>

      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 text-center bg-gradient-to-r from-emerald-50 to-teal-50">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="opacity-70 text-lg">
          📞 +91 7828909283 • 📧{" "}
          <a
  href="mailto:diksharma480@gmail.com"
  className="bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] to-[#ef4444]
             underline underline-offset-2 decoration-[#ec4899]"
>
  diksharma480@gmail.com
</a>



        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/Diksharma01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-white border rounded-lg"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/diksha-sharma-85b372223"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-gradient-to-r from-[#ec4899] to-[#ef4444] text-white rounded-lg"
          >
            LinkedIn
          </a>
          <a
          href="/assets/DikshaSharmaCV..pdf"
          download="DikshaSharmaCV..pdf"
          className="px-5 py-3 bg-white border rounded-lg"
        >
          Download CV
        </a>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Diksha Sharma — Built with Ionic, Angular, React & Next.js
      </footer>
    </main>
  );
}
