import StatCard from "../components/StatCards";

function Dashboard() {
  return (
    <div className="ml-72 min-h-screen bg-[#fffaf4] p-8">
      <div>
        <h1 className="text-3xl font-bold text-[#4a2c20]">
          Welcome back, Admin 👋
        </h1>

        <p className="mt-2 text-[#9a8477]">
          Here's what's happening with your coffee shop today.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Orders"
          value="248"
        />

        <StatCard
          title="Total Products"
          value="36"
        />

        <StatCard
          title="Customers"
          value="184"
        />

        <StatCard
          title="Revenue"
          value="$4,280"
        />
      </div>
    </div>
  );
}

export default Dashboard;