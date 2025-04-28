type Props = {
    title: string
    value: string | number
    color?: string
  }
  
  const DashboardCard = ({ title, value, color = "bg-red-500" }: Props) => {
    return (
      <div className={`p-6 rounded-xl text-white ${color}`}>
        <p className="text-lg font-semibold">{title}</p>
        <h2 className="text-3xl font-bold mt-2">{value}</h2>
      </div>
    )
  }
  
  export default DashboardCard
  