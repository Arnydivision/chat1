import { useState, useCallback } from 'react';
import { Message, ConversationState } from '../types/chat';
import { STEPS } from '../utils/steps';
import { getResponse } from '../utils/responses';
import { updateState } from '../utils/stateManager';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const [conversationState, setConversationState] = useState<ConversationState>({
    currentStep: STEPS.INITIAL,
    collectedData: {},
  });

  const sendMessage = useCallback((text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Update conversation state based on user input
    const newState = updateState(conversationState, text);
    setConversationState(newState);

    setTimeout(() => {
      const botResponse = getResponse(newState);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  }, [conversationState]);

  return {
    messages,
    sendMessage,
  };
}