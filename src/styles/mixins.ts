export const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

export const flexStart = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
} as const;

export const flexEnd = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
} as const;

export const flexBetween = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
} as const;

export const flexColumn = {
  display: "flex",
  flexDirection: "column",
} as const;

export const flexColumnCenter = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
} as const;

export const fillParent = {
  width: "100%",
  height: "100%",
} as const;
