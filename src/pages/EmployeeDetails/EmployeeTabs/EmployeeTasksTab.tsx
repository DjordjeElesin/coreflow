import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Checkbox } from "@/components/Checkbox";
import type { TTask } from "@/types/types";
import { SLATE } from "@/styles/colors";

type TEmployeeTasksTabProps = {
  tasks: TTask[];
};

type TTaskRowProps = {
  task: TTask;
};

const TaskRow = ({ task }: TTaskRowProps) => {
  const [completed, setCompleted] = useState(task.completed);

  const onToggleCheckbox = async () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        py: 1.25,
        px: 1,
        borderRadius: 1,
        backgroundColor: completed ? `${SLATE[700]}40` : "transparent",
        borderBottom: `1px solid ${SLATE[700]}`,
        "&:last-of-type": { borderBottom: "none" },
      }}
    >
      <Checkbox checked={completed} onChange={onToggleCheckbox} />
      <Typography
        variant="body1"
        sx={{
          color: completed ? "text.secondary" : "text.primary",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {task.todo}
      </Typography>
    </Box>
  );
};

export const EmployeeTasksTab = ({ tasks }: TEmployeeTasksTabProps) => {
  if (!tasks.length) {
    return (
      <Typography variant="body2" color="text.secondary">
        No tasks found for this employee.
      </Typography>
    );
  }

  return (
    <Box>
      {tasks.map((task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </Box>
  );
};
