import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  FileText, 
  Shield,
  TrendingUp,
  Database
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Users, label: "Users", active: false },
  { icon: TrendingUp, label: "Performance", active: false },
  { icon: Database, label: "Data", active: false },
  { icon: FileText, label: "Reports", active: false },
  { icon: Shield, label: "Security", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export const Sidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 h-screen fixed left-0 top-0 glass-card border-r border-border/50 p-4 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-effect">
          <BarChart3 className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-bold text-lg gradient-text">Analytics</h1>
          <p className="text-xs text-muted-foreground">Dashboard v2.0</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * index }}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
              item.active
                ? "bg-primary/10 text-primary glow-effect"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </motion.button>
        ))}
      </nav>

      <div className="mt-auto p-4 glass-card rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-8 w-8 rounded-lg bg-secondary/20 flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-secondary" />
          </div>
          <div>
            <p className="text-sm font-medium">Pro Plan</p>
            <p className="text-xs text-muted-foreground">Unlimited access</p>
          </div>
        </div>
        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>
        <p className="text-xs text-muted-foreground mt-2">75% storage used</p>
      </div>
    </motion.aside>
  );
};
