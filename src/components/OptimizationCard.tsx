import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface OptimizationCardProps {
  title: string;
  description: string;
  icon: string;
  difficulty: "Легко" | "Средне" | "Сложно";
  category: string;
  features: string[];
  onClick?: () => void;
}

const OptimizationCard = ({
  title,
  description,
  icon,
  difficulty,
  category,
  features,
  onClick,
}: OptimizationCardProps) => {
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
    <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 cursor-pointer group">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon name={icon} size={24} className="text-white" />
          </div>
          <Badge className={`${getDifficultyColor(difficulty)} border`}>
            {difficulty}
          </Badge>
        </div>

        <CardTitle className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </CardTitle>

        <CardDescription className="text-gray-400 text-sm">
          {category}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-gray-400"
            >
              <Icon
                name="Check"
                size={16}
                className="text-green-400 mr-2 flex-shrink-0"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={onClick}
          className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
          variant="outline"
        >
          <Icon name="ArrowRight" size={16} className="mr-2" />
          Применить Оптимизацию
        </Button>
      </CardContent>
    </Card>
  );
};

export default OptimizationCard;
