import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <Button
      asChild
      size="lg"
      className="whatsapp-float bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg"
    >
      <a 
        href="https://wa.me/5543988508487" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Entre em contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </Button>
  );
};

export default WhatsAppFloat;