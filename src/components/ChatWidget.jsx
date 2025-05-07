
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area'; 
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: Date.now(), text: "Hello! How can I help you with SoftSell today?", sender: 'bot' }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages((prevMessages) => [...prevMessages, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
    }, 1000);
  };
  
  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hi there! How can I assist you today?";
    } else if (lowerInput.includes("quote") || lowerInput.includes("valuation")) {
      return "You can get a quote by filling out the contact form on our page. Just scroll down or click 'Get a Quote' in the header!";
    } else if (lowerInput.includes("how it works") || lowerInput.includes("process")) {
      return "Our process is simple: 1. Upload License Details, 2. Get Instant Valuation, 3. Get Paid Securely. You can find more details in the 'How It Works' section.";
    } else if (lowerInput.includes("sell licenses") || lowerInput.includes("what can i sell")) {
      return "We help you sell various types of software licenses, including productivity suites, design software, development tools, and more. Check our contact form for a list of license types!";
    } else if (lowerInput.includes("contact") || lowerInput.includes("support")) {
      return "For support or detailed inquiries, please use the contact form or email us at info@softsell.com.";
    } else if (lowerInput.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return "Thanks for your message! For more complex questions, please use our contact form, and one of our specialists will get back to you.";
    }
  };


  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      >
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg"
          onClick={toggleChat}
          aria-label="Toggle chat widget"
        >
          {isOpen ? <X className="h-8 w-8 text-primary-foreground" /> : <MessageSquare className="h-8 w-8 text-primary-foreground" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-80 h-[450px] bg-card shadow-xl rounded-lg flex flex-col overflow-hidden border border-border"
          >
            <header className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6" />
                <h3 className="font-semibold text-lg">SoftSell Assistant</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="text-primary-foreground hover:bg-primary/80">
                <X className="h-5 w-5" />
              </Button>
            </header>
            
            <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "flex w-full max-w-[85%] flex-col gap-1",
                      msg.sender === 'user' ? 'ml-auto items-end' : 'items-start'
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm",
                        msg.sender === 'user'
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-background">
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow"
                  aria-label="Chat message input"
                />
                <Button type="submit" size="icon" aria-label="Send message">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
  