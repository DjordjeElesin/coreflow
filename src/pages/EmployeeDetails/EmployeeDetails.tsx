import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button } from "@mui/material";
import { Loading } from "@/components/Loading";
import { useEmployeeDetails } from "./useEmployeeDetails";
import { EmployeeProfileCard } from "./EmployeeProfileCard";
import { EmployeeTabs } from "./EmployeeTabs/EmployeeTabs";

export const EmployeeDetails = () => {
  const { isLoading, activeTab, onBack, onTabChange } = useEmployeeDetails();

  if (isLoading) return <Loading fullScreen={false} />;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        sx={{ alignSelf: "flex-start" }}
      >
        Back to Employees
      </Button>

      <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
        <EmployeeProfileCard />
        <EmployeeTabs activeTab={activeTab} onTabChange={onTabChange} />
      </Box>
    </Box>
  );
};
