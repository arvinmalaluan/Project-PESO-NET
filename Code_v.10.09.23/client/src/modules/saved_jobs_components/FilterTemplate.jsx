import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const FilterTemplate = () => {
  return (
    <Stack
      sx={{
        height: "100%",
      }}
    >
      <TextField size="small" placeholder="Search here ..." />
      <Typography fontSize={18} mt={2} fontWeight={500}>
        Filter
      </Typography>

      <Filter
        title="Sort by"
        items={[
          "Date added (oldest)",
          "Date added (newest)",
          "Date published (oldest)",
          "Date published (newest)",
        ]}
      />

      <Filter
        title="Date saved"
        items={["This day", "This month", "This year"]}
      />
    </Stack>
  );
};

export default FilterTemplate;

const Filter = ({ title, items }) => {
  return (
    <>
      <Typography fontSize={16} mb={1} mt={1} fontWeight={500}>
        {title}
      </Typography>

      {items.map((item, idx) => {
        return (
          <FormControlLabel
            key={idx}
            sx={{
              height: 25,
              marginBottom: 0.5,
              userSelect: "none",
              marginLeft: 1,
            }}
            label={
              <Typography fontSize={14} fontWeight={300}>
                {item}
              </Typography>
            }
            control={<Checkbox size="small" />}
          />
        );
      })}
    </>
  );
};
