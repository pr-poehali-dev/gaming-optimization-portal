import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Главная", href: "#home", icon: "Home" },
    { name: "GPU Оптимизация", href: "#gpu", icon: "Zap" },
    { name: "CPU Оптимизация", href: "#cpu", icon: "Cpu" },
    { name: "RAM Оптимизация", href: "#ram", icon: "HardDrive" },
    { name: "Настройки Игр", href: "#games", icon: "Settings" },
    { name: "Системные Твики", href: "#system", icon: "Terminal" },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={24} className="text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Project Optimization Games
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2"
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-purple-400"
                >
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gray-900 border-purple-500/20"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-3"
                    >
                      <Icon name={item.icon} size={20} />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
