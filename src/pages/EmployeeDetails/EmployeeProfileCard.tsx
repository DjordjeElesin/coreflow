import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Chip, Paper, Typography } from "@mui/material";
import { UserAvatar } from "@/components/UserAvatar";
import { SLATE } from "@/styles/colors";
import { getUserFullName } from "@/utils/getUserFullName";
import { useGetEmployeeByIdQuery } from "@/api/endpoints/employeesEndpoints";
import { useParams } from "react-router-dom";

const InfoRow = ({
  icon,
  label,
  caption,
}: {
  icon: React.ReactNode;
  label: string;
  caption: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
    <Box sx={{ color: "text.secondary", display: "flex" }}>{icon}</Box>
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="caption">{caption}</Typography>
      <Typography variant="body1">{label}</Typography>
    </Box>
  </Box>
);

export const EmployeeProfileCard = () => {
  const { id } = useParams<{ id: string }>();
  const { data: employee } = useGetEmployeeByIdQuery({ id });

  if (!employee) return null;

  const { company, email, phone, address } = employee;

  return (
    <Paper
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        minWidth: 260,
        maxWidth: 300,
        flexShrink: 0,
      }}
    >
      <UserAvatar
        user={employee}
        size={96}
        showName={false}
        sx={{ justifyContent: "center" }}
      />

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5">{getUserFullName(employee)}</Typography>
        <Chip
          label={company.title}
          size="small"
          sx={{
            mt: 1,
            backgroundColor: `${SLATE[700]}`,
            color: "primary.light",
            fontWeight: 500,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          width: "100%",
          mt: 1,
        }}
      >
        <InfoRow
          icon={<BusinessIcon fontSize="small" />}
          label={company.department}
          caption="Department"
        />
        <InfoRow
          icon={<EmailIcon fontSize="small" />}
          label={email}
          caption="Email"
        />
        <InfoRow
          icon={<PhoneIcon fontSize="small" />}
          label={phone}
          caption="Phone"
        />
        <InfoRow
          icon={<LocationOnIcon fontSize="small" />}
          label={`${address.address}, ${address.city}`}
          caption="Location"
        />
        <InfoRow
          icon={<WorkIcon fontSize="small" />}
          label={company.name}
          caption="Company"
        />
      </Box>
    </Paper>
  );
};
