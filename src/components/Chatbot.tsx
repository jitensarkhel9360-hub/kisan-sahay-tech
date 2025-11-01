import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { MessageCircle, Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "नमस्ते! मैं AI-Kisan सहायक हूं। मैं आपकी खेती से संबंधित सवालों का जवाब दे सकता हूं। आप मुझसे हिंदी, अंग्रेजी या तमिल में बात कर सकते हैं।" }
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("hi");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    // Mock bot response
    setTimeout(() => {
      const botResponse: Message = {
        role: "bot",
        content: language === "hi" 
          ? "धान की फसल के लिए मिट्टी का pH स्तर 5.5 से 7.0 के बीच होना चाहिए। आप PM-KISAN योजना के लिए पात्र हैं। क्या आपको और जानकारी चाहिए?"
          : "For rice crop, soil pH should be between 5.5 to 7.0. You are eligible for PM-KISAN scheme. Would you like more information?"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInput("");
  };

  return (
    <Card className="p-6 bg-gradient-card border-border/50 h-[600px] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">AI Assistant</h2>
            <p className="text-sm text-muted-foreground">Multilingual farming support</p>
          </div>
        </div>
        
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="hi">हिंदी</SelectItem>
            <SelectItem value="ta">தமிழ்</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ScrollArea className="flex-1 pr-4 mb-4">
        <div className="space-y-4">
          {messages.map((message, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "bot" && (
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder={language === "hi" ? "अपना सवाल लिखें..." : "Type your question..."}
          className="flex-1"
        />
        <Button onClick={handleSend} className="bg-gradient-to-r from-primary to-accent">
          <Send className="w-4 h-4" />
        </Button>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-info/10 border border-info/20">
        <p className="text-xs text-muted-foreground">
          💡 Ask about: Crop selection, fertilizers, diseases, weather, market prices, government schemes, 
          and best farming practices. Supports Hindi, English, and Tamil.
        </p>
      </div>
    </Card>
  );
};

export default Chatbot;
