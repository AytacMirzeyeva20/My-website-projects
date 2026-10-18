import StatCard from "../components/StatCards";
import { MdShoppingCart, MdInventory2,MdPeople,MdAttachMoney,} from "react-icons/md";
import RecentOrders from "../components/RecentOrders"
function Dashboard() {
  return (
    <>
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
        <StatCard title="Total Orders" value="248" icon={<MdShoppingCart />} change="+12.5%"/>
        <StatCard title="Total Products" value="36"  icon={<MdInventory2 />} change="+8.2%"/>
        <StatCard title="Customers" value="184"  icon={<MdPeople />} change="+15.4%"/>
        <StatCard title="Revenue" value="$4,280"   icon={<MdAttachMoney />} change="+10.8%" />
      </div>
      <RecentOrders/>
    </div>
   
    </>
  );
}

export default Dashboard;