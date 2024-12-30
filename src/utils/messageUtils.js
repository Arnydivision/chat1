export function createUserMessage(text) {
  return {
    id: Date.now().toString(),
    text,
    sender: 'user',
    timestamp: new Date(),
  };
}

export function createBotMessage(text) {
  return {
    id: (Date.now() + 1).toString(),
    text,
    sender: 'bot',
    timestamp: new Date(),
  };
}

export function formatChatMessages(messages) {
  return messages.map(msg => ({
    role: msg.sender === 'bot' ? 'assistant' : 'user',
    content: msg.text
  }));
}