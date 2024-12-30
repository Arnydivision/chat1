export function parseDate(input: string): Date | null {
  // Basic date parsing - can be enhanced
  const date = new Date(input);
  return isNaN(date.getTime()) ? null : date;
}

export function parseTime(input: string): string | null {
  // Basic time validation - can be enhanced
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(input) ? input : null;
}

export function parseParticipants(input: string): string[] {
  return input.split(',').map(p => p.trim()).filter(Boolean);
}