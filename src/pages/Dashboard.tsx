import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Sprout, 
  Droplets, 
  Bug, 
  TrendingUp, 
  FileText, 
  MessageCircle,
  Leaf,
  CloudRain,
  ThermometerSun,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CropRecommendation from "@/components/CropRecommendation";
import FertilizerRecommendation from "@/components/FertilizerRecommendation";
import DiseaseDetection from "@/components/DiseaseDetection";
import MarketPrice from "@/components/MarketPrice";
import SchemeRecommender from "@/components/SchemeRecommender";
import Chatbot from "@/components/Chatbot";
import WeatherWidget from "@/components/WeatherWidget";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Leaf className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">AI-Kisan Dashboard</span>
              </div>
            </div>
            <WeatherWidget />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Sprout, label: "Active Crops", value: "12", color: "text-success", bg: "bg-success/10" },
            { icon: CloudRain, label: "Rainfall", value: "850mm", color: "text-info", bg: "bg-info/10" },
            { icon: ThermometerSun, label: "Temperature", value: "28°C", color: "text-warning", bg: "bg-warning/10" },
            { icon: TrendingUp, label: "Market Index", value: "+5.2%", color: "text-primary", bg: "bg-primary/10" }
          ].map((stat, idx) => (
            <Card key={idx} className="p-4 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="crop" className="space-y-6">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full bg-card border border-border">
            <TabsTrigger value="crop" className="flex items-center gap-2">
              <Sprout className="w-4 h-4" />
              <span className="hidden sm:inline">Crop</span>
            </TabsTrigger>
            <TabsTrigger value="fertilizer" className="flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              <span className="hidden sm:inline">Fertilizer</span>
            </TabsTrigger>
            <TabsTrigger value="disease" className="flex items-center gap-2">
              <Bug className="w-4 h-4" />
              <span className="hidden sm:inline">Disease</span>
            </TabsTrigger>
            <TabsTrigger value="market" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Market</span>
            </TabsTrigger>
            <TabsTrigger value="schemes" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Schemes</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Chat</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="crop" className="space-y-4">
            <CropRecommendation />
          </TabsContent>

          <TabsContent value="fertilizer" className="space-y-4">
            <FertilizerRecommendation />
          </TabsContent>

          <TabsContent value="disease" className="space-y-4">
            <DiseaseDetection />
          </TabsContent>

          <TabsContent value="market" className="space-y-4">
            <MarketPrice />
          </TabsContent>

          <TabsContent value="schemes" className="space-y-4">
            <SchemeRecommender />
          </TabsContent>

          <TabsContent value="chat" className="space-y-4">
            <Chatbot />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
