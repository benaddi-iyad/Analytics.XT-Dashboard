import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", active: 120, new: 45 },
  { day: "Tue", active: 150, new: 62 },
  { day: "Wed", active: 180, new: 78 },
  { day: "Thu", active: 165, new: 55 },
  { day: "Fri", active: 200, new: 89 },
  { day: "Sat", active: 90, new: 32 },
  { day: "Sun", active: 75, new: 28 },
];

export const ActivityChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="chart-container"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold">User Activity</h3>
        <p className="text-sm text-muted-foreground">Weekly engagement stats</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 32%, 20%)" />
          <XAxis dataKey="day" stroke="hsl(215, 20%, 65%)" fontSize={12} />
          <YAxis stroke="hsl(215, 20%, 65%)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222, 47%, 10%)",
              border: "1px solid hsl(217, 32%, 20%)",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="active" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="new" fill="hsl(270, 60%, 60%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
