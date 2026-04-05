import { Box, Typography } from "@mui/material";
import { SLATE } from "@/styles/colors";
import type { TUser } from "@/types/types";
import { format } from "date-fns";

type TEmployeeDetailsTabProps = {
  employee: TUser;
};

const InfoField = ({ label, value }: { label: string; value: string }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      gap: 4,
      py: 1,
      borderBottom: `1px solid ${SLATE[700]}`,
      "&:last-of-type": { borderBottom: "none" },
    }}
  >
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ textWrap: "nowrap" }}
    >
      {label}:
    </Typography>
    <Typography variant="body1" fontWeight={600} color="text.primary">
      {value}
    </Typography>
  </Box>
);

export const EmployeeDetailsTab = ({ employee }: TEmployeeDetailsTabProps) => {
  const { age, gender, birthDate, company, university } = employee;

  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <Box sx={{ flex: 1 }}>
        <InfoField label="Job Title" value={company.title} />
        <InfoField label="Age" value={`${age} years old`} />
        <InfoField
          label="Gender"
          value={gender.charAt(0).toUpperCase() + gender.slice(1)}
        />
        <InfoField label="Birthday" value={format(birthDate, "PP")} />
        <InfoField label="Education" value={university} />
      </Box>
    </Box>
  );
};
