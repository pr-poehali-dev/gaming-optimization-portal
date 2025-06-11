import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
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

  const optimizations = [
    {
      title: "GPU Максимум",
      description: "Разблокируйте полный потенциал видеокарты",
      icon: "Zap",
      difficulty: "Средне" as const,
      href: "#gpu-max",
    },
    {
      title: "CPU Турбо",
      description: "Максимизируйте производительность процессора",
      icon: "Cpu",
      difficulty: "Сложно" as const,
      href: "#cpu-turbo",
    },
    {
      title: "RAM Ускоритель",
      description: "Оптимизируйте оперативную память",
      icon: "HardDrive",
      difficulty: "Легко" as const,
      href: "#ram-boost",
    },
    {
      title: "Сетевая Оптимизация",
      description: "Минимизируйте пинг в онлайн-играх",
      icon: "Wifi",
      difficulty: "Легко" as const,
      href: "#network-opt",
    },
  ];

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Легко":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Средне":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Сложно":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

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

              {/* Optimization Menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 bg-transparent">
                      <Icon name="Settings2" size={16} />
                      <span>Оптимизации</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                        {optimizations.map((optimization) => (
                          <NavigationMenuLink key={optimization.title} asChild>
                            <a
                              href={optimization.href}
                              className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800/50 hover:text-purple-400 focus:bg-gray-800/50 focus:text-purple-400 border border-gray-700/50 hover:border-purple-500/30"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Icon
                                    name={optimization.icon}
                                    size={20}
                                    className="text-purple-400"
                                  />
                                  <div className="text-sm font-medium leading-none text-gray-200">
                                    {optimization.title}
                                  </div>
                                </div>
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${getDifficultyColor(optimization.difficulty)}`}
                                >
                                  {optimization.difficulty}
                                </Badge>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400 mt-2">
                                {optimization.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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

                  {/* Mobile Optimizations Section */}
                  <div className="border-t border-gray-700/50 pt-4">
                    <div className="flex items-center space-x-2 mb-3 px-4">
                      <Icon
                        name="Settings2"
                        size={20}
                        className="text-purple-400"
                      />
                      <span className="text-gray-200 font-medium">
                        Оптимизации
                      </span>
                    </div>
                    {optimizations.map((optimization) => (
                      <a
                        key={optimization.title}
                        href={optimization.href}
                        onClick={() => setIsOpen(false)}
                        className="block p-4 mx-2 rounded-md border border-gray-700/50 hover:border-purple-500/30 hover:bg-gray-800/50 transition-all duration-200 mb-3"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Icon
                              name={optimization.icon}
                              size={18}
                              className="text-purple-400"
                            />
                            <span className="text-gray-200 font-medium text-sm">
                              {optimization.title}
                            </span>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${getDifficultyColor(optimization.difficulty)}`}
                          >
                            {optimization.difficulty}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {optimization.description}
                        </p>
                      </a>
                    ))}
                  </div>
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
