export default function MainContent() {
  return (
    <main className="flex-grow p-8 mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Welcome to 90_North Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Latest Updates
          </h3>
          <ul className="space-y-2 text-gray-950">
            <li>New feature: AI-powered analytics dashboard</li>
            <li>Improved user interface for mobile devices</li>
            <li>Enhanced security measures implemented</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Quick Stats
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">1,234</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">5,678</p>
              <p className="text-sm text-gray-600">Total Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">91%</p>
              <p className="text-sm text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">24/7</p>
              <p className="text-sm text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
