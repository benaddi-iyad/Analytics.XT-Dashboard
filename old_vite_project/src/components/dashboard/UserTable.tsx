import { motion } from "framer-motion";
import { MoreHorizontal, Shield, User, Crown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const users = [
  { id: 1, name: "Alex Thompson", email: "alex@example.com", role: "Admin", status: "Active", avatar: "AT" },
  { id: 2, name: "Sarah Chen", email: "sarah@example.com", role: "Editor", status: "Active", avatar: "SC" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Viewer", status: "Pending", avatar: "MJ" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Editor", status: "Active", avatar: "ED" },
  { id: 5, name: "James Wilson", email: "james@example.com", role: "Viewer", status: "Inactive", avatar: "JW" },
];

const roleIcons = {
  Admin: Crown,
  Editor: Shield,
  Viewer: User,
};

const statusColors = {
  Active: "bg-success/20 text-success border-success/30",
  Pending: "bg-warning/20 text-warning border-warning/30",
  Inactive: "bg-muted text-muted-foreground border-muted",
};

export const UserTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="chart-container col-span-2"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">User Management</h3>
          <p className="text-sm text-muted-foreground">Role-based access control</p>
        </div>
        <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
          View All
        </Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">User</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Role</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const RoleIcon = roleIcons[user.role as keyof typeof roleIcons];
              return (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 border border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary text-sm">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <RoleIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{user.role}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      variant="outline"
                      className={statusColors[user.status as keyof typeof statusColors]}
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
