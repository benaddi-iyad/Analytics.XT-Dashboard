import { motion } from "framer-motion";
import { Bell, Search, Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-4 px-6 glass-card rounded-xl mb-6"
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search analytics..."
            className="pl-10 w-64 bg-muted/50 border-border/50 focus:border-primary/50"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2 border-primary/30 hover:bg-primary/10">
          <Download className="h-4 w-4" />
          Export
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full text-[10px] flex items-center justify-center">
            3
          </span>
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Avatar className="h-9 w-9 border-2 border-primary/30">
          <AvatarFallback className="bg-primary/20 text-primary">JD</AvatarFallback>
        </Avatar>
      </div>
    </motion.header>
  );
};
