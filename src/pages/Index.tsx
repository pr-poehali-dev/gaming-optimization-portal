import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OptimizationCard from "@/components/OptimizationCard";
import Icon from "@/components/ui/icon";

const Index = () => {
  const optimizations = [
    {
      title: "GPU Максимум",
      description:
        "Разблокируйте полный потенциал вашей видеокарты с профессиональными настройками драйверов и разгоном.",
      icon: "Zap",
      difficulty: "Средне" as const,
      category: "Графическая оптимизация",
      features: [
        "Оптимизация драйверов NVIDIA/AMD",
        "Безопасный разгон GPU",
        "Настройка энергопотребления",
      ],
    },
    {
      title: "CPU Турбо",
      description:
        "Максимизируйте производительность процессора через точную настройку частот и энергосбережения.",
      icon: "Cpu",
      difficulty: "Сложно" as const,
      category: "Процессорная оптимизация",
      features: [
        "Разгон CPU и памяти",
        "Оптимизация планировщика",
        "Температурный контроль",
      ],
    },
    {
      title: "RAM Ускоритель",
      description:
        "Оптимизируйте оперативную память для минимальных задержек и максимальной пропускной способности.",
      icon: "HardDrive",
      difficulty: "Легко" as const,
      category: "Оптимизация памяти",
      features: [
        "Очистка RAM в реальном времени",
        "Настройка файла подкачки",
        "Приоритизация игровых процессов",
      ],
    },
    {
      title: "Игровые Настройки",
      description:
        "Персональные профили настроек для популярных игр с балансом качества и производительности.",
      icon: "Settings",
      difficulty: "Легко" as const,
      category: "Игровые профили",
      features: [
        "Готовые профили для 50+ игр",
        "Автоматическое определение железа",
        "Оптимизация под ваш монитор",
      ],
    },
    {
      title: "Системные Твики",
      description:
        "Глубокие настройки Windows для игр: отключение ненужных служб и оптимизация системы.",
      icon: "Terminal",
      difficulty: "Средне" as const,
      category: "Системная оптимизация",
      features: [
        "Отключение фоновых служб",
        "Оптимизация реестра Windows",
        "Настройка игрового режима",
      ],
    },
    {
      title: "Сетевая Оптимизация",
      description:
        "Минимизируйте пинг и устраните лаги в онлайн-играх с помощью сетевых настроек.",
      icon: "Wifi",
      difficulty: "Легко" as const,
      category: "Сетевые настройки",
      features: [
        "Оптимизация TCP/IP стека",
        "Приоритизация игрового трафика",
        "Настройка DNS серверов",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />

      {/* Optimizations Section */}
      <section id="optimizations" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Категории Оптимизации
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Выберите нужную категорию оптимизации для максимальной
              производительности в играх
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizations.map((optimization, index) => (
              <OptimizationCard
                key={index}
                {...optimization}
                onClick={() => {
                  // TODO: Navigate to specific optimization page
                  console.log(`Clicked on ${optimization.title}`);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-purple-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Project Optimization Games
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Максимальная производительность для ваших игр
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
