import { Step } from './steps';
import { ConversationState } from '../types/chat';

const responses: Record<Step, (state: ConversationState) => string> = {
  INITIAL: () => '¡Hola! ¿En qué puedo ayudarte hoy?',
  
  COLLECTING_DATE: () => '¿Para qué fecha te gustaría agendar la reunión?',
  
  COLLECTING_TIME: () => '¿A qué hora te gustaría programar la reunión?',
  
  COLLECTING_PARTICIPANTS: () => '¿Quiénes participarán en la reunión?',
  
  CONFIRMATION: (state) => {
    const { date, time, participants } = state.collectedData;
    return `Confirma los detalles por favor:\nFecha: ${date}\nHora: ${time}\nParticipantes: ${participants}\n¿Es correcta esta información?`;
  }
};

export function getResponse(state: ConversationState): string {
  const handler = responses[state.currentStep as Step];
  return handler ? handler(state) : '¿En qué más puedo ayudarte?';
}