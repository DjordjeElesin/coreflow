import {
  useGetEmployeeByIdQuery,
  useGetEmployeeTasksQuery,
} from "@/api/endpoints/employeesEndpoints";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export type TEmployeeTab = "details" | "tasks";

export const useEmployeeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TEmployeeTab>("tasks");

  const { isLoading: isEmployeeLoading } = useGetEmployeeByIdQuery(Number(id));
  const { isLoading: isTasksLoading } = useGetEmployeeTasksQuery(Number(id));

  const onBack = () => navigate("/employees");

  const onTabChange = (_: React.SyntheticEvent, value: TEmployeeTab) =>
    setActiveTab(value);

  return {
    isLoading: isEmployeeLoading || isTasksLoading,
    activeTab,
    onBack,
    onTabChange,
  };
};
