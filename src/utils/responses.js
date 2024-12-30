import { STEPS } from './steps';

const responses = {
  [STEPS.INITIAL]: () => '¡Hola! ¿En qué puedo ayudarte hoy?',
  
  [STEPS.COLLECTING_DATE]: () => '¿Para qué fecha te gustaría agendar la reunión?',
  
  [STEPS.COLLECTING_TIME]: () => '¿A qué hora te gustaría programar la reunión?',
  
  [STEPS.COLLECTING_PARTICIPANTS]: () => '¿Quiénes participarán en la reunión?',
  
  [STEPS.CONFIRMATION]: (state) => {
    const { date, time, participants } = state.collectedData;
    return `Confirma los detalles por favor:\nFecha: ${date}\nHora: ${time}\nParticipantes: ${participants}\n¿Es correcta esta información?`;
  }
};

export function getResponse(state) {
  const handler = responses[state.currentStep];
  return handler ? handler(state) : '¿En qué más puedo ayudarte?';
}