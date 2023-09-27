import json_templates from "./../../templates/templates.json";

import { Stack, Typography } from "@mui/material";

import FieldTemplate from "./field";
import { useEffect, useState } from "react";

function Personal({ details, set }) {
  const { contact_data, education_data, language_data, hobbies_interest_data } =
    json_templates;

  const [personal, setPersonal] = useState({
    fullname: [""],
    phone_number: [""],
    email_address: [""],
    resume_objective: [""],
  });

  const [education, setEducation] = useState({
    education_level: [""],
    name_of_institution: [""],
    year_graduated: [""],
    achievements: [""],
  });

  const [languages, setLanguages] = useState({ languages: [""] });
  const [hobbies, setHobbies] = useState({ hobbies_interest: [""] });

  const handleInputChange = (name, index, value, setState) => {
    setState((prevState) => ({
      ...prevState,
      [name]: prevState[name].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addField = (state, setState) => {
    {
      Object.keys(state).map((item) => {
        setState((prevState) => ({
          ...prevState,
          [item]: [...prevState[item], ""],
        }));
      });
    }
  };

  const handleProcessing = (item, state, reason, setState) => {
    let processed;

    if (reason === "join") {
      processed = state[item].join("_+_");

      set((prevState) => ({
        ...prevState,
        [item]: processed,
      }));
    }

    if (reason === "split") {
      processed = details[item].split("_+_");

      setState((prevState) => ({
        ...prevState,
        [item]: processed,
      }));
    }
  };

  useEffect(() => {
    const stateItems = [personal, education, languages, hobbies];
    const setStateItems = [setPersonal, setEducation, setLanguages, setHobbies];

    stateItems.forEach((state, index) => {
      Object.keys(state).forEach((item) => {
        handleProcessing(item, state, "split", setStateItems[index]);
      });
    });
  }, [details.id]);

  useEffect(() => {
    const stateItems = [personal, education, languages, hobbies];
    const setStateItems = [setPersonal, setEducation, setLanguages, setHobbies];

    stateItems.forEach((state, index) => {
      Object.keys(state).forEach((item) => {
        handleProcessing(item, state, "join", setStateItems[index]);
      });
    });
  }, [personal, education, languages, hobbies]);

  return (
    <>
      <Stack mt={2}>
        <Typography fontSize={16} fontWeight={500} mb={1}>
          Contact Information
        </Typography>

        {personal.fullname.map((duplicate_item, duplicate_idx) => {
          return (
            <Stack key={duplicate_idx} mt={duplicate_idx !== 0 ? 2 : 0}>
              {contact_data.map((item, idx) => {
                return (
                  <FieldTemplate
                    key={idx}
                    index={idx}
                    dupli_index={duplicate_idx}
                    length={contact_data.length}
                    placeholder={item.placeholder}
                    name={item.name}
                    setAdd={addField}
                    setVal={handleInputChange}
                    state={personal}
                    setState={setPersonal}
                    add={false}
                  />
                );
              })}
            </Stack>
          );
        })}
      </Stack>

      <Stack mt={2}>
        <Typography fontSize={16} fontWeight={500} mb={1}>
          Education
        </Typography>

        {education.education_level.map((duplicate_item, duplicate_idx) => {
          return (
            <Stack mt={duplicate_idx !== 0 ? 2 : 0} key={duplicate_idx}>
              {education_data.map((item, idx) => {
                return (
                  <FieldTemplate
                    key={idx}
                    index={idx}
                    dupli_index={duplicate_idx}
                    length={education_data.length}
                    placeholder={item.placeholder}
                    name={item.name}
                    setAdd={addField}
                    setVal={handleInputChange}
                    state={education}
                    setState={setEducation}
                    add={true}
                  />
                );
              })}
            </Stack>
          );
        })}
      </Stack>

      <Stack mt={2}>
        <Typography fontSize={16} fontWeight={500} mb={1}>
          Languages
        </Typography>

        {languages.languages.map((duplicate_item, duplicate_idx) => {
          return (
            <Stack key={duplicate_idx} mt={duplicate_idx !== 0 ? 2 : 0}>
              {language_data.map((item, idx) => {
                return (
                  <FieldTemplate
                    key={idx}
                    index={idx}
                    dupli_index={duplicate_idx}
                    length={language_data.length}
                    placeholder={item.placeholder}
                    name={item.name}
                    setAdd={addField}
                    setVal={handleInputChange}
                    state={languages}
                    setState={setLanguages}
                    add={true}
                  />
                );
              })}
            </Stack>
          );
        })}
      </Stack>

      <Stack mt={2}>
        <Typography fontSize={16} fontWeight={500} mb={1}>
          Hobbies and Interest
        </Typography>

        {hobbies.hobbies_interest.map((duplicate_item, duplicate_idx) => {
          return (
            <Stack key={duplicate_idx} mt={duplicate_idx !== 0 ? 2 : 0}>
              {hobbies_interest_data.map((item, idx) => {
                return (
                  <FieldTemplate
                    key={idx}
                    index={idx}
                    dupli_index={duplicate_idx}
                    length={hobbies_interest_data.length}
                    placeholder={item.placeholder}
                    name={item.name}
                    setAdd={addField}
                    setVal={handleInputChange}
                    state={hobbies}
                    setState={setHobbies}
                    add={true}
                  />
                );
              })}
            </Stack>
          );
        })}
      </Stack>
    </>
  );
}

export default Personal;
