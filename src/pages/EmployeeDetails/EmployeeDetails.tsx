import { Loading } from "@/components/Loading";
import { useEmployeeDetails } from "./useEmployeeDetails";
import { EmployeeProfileCard } from "./EmployeeProfileCard";
import { EmployeeTabs } from "./EmployeeTabs/EmployeeTabs";
import { DetailsPageContainer } from "@/layouts/DetailsPageContainer";

export const EmployeeDetails = () => {
  const { isLoading, activeTab, onTabChange } = useEmployeeDetails();

  if (isLoading) return <Loading />;

  return (
    <DetailsPageContainer
      backToText="Back To Employees"
      content={
        <>
          <EmployeeProfileCard />
          <EmployeeTabs activeTab={activeTab} onTabChange={onTabChange} />
        </>
      }
    />
  );
};
