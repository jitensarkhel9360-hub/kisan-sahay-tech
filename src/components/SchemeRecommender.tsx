import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, CheckCircle } from "lucide-react";

const SchemeRecommender = () => {
  // Mock government schemes - In production, this would use hybrid ML recommender
  const schemes = [
    {
      name: "PM-KISAN",
      fullName: "Pradhan Mantri Kisan Samman Nidhi",
      benefit: "₹6,000 per year",
      eligibility: "All landholding farmers",
      match: 98,
      category: "Income Support"
    },
    {
      name: "PMFBY",
      fullName: "Pradhan Mantri Fasal Bima Yojana",
      benefit: "Crop insurance coverage",
      eligibility: "Farmers with insurable interest in crop",
      match: 92,
      category: "Insurance"
    },
    {
      name: "PMKSY",
      fullName: "Pradhan Mantri Krishi Sinchai Yojana",
      benefit: "Irrigation subsidy up to 90%",
      eligibility: "Farmers adopting micro-irrigation",
      match: 85,
      category: "Irrigation"
    },
    {
      name: "PKVY",
      fullName: "Paramparagat Krishi Vikas Yojana",
      benefit: "₹50,000/hectare for organic farming",
      eligibility: "Farmers adopting organic practices",
      match: 78,
      category: "Organic Farming"
    },
    {
      name: "KCC",
      fullName: "Kisan Credit Card",
      benefit: "Low-interest agricultural credit",
      eligibility: "All farmers with land records",
      match: 95,
      category: "Credit"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Government Schemes</h2>
            <p className="text-sm text-muted-foreground">Personalized scheme recommendations</p>
          </div>
        </div>

        <div className="space-y-4">
          {schemes.map((scheme, idx) => (
            <Card key={idx} className="p-5 bg-background hover:shadow-card transition-all border-border/50">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground">{scheme.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {scheme.match}% Match
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{scheme.fullName}</p>
                  <Badge variant="outline" className="text-xs">
                    {scheme.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <CheckCircle className="w-5 h-5 text-success mb-1" />
                  <p className="text-xs text-muted-foreground">Eligible</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-xs text-muted-foreground min-w-20">Benefit:</span>
                  <span className="text-sm font-semibold text-primary">{scheme.benefit}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs text-muted-foreground min-w-20">Eligibility:</span>
                  <span className="text-sm text-foreground">{scheme.eligibility}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
                <Button size="sm" variant="outline">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-accent border-accent/20">
        <h3 className="text-lg font-semibold text-foreground mb-3">💡 Recommendation Tip</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Our hybrid ML recommender analyzed your profile (land size, crops, location, income) 
          and matched you with the most relevant schemes. Apply to all eligible schemes to maximize benefits.
        </p>
        <Button variant="outline" size="sm">
          Update My Profile
        </Button>
      </Card>
    </div>
  );
};

export default SchemeRecommender;
