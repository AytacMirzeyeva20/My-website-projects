import {useState,useEffect} from "react";
interface Order{
id:number;
customer:{
  name:string;
  phone:string;
  email:string;
  address:string;
  message:string;
};
products:{
  id:number;
  title:string;
  price:number;
  quantity:number;

}[];
}
function RecentOrders(){
  const[orders,setOrders]=useState<Order[]>([]);
  useEffect(()=>{
  const savedOrders = JSON.parse(
    localStorage.getItem("orders") || "[]"
  );
  setOrders(savedOrders);
  },[])
    return(
        <>
        <div className="mt-8 mr-16 rounded-2xl border border-[#eadfd4] bg-white p-6 shadow-[0_8px_25px_rgba(74,44,32,0.06)]">
    
    <h2 className="text-xl font-bold text-[#4a2c20]">
      Recent Orders
    </h2>

    <div className="mt-6 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#eadfd4] text-left">
            <th className="pb-4 text-sm font-semibold text-[#9a8477]">
              Order ID
            </th>

            <th className="pb-4 text-sm font-semibold text-[#9a8477]">
              Customer
            </th>

            <th className="pb-4 text-sm font-semibold text-[#9a8477]">
              Product
            </th>

            <th className="pb-4 text-sm font-semibold text-[#9a8477]">
              Quantity
            </th>

            <th className="pb-4 text-sm font-semibold text-[#9a8477]">
              Total
            </th>

            <th className="pb-4 text-sm font-semibold text-[#9a8477]">
              Status
            </th>
          </tr>
        </thead>
       <tbody>
        {orders.map((order)=>(
          <tr className="border-b border-[#f0e7df]">
            <td className="py-4 text-sm font-medium text-[#4a2c20]">
              #{order.id}
            </td>

            <td className="py-4 text-sm text-[#6d574b]">
             <p className="text-sm font-medium text-[#4a2c20]">
    {order.customer.name}
  </p>

  {order.customer.message && (
    <p className="mt-1 max-w-50 truncate text-xs text-[#9a8477]">
      {order.customer.message}
    </p>
  )}
            </td>

            <td className="py-4 text-sm text-[#6d574b]">
              {order.products[0]?.title}
            </td>

            <td className="py-4 text-sm text-[#6d574b]">
               {order.products.reduce(
    (total, product) => total + product.quantity,
    0
  )}
            </td>

            <td className="py-4 text-sm font-semibold text-[#4a2c20]">
              ${order.products.reduce((total,product)=>total+product.price*product.quantity,0).toFixed(2)}
            </td>

            <td className="py-4">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                Completed
              </span>
            </td>
          </tr>
        ))}
       </tbody>
      </table>
    </div>
  </div>
        </>
    )
}
export default RecentOrders;