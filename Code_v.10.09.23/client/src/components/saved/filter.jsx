import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function FilterTemp() {
  const CheckBoxItem = ({ title, items }) => {
    return (
      <>
        <Typography fontSize={16} mb={1} mt={1} fontWeight={500}>
          {title}
        </Typography>

        {items.map((item) => {
          return (
            <FormControlLabel
              sx={{
                height: 25,
                marginBottom: 0.5,
                userSelect: "none",
                marginLeft: 1,
              }}
              label={item}
              control={<Checkbox size="small" />}
            />
          );
        })}
      </>
    );
  };
  return (
    <>
      <Stack
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.12)",
          height: "83vh",
          padding: 2,
        }}
      >
        <TextField size="small" placeholder="Search here ..." />
        <Typography fontSize={18} mt={2} fontWeight={500}>
          Filter
        </Typography>

        <CheckBoxItem
          title="Type"
          items={["All", "Job Post", "Community Post"]}
        />

        <CheckBoxItem
          title="Sort by"
          items={[
            "Date added (oldest)",
            "Date added (newest)",
            "Date published (oldest)",
            "Date published (newest)",
          ]}
        />

        <CheckBoxItem
          title="Date saved"
          items={["This day", "This month", "This year"]}
        />
      </Stack>
    </>
  );
}

export default FilterTemp;
