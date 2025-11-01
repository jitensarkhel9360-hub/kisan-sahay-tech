import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Sprout, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SoilData {
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  ph: string;
  rainfall: string;
  temperature: string;
}

const CropRecommendation = () => {
  const [soilData, setSoilData] = useState<SoilData>({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    ph: "",
    rainfall: "",
    temperature: ""
  });

  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof SoilData, value: string) => {
    setSoilData(prev => ({ ...prev, [field]: value }));
  };

  const handleRecommend = () => {
    setLoading(true);
    
    // Mock ML prediction - In production, this would call FastAPI backend
    setTimeout(() => {
      // Simple rule-based mock logic
      const ph = parseFloat(soilData.ph);
      const rainfall = parseFloat(soilData.rainfall);
      
      let crop = "Rice";
      if (ph > 7 && rainfall < 100) {
        crop = "Wheat";
      } else if (ph < 6.5 && rainfall > 100) {
        crop = "Rice";
      } else if (rainfall > 50 && rainfall < 100) {
        crop = "Cotton";
      }

      setRecommendation(crop);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
            <Sprout className="w-5 h-5 text-success" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Crop Recommendation</h2>
            <p className="text-sm text-muted-foreground">AI-based optimal crop selection</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nitrogen">Nitrogen (N)</Label>
              <Input
                id="nitrogen"
                type="number"
                placeholder="e.g., 90"
                value={soilData.nitrogen}
                onChange={(e) => handleInputChange("nitrogen", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phosphorus">Phosphorus (P)</Label>
              <Input
                id="phosphorus"
                type="number"
                placeholder="e.g., 42"
                value={soilData.phosphorus}
                onChange={(e) => handleInputChange("phosphorus", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="potassium">Potassium (K)</Label>
              <Input
                id="potassium"
                type="number"
                placeholder="e.g., 43"
                value={soilData.potassium}
                onChange={(e) => handleInputChange("potassium", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="ph">pH Level</Label>
              <Input
                id="ph"
                type="number"
                step="0.1"
                placeholder="e.g., 6.5"
                value={soilData.ph}
                onChange={(e) => handleInputChange("ph", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="rainfall">Rainfall (mm)</Label>
              <Input
                id="rainfall"
                type="number"
                placeholder="e.g., 202"
                value={soilData.rainfall}
                onChange={(e) => handleInputChange("rainfall", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="temperature">Temperature (°C)</Label>
              <Input
                id="temperature"
                type="number"
                placeholder="e.g., 28"
                value={soilData.temperature}
                onChange={(e) => handleInputChange("temperature", e.target.value)}
              />
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-success to-primary hover:shadow-glow"
            onClick={handleRecommend}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Get Recommendation"}
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-card border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recommendation Result</h3>
        
        {recommendation ? (
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-success/10 border-2 border-success/30">
              <div className="text-center">
                <Sprout className="w-16 h-16 mx-auto mb-4 text-success" />
                <h4 className="text-2xl font-bold text-foreground mb-2">Recommended Crop</h4>
                <p className="text-3xl font-bold text-success">{recommendation}</p>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Based on your soil parameters (N, P, K), pH level, rainfall, and temperature data, 
                our ML model recommends <strong>{recommendation}</strong> for optimal yield.
              </AlertDescription>
            </Alert>

            <div className="space-y-2 text-sm">
              <h5 className="font-semibold text-foreground">Why {recommendation}?</h5>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Optimal pH range match: {soilData.ph}</li>
                <li>Suitable NPK ratio for growth</li>
                <li>Rainfall requirement aligned: {soilData.rainfall}mm</li>
                <li>Temperature conditions favorable: {soilData.temperature}°C</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-muted">
              <h5 className="font-semibold text-foreground mb-2">Next Steps</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Check fertilizer recommendations</li>
                <li>✓ Review market prices for {recommendation}</li>
                <li>✓ Explore applicable government schemes</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-center p-8">
            <div>
              <Sprout className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-muted-foreground">
                Enter your soil parameters and click "Get Recommendation" to receive 
                AI-powered crop suggestions based on Random Forest ML model.
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CropRecommendation;
