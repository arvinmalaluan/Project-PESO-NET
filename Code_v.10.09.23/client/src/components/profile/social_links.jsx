import { TextField } from "@mui/material";

const SocialLinks = ({ placeholder, value, formData, setFormData }) => {
  const handleChange = (event) => {
    placeholder === "Full name" &&
      setFormData({ ...formData, name: event.target.value });

    placeholder === "Bio" &&
      setFormData({ ...formData, bio: event.target.value });

    placeholder === "Location" &&
      setFormData({ ...formData, location: event.target.value });

    placeholder === "Portfolio Link" &&
      setFormData({ ...formData, portfolio_link: event.target.value });

    placeholder === "Educational Attainment" &&
      setFormData({ ...formData, educational_attainment: event.target.value });
  };

  return (
    <>
      <TextField
        placeholder={placeholder}
        value={value ? value : ""}
        size="small"
        sx={{ marginBottom: 1 }}
        inputProps={{ style: { fontSize: 14 } }}
        InputLabelProps={{ style: { fontSize: 14 } }}
        fullWidth
        onChange={handleChange}
      />
    </>
  );
};

export default SocialLinks;
