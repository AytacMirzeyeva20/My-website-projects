import { useEffect, useState } from "react";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,Bar,BarChart,
Pie,PieChart,Cell,Legend} from "recharts";
import type { Product } from "../../context/CartProvider";
type Order={
id: number;
createdAt?: string;
category:string;
  customer: {
    name: string;
  };
  products: {
    id: number;
    title: string;
    price: number;
    quantity?: number;
  }[];
};

const Colors=["#b8860b", "#8b5e3c", "#d4a373"]


function Analytics() {
const[orders,setOrders]=useState<Order[]>([]);
const [products, setProducts] = useState<Product[]>([]);
useEffect(() => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data: Product[]) => setProducts(data))
    .catch((error) => console.error("Products yüklənmədi:", error));
}, []);
useEffect(() => {
  const savedOrders = JSON.parse(
    localStorage.getItem("orders") || "[]"
  ) as Order[];

  setOrders(savedOrders);
}, []);
const ordersData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
  (day, index) => {
    const dayIndex = [1, 2, 3, 4, 5, 6, 0][index];

    const count = orders.filter((order) => {
      if (!order.createdAt) return false;

      const orderDate = new Date(order.createdAt);
      return orderDate.getDay() === dayIndex;
    }).length;

    return { day, orders: count };
  }
);

const revenueData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
  (day, index) => {
    const dayIndex = [1, 2, 3, 4, 5, 6, 0][index];

    const revenue = orders.reduce((total, order) => {
      if (!order.createdAt) return total;

      const orderDate = new Date(order.createdAt);

      if (orderDate.getDay() !== dayIndex) {
        return total;
      }

      const orderTotal = order.products.reduce(
        (sum, product) =>
          sum + product.price * (product.quantity ?? 1),
        0
      );

      return total + orderTotal;
    }, 0);

    return {
      day,
      revenue: Number(revenue.toFixed(2)),
    };
  }
);

const categoryData = Object.entries(
  products.reduce<Record<string, number>>((acc, product) => {
    const category = product.category || "Other";
    acc[category] = (acc[category] || 0) + 1;

    return acc;
  }, {})
).map(([name, value]) => ({
  name,
  value,
}));

console.log("Orders from localStorage:", orders);
console.log("Orders chart data:", ordersData);
  return (
    <>
    <div className="ml-10 mr-5  min-h-screen bg-[#fffaf4] p-5 dark:bg-gray-950 ">
      <div className="mb-8">
        <h1 className="mt-2 text-3xl ml-4 font-bold text-[#4a2c20] dark:text-white">
          Analytics
        </h1>
        <p className="mt-2 text-sm ml-4 text-[#9a8477] dark:text-white">
          Monitor your coffee shop performance
        </p>
      </div>

      <div className="rounded-3xl border border-[#eadfd4] bg-white p-6 shadow-[0_8px_25px_rgba(74,44,32,0.06)] dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#4a2c20]">
            Revenue Overview
          </h2>

          <p className="mt-1 text-sm text-[#9a8477]">
            Weekly revenue performance
          </p>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#b8860b" strokeWidth={3}/>
          </LineChart>
        </ResponsiveContainer>
      </div>



    <div className="mt-6 rounded-3xl border border-[#eadfd4] bg-white p-6 shadow-[0_8px_25px_rgba(74,44,32,0.06)] dark:border-gray-800 dark:bg-gray-900 ">
  <div className="mb-6">
    <h2 className="text-xl font-bold text-[#4a2c20]">
      Orders Overview
    </h2>

    <p className="mt-1 text-sm text-[#9a8477]">
      Weekly order performance
    </p>
  </div>


<ResponsiveContainer width="100%" height={350}>
  <BarChart
    data={ordersData}
    margin={{ top: 20, right: 20, left: 10, bottom: 10 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="day" />
    <YAxis />
    <Tooltip />
    <Bar
      dataKey="orders"
      name="Orders"
      fill="#4a2c20"
      radius={[6, 6, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>

</div>
<div className="mt-6 mb-6 rounded-3xl border border-[#eadfd4] bg-white p-4 shadow-[0_8px_25px_rgba(74,44,32,0.06)] dark:border-gray-800 dark:bg-gray-900 ">

  <h2 className="text-xl font-bold text-[#4a2c20]">
    Product Categories
  </h2>

  <p className="mt-1 text-sm text-[#9a8477]">
    Products by category
  </p>

  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={categoryData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        label
      >
        {categoryData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>
</div>
</>
  );
}

export default Analytics;