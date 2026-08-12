import { getMemory, OperatorEvent } from "./OperatorMemory";

export interface OperatorContextData {
  isFirstSession: boolean;
  eventCount: number;
  lastEvent: OperatorEvent | null;
}

export function getOperatorContext(): OperatorContextData {
  const memory = getMemory();

  return {
    isFirstSession: memory.length === 0,
    eventCount: memory.length,
    lastEvent:
      memory.length > 0
        ? memory[memory.length - 1] ?? null
        : null,
  };
}