import { ConversationState } from '../types/chat';

export const conversationSteps = {
  INITIAL: 'INITIAL',
  COLLECTING_DATE: 'COLLECTING_DATE',
  COLLECTING_TIME: 'COLLECTING_TIME',
  COLLECTING_PARTICIPANTS: 'COLLECTING_PARTICIPANTS',
  CONFIRMATION: 'CONFIRMATION',
};

export function getNextResponse(state: ConversationState, userInput: string): string {
  switch (state.currentStep) {
    case conversationSteps.INITIAL:
      return '¡Hola! ¿En qué puedo ayudarte hoy?';
    
    case conversationSteps.COLLECTING_DATE:
      return '¿Para qué fecha te gustaría agendar la reunión?';
    
    case conversationSteps.COLLECTING_TIME:
      return '¿A qué hora te gustaría programar la reunión?';
    
    case conversationSteps.COLLECTING_PARTICIPANTS:
      return '¿Quiénes participarán en la reunión?';
    
    case conversationSteps.CONFIRMATION:
      const { date, time, participants } = state.collectedData;
      return `Confirma los detalles por favor:\nFecha: ${date}\nHora: ${time}\nParticipantes: ${participants}\n¿Es correcta esta información?`;
    
    default:
      return '¿En qué más puedo ayudarte?';
  }
}