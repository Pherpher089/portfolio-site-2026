export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Christopher Tutor
          </h1>

          <p className="text-xl text-gray-200 mb-4">Full Stack Engineer</p>

          <p className="text-lg text-gray-400 max-w-3xl leading-7">
            I build scalable, production-ready web applications using React,
            TypeScript, and .NET/Node, with a focus on clean architecture,
            maintainability, and strong domain modeling.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="space-y-6">
            <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold mb-2">Work Order Desk</h3>

              <p className="text-gray-400 mb-4 leading-7">
                A full stack work order management application built with React,
                TypeScript, .NET 8, and EF Core. Designed to demonstrate clean
                architecture, domain-driven thinking, and strict workflow rules.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/work-order-desk"
                  className="text-blue-400 hover:underline"
                >
                  View Case Study →
                </a>

                <a
                  href="https://github.com/pherpher089/work-order-desk-web"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Game Development */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Game Development</h2>

          <div className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold mb-2">
              Wilds of the Realmwalker
            </h3>

            <p className="text-gray-400 mb-4 leading-7">
              A cooperative survival game currently in development and available
              as a public demo on Steam. Built using Unity and Photon
              networking, with a focus on multiplayer systems, gameplay loops,
              and continuous iteration through player feedback.
            </p>

            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-4">
              <li>Implemented multiplayer systems using Photon PUN</li>
              <li>
                Designed and iterated on core gameplay loops and player
                progression
              </li>
              <li>Shipped a public demo and gathered real player feedback</li>
              <li>Continuously improved performance, UI, and game systems</li>
            </ul>

            <a
              href="https://store.steampowered.com/app/3800480/Wilds_of_the_Realmwalker/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        </section>

        {/* About */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">About</h2>

          <p className="text-gray-400 leading-7 max-w-3xl">
            I am a full stack software engineer with professional experience
            building web applications across frontend and backend systems. My
            background includes React, TypeScript, Node.js, C#, and .NET, with a
            strong focus on maintainability, clear architecture, and practical
            product thinking. I also build independent game projects, which has
            strengthened my ability to ship, iterate, and solve problems across
            disciplines.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>

          <div className="flex flex-wrap gap-6 text-gray-400 mb-2">
            <a
              href="https://github.com/pherpher089"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="mailto:christutor089@gmail.com?subject=Resume%20Request"
              className="hover:text-white transition"
            >
              Request Resume
            </a>

            <a
              href="mailto:christutor089@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>

          <p className="text-xs text-gray-500">
            Or copy: christutor089@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}
