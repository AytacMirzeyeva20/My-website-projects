import type { ReactNode } from "react";
interface StatCardProps {
 title: string;
  value: string;
  icon: ReactNode;
  change: string;
}

function StatCard({ title, value,icon,change }: StatCardProps) {
  return (
    <>
    <div className="rounded-2xl border border-[#eadfd4] bg-white p-6 shadow-[0_8px_25px_rgba(74,44,32,0.06)]">
    
    <div className="flex items-center justify-between">
      
      <div>
        <p className="text-sm font-medium text-[#9a8477]">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#4a2c20]">
          {value}
        </h2>

        <p className="mt-2 text-xs font-medium text-green-600">
          {change} from last month
        </p>
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff8ed] text-2xl text-[#b8860b]">
        {icon}
      </div>

    </div>
  </div>
    </>
     
  );
}

export default StatCard;