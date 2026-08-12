export type OperatorState =
  | "monitoring"
  | "analyzing"
  | "alert"
  | "idle";

export interface OperatorMessage {
  title: string;
  message: string;
  status: string;
}

export function getOperatorMessage(
  state: OperatorState
): OperatorMessage {
  switch (state) {
    case "monitoring":
      return {
        title: "🛰 Sentinel",
        message:
          "Bom dia, Leonardo. Todos os módulos estão operacionais. Estou monitorando continuamente os mercados.",
        status: "🟢 Monitorando",
      };

    case "analyzing":
      return {
        title: "🛰 Sentinel",
        message:
          "Detectei movimentações importantes. Oracle iniciou uma análise mais profunda.",
        status: "🟡 Analisando",
      };

    case "alert":
      return {
        title: "🛰 Sentinel",
        message:
          "Uma missão relevante foi encontrada. Recomendo abrir o Mission Cockpit.",
        status: "🔴 Atenção",
      };

    default:
      return {
        title: "🛰 Sentinel",
        message:
          "Nenhuma atividade relevante no momento.",
        status: "⚪ Em espera",
      };
  }
}

export function getSessionGreeting(
  isFirstSession: boolean,
  eventCount: number
): string {
  if (isFirstSession) {
    return "Bom dia, Leonardo. Esta é minha primeira sessão operacional. Minha memória acaba de ser inicializada.";
  }

  return `Bem-vindo de volta, Leonardo. Reconheci sua sessão anterior. Tenho ${eventCount} eventos registrados na minha memória operacional.`;
}