import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Sprout, 
  Droplets, 
  Bug, 
  TrendingUp, 
  FileText, 
  MessageCircle,
  Leaf,
  Sun,
  CloudRain,
  Wheat
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">AI-Kisan</span>
          </div>
          <Link to="/dashboard">
            <Button variant="outline" size="lg">
              Open Dashboard
            </Button>
          </Link>
        </nav>

        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Sun className="w-4 h-4" />
              AI-Powered Agriculture Intelligence
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            Smart Farming for
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Modern India
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Empowering Indian farmers with AI-driven insights for crop recommendations, 
            disease detection, market predictions, and government scheme access.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            {[
              { icon: Wheat, label: "Crops", value: "50+" },
              { icon: Bug, label: "Diseases", value: "100+" },
              { icon: FileText, label: "Schemes", value: "30+" },
              { icon: TrendingUp, label: "Markets", value: "500+" }
            ].map((stat, idx) => (
              <Card key={idx} className="p-4 text-center bg-card/80 backdrop-blur border-border/50">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete ML-Powered Agriculture Suite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six intelligent modules working together to maximize your farm's potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Sprout,
              title: "Crop Recommendation",
              description: "AI suggests optimal crops based on soil pH, NPK, rainfall, and temperature data",
              color: "text-success",
              bgColor: "bg-success/10"
            },
            {
              icon: Droplets,
              title: "Fertilizer Advisor",
              description: "ML-based fertilizer type and quantity recommendations for maximum yield",
              color: "text-info",
              bgColor: "bg-info/10"
            },
            {
              icon: Bug,
              title: "Disease Detection",
              description: "CNN-powered leaf image analysis detecting 100+ crop diseases instantly",
              color: "text-destructive",
              bgColor: "bg-destructive/10"
            },
            {
              icon: TrendingUp,
              title: "Market Price Prediction",
              description: "LSTM time-series forecasting of crop prices using eNAM mandi data",
              color: "text-warning",
              bgColor: "bg-warning/10"
            },
            {
              icon: FileText,
              title: "Scheme Recommender",
              description: "Hybrid ML matching your profile to PM-KISAN, PMFBY, PMKSY and 30+ schemes",
              color: "text-accent",
              bgColor: "bg-accent/10"
            },
            {
              icon: MessageCircle,
              title: "AI Assistant",
              description: "Multilingual chatbot answering farming queries in Hindi, English, Tamil",
              color: "text-primary",
              bgColor: "bg-primary/10"
            }
          ].map((feature, idx) => (
            <Card 
              key={idx} 
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-8 md:p-12 bg-gradient-card border-border/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built with Production-Grade ML Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              No IoT sensors required - Pure ML/AI driven insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React + TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Chart.js/Recharts</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">ML Models</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• CNN (EfficientNet/MobileNet)</li>
                <li>• LSTM Time Series</li>
                <li>• Random Forest</li>
                <li>• Hybrid Recommender</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">APIs & Data</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• IMD Weather API</li>
                <li>• eNAM Market Data</li>
                <li>• data.gov.in Integration</li>
                <li>• PlantVillage Dataset</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20">
          <CloudRain className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Indian farmers using AI-Kisan for data-driven agriculture decisions
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow">
              Launch Dashboard
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-primary" />
            <span>AI-Kisan © 2025 - Empowering Indian Agriculture</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">API</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
