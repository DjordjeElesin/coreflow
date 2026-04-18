import {
  useGetEmployeeByIdQuery,
  useGetEmployeeTasksQuery,
} from "@/api/endpoints/employeesEndpoints";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type TEmployeeTab = "details" | "tasks";

export const useEmployeeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TEmployeeTab>("tasks");

  const { isLoading: isEmployeeLoading } = useGetEmployeeByIdQuery({ id });
  const { isLoading: isTasksLoading } = useGetEmployeeTasksQuery({ id });

  const onTabChange = (_: React.SyntheticEvent, value: TEmployeeTab) =>
    setActiveTab(value);

  return {
    isLoading: isEmployeeLoading || isTasksLoading,
    activeTab,
    onTabChange,
  };
};
