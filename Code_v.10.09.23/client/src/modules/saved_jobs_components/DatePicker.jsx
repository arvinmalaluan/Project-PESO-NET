import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { Stack } from "@mui/material";
import dayjs from "dayjs";
import { getApplication } from "../../context/CRUD_Operations";

export default function DatePicker({ setPayload, payload }) {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    getApplication(payload.custom_key)
      .then((return_data) => {
        const { data } = return_data;

        const new_date = dayjs(data.sched);
        const adjustedDate = new_date.subtract(8, "hour");
        setValue(adjustedDate);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (newValue) => {
    const formatted_date = format_date(newValue);

    setPayload({ ...payload, sched: formatted_date });
    setValue(newValue);
  };

  const format_date = (value) => {
    const inputDate = new Date(value);
    inputDate.setUTCHours(inputDate.getUTCHours() + 8);

    const year = inputDate.getUTCFullYear();
    const month = String(inputDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getUTCDate()).padStart(2, "0");
    const hours = String(inputDate.getUTCHours()).padStart(2, "0");
    const minutes = String(inputDate.getUTCMinutes()).padStart(2, "0");
    const seconds = String(inputDate.getUTCSeconds()).padStart(2, "0");
    const milliseconds = String(inputDate.getUTCMilliseconds()).padStart(
      3,
      "0"
    );
    const isoDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

    console.log(isoDate);
    return isoDate;
  };

  return (
    <Stack width="100%">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateTimePicker
          orientation="landscape"
          slotProps={{ actionBar: { actions: [] } }}
          value={value}
          onChange={handleChange}
        />
      </LocalizationProvider>
    </Stack>
  );
}
