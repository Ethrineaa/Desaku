import { useState, useRef, useEffect } from "react";
import { FiSend, FiX, FiMessageCircle } from "react-icons/fi";
import "../styles/Chat.css";

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isUser: boolean;
}

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Halo! Selamat datang di Desaku. Ada yang bisa kami bantu?",
      timestamp: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      timestamp: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Terima kasih atas pertanyaannya! Kami akan memprosesnya segera.",
        "Baik, kami sudah catat informasi Anda. Tim kami akan menghubungi Anda segera.",
        "Pertanyaan yang bagus! Bisa kami bantu dengan informasi lebih lanjut?",
        "Kami sangat menghargai masukan Anda. Terima kasih telah menghubungi kami!",
        "Apakah ada hal lain yang bisa kami bantu untuk Anda?",
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        timestamp: new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isUser: false,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          className="chat-button"
          onClick={() => setIsOpen(true)}
          aria-label="Buka chat"
        >
          <FiMessageCircle size={24} />
          <span className="chat-badge">1</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-container">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-content">
              <h3>Chat dengan Kami</h3>
              <p className="chat-status">
                Kami biasanya membalas dalam hitungan menit
              </p>
            </div>
            <button
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup chat"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.isUser ? "user-message" : "bot-message"}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{message.timestamp}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message bot-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tulis pesan Anda..."
              className="chat-input"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              className="chat-send-btn"
              disabled={!inputValue.trim() || isLoading}
              aria-label="Kirim pesan"
            >
              <FiSend size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
