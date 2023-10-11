import { Stack, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function TextF({
  label,
  placeholder,
  formData,
  setFormData,
  type,
  setCheck,
  enter,
}) {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (event) => {
    if (setCheck.page === "signup") {
      placeholder === "Email address" &&
        setFormData({ ...formData, email: event.target.value });

      placeholder === "Password" &&
        setFormData({ ...formData, password: event.target.value });

      placeholder === "Confirm your password" &&
        setFormData({ ...formData, confpass: event.target.value });
    } else {
      placeholder === "Email or username" &&
        setFormData({ ...formData, identifier: event.target.value });

      placeholder === "Password" &&
        setFormData({ ...formData, password: event.target.value });
    }
  };

  const onEnter = (e) => {
    e.key === "Enter" && enter();
  };

  const handleBlur = (event) => {
    setIsEmpty(!Boolean(event.target.value));
  };

  useEffect(() => {
    if (setCheck.bool) {
      if (setCheck.page === "signup") {
        placeholder === "Email address" && setIsEmpty(!Boolean(formData.email));

        placeholder === "Password" && setIsEmpty(!Boolean(formData.password));

        placeholder === "Confirm your password" &&
          setIsEmpty(!Boolean(formData.confpass));
      } else {
        placeholder === "Email or username" &&
          setIsEmpty(!Boolean(formData.identifier));

        placeholder === "Password" && setIsEmpty(!Boolean(formData.password));
      }
    }
  });

  return (
    <>
      <Stack spacing={0.5}>
        <Typography fontSize={14} fontWeight={500}>
          {label}
        </Typography>
        <TextField
          placeholder={placeholder}
          type={type}
          size="small"
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }}
          onChange={handleChange}
          error={isEmpty}
          helperText={isEmpty ? "* field is required" : ""}
          onBlur={handleBlur}
          onKeyDown={onEnter}
        />
      </Stack>
    </>
  );
}

export default TextF;
