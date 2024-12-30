import MistralAI from '@mistralai/mistralai';

export const mistralClient = new MistralAI(import.meta.env.VITE_MISTRAL_API_KEY);

export const MISTRAL_MODEL = 'mistral-tiny';