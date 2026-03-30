import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const { id } = useParams<{ id: string }>();

  return <div>EmployeeDetails for ID: {id}</div>;
};
