import { STEPS } from './steps';
import { parseDate, parseTime, parseParticipants } from './parser';

export function updateState(state, userInput) {
  const { currentStep } = state;
  const newState = { ...state };

  switch (currentStep) {
    case STEPS.INITIAL:
      if (userInput.toLowerCase().includes('reuni')) {
        newState.currentStep = STEPS.COLLECTING_DATE;
      }
      break;

    case STEPS.COLLECTING_DATE:
      const date = parseDate(userInput);
      if (date) {
        newState.collectedData.date = date.toLocaleDateString();
        newState.currentStep = STEPS.COLLECTING_TIME;
      }
      break;

    case STEPS.COLLECTING_TIME:
      const time = parseTime(userInput);
      if (time) {
        newState.collectedData.time = time;
        newState.currentStep = STEPS.COLLECTING_PARTICIPANTS;
      }
      break;

    case STEPS.COLLECTING_PARTICIPANTS:
      const participants = parseParticipants(userInput);
      if (participants.length > 0) {
        newState.collectedData.participants = participants;
        newState.currentStep = STEPS.CONFIRMATION;
      }
      break;

    case STEPS.CONFIRMATION:
      if (userInput.toLowerCase().includes('sí')) {
        newState.currentStep = STEPS.INITIAL;
        newState.collectedData = {};
      }
      break;
  }

  return newState;
}