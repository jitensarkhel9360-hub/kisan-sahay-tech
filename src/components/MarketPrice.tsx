import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const MarketPrice = () => {
  // Mock market data - In production, this would come from eNAM API
  const marketData = [
    { crop: "Rice", current: 2850, predicted: 2920, change: 2.5, trend: "up" },
    { crop: "Wheat", current: 2150, predicted: 2080, change: -3.3, trend: "down" },
    { crop: "Cotton", current: 6200, predicted: 6450, change: 4.0, trend: "up" },
    { crop: "Soybean", current: 4350, predicted: 4380, change: 0.7, trend: "up" },
    { crop: "Maize", current: 1950, predicted: 1980, change: 1.5, trend: "up" },
    { crop: "Sugarcane", current: 3100, predicted: 3050, change: -1.6, trend: "down" }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Market Price Predictions</h2>
            <p className="text-sm text-muted-foreground">LSTM time-series forecasting from eNAM data</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketData.map((item, idx) => (
            <Card key={idx} className="p-4 bg-background hover:shadow-card transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-foreground">{item.crop}</h3>
                <div className={`flex items-center gap-1 ${item.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                  {item.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{Math.abs(item.change)}%</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-muted-foreground">Current Price</p>
                  <p className="text-lg font-bold text-foreground">₹{item.current}/quintal</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Predicted (30 days)</p>
                  <p className="text-lg font-semibold text-primary">₹{item.predicted}/quintal</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-card border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-4">Market Insights</h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-success/10 border border-success/20">
            <p className="font-medium text-success mb-1">🔥 Cotton showing strong upward trend</p>
            <p className="text-muted-foreground">Expected 4% price increase due to export demand. Good time to sell.</p>
          </div>
          <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
            <p className="font-medium text-warning mb-1">⚠️ Wheat prices declining</p>
            <p className="text-muted-foreground">Oversupply in major mandis. Consider holding stock if possible.</p>
          </div>
          <div className="p-3 rounded-lg bg-info/10 border border-info/20">
            <p className="font-medium text-info mb-1">📊 Rice prices stable with slight uptick</p>
            <p className="text-muted-foreground">Moderate demand growth expected. Fair time to sell.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MarketPrice;
