import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { Badge, Box, Paper, Tab, Tabs } from "@mui/material";
import type { TEmployeeTab } from "../useEmployeeDetails";
import { EmployeeDetailsTab } from "./EmployeeDetailsTab";
import { EmployeeTasksTab } from "./EmployeeTasksTab";
import { EMERALD, SLATE } from "@/styles/colors";
import {
  useGetEmployeeByIdQuery,
  useGetEmployeeTasksQuery,
} from "@/api/endpoints/employeesEndpoints";
import { useParams } from "react-router-dom";

type TEmployeeDetailsTabProps = {
  activeTab: TEmployeeTab;
  onTabChange: (event: React.SyntheticEvent, value: TEmployeeTab) => void;
};

export const EmployeeTabs = ({
  activeTab,
  onTabChange,
}: TEmployeeDetailsTabProps) => {
  const { id } = useParams<{ id: string }>();
  const { data: employee } = useGetEmployeeByIdQuery({ id });
  const { data: tasksData } = useGetEmployeeTasksQuery({ id });

  if (!tasksData || !employee) return null;

  return (
    <Paper
      sx={{
        flex: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Tabs
        value={activeTab}
        onChange={onTabChange}
        sx={{
          borderBottom: `1px solid ${SLATE[700]}`,
          px: 2,
          "& .MuiTab-root": { color: "text.secondary" },
          "& .Mui-selected": { color: EMERALD[400] },
          "& .MuiTabs-indicator": { backgroundColor: EMERALD[400] },
        }}
      >
        <Tab
          value="tasks"
          icon={
            <Badge badgeContent={tasksData?.total} color="primary" max={99}>
              <AccessTimeIcon fontSize="small" />
            </Badge>
          }
          iconPosition="start"
          label="Tasks"
        />
        <Tab
          value="details"
          icon={<PersonIcon fontSize="small" />}
          iconPosition="start"
          label="Details"
        />
      </Tabs>

      <Box sx={{ p: 3, flex: 1 }}>
        {activeTab === "details" && <EmployeeDetailsTab employee={employee} />}
        {activeTab === "tasks" && <EmployeeTasksTab tasks={tasksData.todos} />}
      </Box>
    </Paper>
  );
};
