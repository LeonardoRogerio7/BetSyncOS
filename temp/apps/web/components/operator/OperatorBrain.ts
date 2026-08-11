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