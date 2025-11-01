import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, User, LogIn, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AIAssistantGateway = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
      
      // If user is logged in, redirect directly to chat
      if (user) {
        navigate("/ai-chat");
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          navigate("/ai-chat");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <Card className="p-12 text-center bg-gradient-card border-border/50 shadow-card">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4">
            AI Farming Assistant
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Get instant answers to your farming questions with voice or text. 
            Ask about crops, diseases, weather, and government schemes.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
            <Card className="p-6 hover:shadow-card transition-all hover:-translate-y-1 border-2 border-border/50">
              <User className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Chat as Guest
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Start chatting immediately without signing up. Your conversation won't be saved.
              </p>
              <Button
                onClick={() => navigate("/ai-chat")}
                variant="outline"
                className="w-full border-2 hover:bg-muted/50"
              >
                Continue as Guest
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-card transition-all hover:-translate-y-1 border-2 border-primary/50 bg-primary/5">
              <LogIn className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Log In to Save
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sign in to preserve your chat history and get personalized recommendations.
              </p>
              <Button
                onClick={() => navigate("/auth")}
                className="w-full bg-gradient-primary hover:shadow-glow"
              >
                Log In / Sign Up
              </Button>
            </Card>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-info/10 border border-info/20">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Pro Tip:</strong> Use voice commands for hands-free assistance while working on your farm!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistantGateway;
