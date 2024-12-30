export function parseDate(input) {
  const date = new Date(input);
  return isNaN(date.getTime()) ? null : date;
}

export function parseTime(input) {
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(input) ? input : null;
}

export function parseParticipants(input) {
  return input.split(',').map(p => p.trim()).filter(Boolean);
}