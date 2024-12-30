import React from 'react';
import classNames from 'classnames';

export function ChatMessage({ message }) {
  const isBot = message.sender === 'bot';
  
  return (
    <div
      className={classNames(
        'max-w-[80%] rounded-lg p-4 mb-4',
        {
          'bg-blue-100 ml-auto': !isBot,
          'bg-gray-100': isBot,
        }
      )}
    >
      <p className="text-gray-800">{message.text}</p>
      <span className="text-xs text-gray-500">
        {message.timestamp.toLocaleTimeString()}
      </span>
    </div>
  );
}