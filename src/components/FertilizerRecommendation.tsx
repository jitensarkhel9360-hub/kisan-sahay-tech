import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Droplets } from "lucide-react";

const FertilizerRecommendation = () => {
  const [cropType, setCropType] = useState("");
  const [soilType, setSoilType] = useState("");
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleRecommend = () => {
    // Mock fertilizer recommendation
    const mockData = {
      fertilizer: "NPK 10-26-26",
      quantity: "150 kg/hectare",
      timing: "Split application: 50% at sowing, 50% at 30 days",
      cost: "₹4,500 per hectare"
    };
    setRecommendation(mockData);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
            <Droplets className="w-5 h-5 text-info" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Fertilizer Recommendation</h2>
            <p className="text-sm text-muted-foreground">Optimal fertilizer for your crop</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label>Crop Type</Label>
            <Select value={cropType} onValueChange={setCropType}>
              <SelectTrigger>
                <SelectValue placeholder="Select crop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="cotton">Cotton</SelectItem>
                <SelectItem value="maize">Maize</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Soil Type</Label>
            <Select value={soilType} onValueChange={setSoilType}>
              <SelectTrigger>
                <SelectValue placeholder="Select soil type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clayey">Clayey</SelectItem>
                <SelectItem value="sandy">Sandy</SelectItem>
                <SelectItem value="loamy">Loamy</SelectItem>
                <SelectItem value="red">Red Soil</SelectItem>
                <SelectItem value="black">Black Soil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="area">Land Area (hectares)</Label>
            <Input id="area" type="number" placeholder="e.g., 2.5" />
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-info to-accent"
            onClick={handleRecommend}
          >
            Get Fertilizer Recommendation
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-card border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recommendation</h3>
        
        {recommendation ? (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-info/10 border border-info/30">
              <h4 className="font-semibold text-foreground mb-2">Recommended Fertilizer</h4>
              <p className="text-2xl font-bold text-info">{recommendation.fertilizer}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Quantity</p>
                <p className="font-semibold text-foreground">{recommendation.quantity}</p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground mb-1">Cost Estimate</p>
                <p className="font-semibold text-foreground">{recommendation.cost}</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm text-muted-foreground mb-2">Application Timing</p>
              <p className="text-foreground">{recommendation.timing}</p>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-center p-8">
            <div>
              <Droplets className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-muted-foreground">
                Select your crop and soil type to get ML-based fertilizer recommendations
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default FertilizerRecommendation;
