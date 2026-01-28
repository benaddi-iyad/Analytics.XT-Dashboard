import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { HeroBanner } from "@/components/dashboard/HeroBanner";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { UserTable } from "@/components/dashboard/UserTable";
import { Users, DollarSign, TrendingUp, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid-pattern">
      <Sidebar />
      <main className="ml-64 p-6">
        <Header />
        <HeroBanner />
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Total Revenue"
            value="$54,239"
            change="+12.5% from last month"
            changeType="positive"
            icon={DollarSign}
            delay={0.1}
          />
          <StatCard
            title="Active Users"
            value="2,847"
            change="+8.2% from last week"
            changeType="positive"
            icon={Users}
            delay={0.15}
          />
          <StatCard
            title="Conversion Rate"
            value="3.24%"
            change="-0.4% from yesterday"
            changeType="negative"
            icon={TrendingUp}
            delay={0.2}
          />
          <StatCard
            title="Avg. Session"
            value="4m 32s"
            change="No change"
            changeType="neutral"
            icon={Activity}
            delay={0.25}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <RevenueChart />
          <ActivityChart />
        </div>

        {/* User Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <UserTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
