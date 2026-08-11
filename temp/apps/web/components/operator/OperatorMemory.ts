export interface OperatorEvent {
  id: string;
  type: string;
  message: string;
  timestamp: string;
}

const STORAGE_KEY = "betsync-operator-memory";

export function getMemory(): OperatorEvent[] {
  if (typeof window === "undefined") {
    return [];
  }

  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return [];
  }

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function rememberEvent(
  type: string,
  message: string
): void {
  if (typeof window === "undefined") {
    return;
  }

  const events = getMemory();

  const event: OperatorEvent = {
    id: crypto.randomUUID(),
    type,
    message,
    timestamp: new Date().toISOString(),
  };

  const updatedEvents = [
    ...events,
    event,
  ].slice(-50);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedEvents)
  );
}