interface StatCardProps {
  title: string;
  value: string;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[#eadfd4] bg-white p-6 shadow-[0_8px_25px_rgba(74,44,32,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(74,44,32,0.10)]">
      
      <p className="text-sm font-medium text-[#9a8477]">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-[#4a2c20]">
        {value}
      </h2>

      <p className="mt-2 text-xs font-medium text-[#b8860b]">
        +12.5% from last month
      </p>

    </div>
  );
}

export default StatCard;