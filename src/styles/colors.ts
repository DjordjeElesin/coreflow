export const SLATE = {
  900: "#0f172a",
  800: "#1e293b",
  700: "#334155",
  600: "#475569",
  500: "#64748b",
  400: "#94a3b8",
  300: "#cbd5e1",
};

export const EMERALD = {
  600: "#059669",
  500: "#10b981",
  400: "#34d399",
};

export const CYAN = {
  600: "#0891b2",
  500: "#06b6d4",
  400: "#22d3ee",
};

export const gradient = {
  primary: `linear-gradient(135deg, ${EMERALD[500]}, ${CYAN[500]})`,
  primaryHover: `linear-gradient(135deg, ${EMERALD[400]}, ${CYAN[400]})`,
  background: `linear-gradient(135deg, ${SLATE[900]}, ${SLATE[800]}, ${SLATE[900]})`,
};
