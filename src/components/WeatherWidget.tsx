import { Card } from "@/components/ui/card";
import { Cloud, Droplets, Wind } from "lucide-react";

const WeatherWidget = () => {
  // Mock weather data - In production, this would come from IMD/OpenWeather API
  const weather = {
    temp: 28,
    humidity: 65,
    wind: 12,
    condition: "Partly Cloudy"
  };

  return (
    <Card className="px-4 py-2 bg-card/80 backdrop-blur border-border/50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Cloud className="w-5 h-5 text-info" />
          <span className="text-lg font-semibold text-foreground">{weather.temp}°C</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Droplets className="w-4 h-4" />
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-1">
            <Wind className="w-4 h-4" />
            <span>{weather.wind}km/h</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeatherWidget;
