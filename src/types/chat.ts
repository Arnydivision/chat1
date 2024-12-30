export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ConversationState {
  currentStep: string;
  collectedData: Record<string, any>;
}