import { useState, useCallback } from 'react';
import { getChatResponse } from '../services/chatService';
import { createUserMessage, createBotMessage } from '../utils/messageUtils';

const INITIAL_MESSAGE = createBotMessage('¡Hola! ¿En qué puedo ayudarte hoy?');

export function useChat() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);

  const sendMessage = useCallback(async (text) => {
    const userMessage = createUserMessage(text);
    setMessages(prev => [...prev, userMessage]);

    try {
      const responseText = await getChatResponse([...messages, userMessage]);
      const botMessage = createBotMessage(responseText);
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling Mistral AI:', error);
      const errorMessage = createBotMessage(
        'Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.'
      );
      setMessages(prev => [...prev, errorMessage]);
    }
  }, [messages]);

  return {
    messages,
    sendMessage,
  };
}