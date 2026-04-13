import Link from "next/link";

export default function WorkOrderDesk() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-gray-400 hover:text-white">
          ← Back to home
        </Link>

        <header className="mt-6 mb-12">
          <h1 className="text-4xl font-bold mb-4">Work Order Desk</h1>

          <p className="text-lg text-gray-300 mb-6">
            A full stack work order management application built to demonstrate
            strong domain modeling, clean architecture, and predictable state
            transitions.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="border border-gray-700 rounded-full px-3 py-1">
              React
            </span>
            <span className="border border-gray-700 rounded-full px-3 py-1">
              TypeScript
            </span>
            <span className="border border-gray-700 rounded-full px-3 py-1">
              .NET 8
            </span>
            <span className="border border-gray-700 rounded-full px-3 py-1">
              EF Core
            </span>
            <span className="border border-gray-700 rounded-full px-3 py-1">
              SQLite
            </span>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-400 leading-7">
            Work Order Desk is a portfolio project designed to showcase how I
            approach full stack application design beyond basic CRUD. The goal
            was to build a system with meaningful business rules, clear
            ownership of responsibilities, and a backend structure that could
            scale without turning into a tightly coupled codebase.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Problem</h2>
          <p className="text-gray-400 leading-7">
            Internal tools often become difficult to maintain when business
            rules are scattered across controllers, UI code, and persistence
            logic. I wanted to build a work order system where the rules were
            explicit and enforced in the right place. That meant treating work
            orders as domain objects with valid transitions and constraints,
            rather than as loose database records.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Core Business Rules</h2>
          <div className="space-y-4 text-gray-400 leading-7">
            <p>This project centers around a state-driven workflow:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Backlog → Open → InProgress → Complete</li>
              <li>Archive can happen from any state</li>
              <li>Invalid transitions are rejected</li>
              <li>InProgress requires an assignee</li>
              <li>CreatedAt is set on creation</li>
              <li>UpdatedAt changes whenever the work order is modified</li>
              <li>CompletedAt and ArchivedAt are set when appropriate</li>
            </ul>

            <p>
              These rules helped make the project feel closer to a real business
              application and gave me a strong reason to separate domain logic
              from transport and persistence concerns.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
          <div className="space-y-4 text-gray-400 leading-7">
            <p>
              I split the backend into four projects to keep responsibilities
              clear:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Domain</strong>: entities, enums,
                and business rules
              </li>
              <li>
                <strong className="text-white">Application</strong>: commands,
                handlers, and use-case orchestration
              </li>
              <li>
                <strong className="text-white">Infrastructure</strong>: EF Core,
                repositories, and database concerns
              </li>
              <li>
                <strong className="text-white">API</strong>: HTTP endpoints and
                application wiring
              </li>
            </ul>

            <p>
              On the frontend, I used React and TypeScript to build a simple,
              focused interface for creating and managing work orders. The UI
              stays lightweight while the backend carries the responsibility for
              enforcing rules.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Why I Structured It This Way
          </h2>
          <div className="space-y-4 text-gray-400 leading-7">
            <p>
              I did not want the domain rules to live inside controllers or be
              implicitly enforced by UI behavior. Separating concerns made it
              easier to reason about change and easier to test the system in
              isolation.
            </p>

            <p>
              I used a command and handler pattern in the application layer so
              each backend action had a clear entry point and a single place for
              orchestration. That made state-changing operations more explicit
              and easier to evolve over time.
            </p>

            <p>
              I also intentionally kept the API thin. Its job is to receive the
              request, pass it into the application layer, and return the
              result. The API should not be the place where business rules are
              invented.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Key Technical Decisions
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-400 leading-7">
            <li>
              Used .NET 8 and EF Core for a modern backend with clean data
              access patterns.
            </li>
            <li>
              Used SQLite to keep setup simple while developing the portfolio
              project.
            </li>
            <li>
              Kept repository abstractions between the application layer and
              persistence layer to reduce coupling.
            </li>
            <li>
              Used TypeScript on the frontend for stronger contracts and clearer
              data handling.
            </li>
            <li>
              Added centralized exception handling so API errors could be
              translated into consistent responses.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <div className="space-y-4 text-gray-400 leading-7">
            <p>
              One of the main challenges was making sure the project actually
              demonstrated engineering judgment instead of becoming a standard
              CRUD app. That meant choosing constraints that mattered and then
              designing the system around them.
            </p>

            <p>
              Another challenge was keeping the frontend simple while still
              making the overall project feel polished. I wanted the interface
              to support the backend design rather than distract from it.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What I Would Add Next</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-400 leading-7">
            <li>Authentication and role-based permissions</li>
            <li>Filtering, sorting, and search for larger datasets</li>
            <li>Audit history for status changes</li>
            <li>
              Automated tests around domain rules and application handlers
            </li>
            <li>
              Deployment to a cloud environment with a production database
            </li>
          </ul>
        </section>

        <section className="border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Project Links</h2>

          <div className="flex flex-wrap gap-6 text-gray-300">
            <a
              href="https://github.com/Pherpher089/work-order-desk-web"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub Repo Frontend
            </a>
            <a
              href="https://github.com/Pherpher089/work-order-desk-api"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub Repo Backend
            </a>

            {/*when we go live */}
            {/* <a
              href="http://localhost:3000"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Live Demo
            </a> */}
          </div>
        </section>
      </div>
    </main>
  );
}
