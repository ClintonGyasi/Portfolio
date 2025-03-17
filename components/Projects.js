export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="mt-4">Here are some of the projects I have worked on.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-800 p-6 rounded-lg">🚀 Power Apps Transport Reimbursement App</div>
            <div className="bg-gray-800 p-6 rounded-lg">🌐 IT Support Ticketing System</div>
          </div>
        </div>
      </section>
    );
  }
  