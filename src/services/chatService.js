import { mistralClient, MISTRAL_MODEL } from '../config/mistral';
import { formatChatMessages } from '../utils/messageUtils';

export async function getChatResponse(messages) {
  const formattedMessages = formatChatMessages(messages);
  
  const response = await mistralClient.chat({
    model: MISTRAL_MODEL,
    messages: formattedMessages
  });

  return response.choices[0].message.content;
}