import { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";

import json_templates from "./../../templates/templates.json";
import FieldTemplate from "./field";

function Reference({ details, set }) {
  const { reference_data } = json_templates;

  const [references, setReferences] = useState({
    reference_full_name: [""],
    relationship_to_you: [""],
    institution: [""],
    contact_information: [""],
  });

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
    const stateItems = [references];
    const setStateItems = [setReferences];

    stateItems.forEach((state, index) => {
      Object.keys(state).forEach((item) => {
        handleProcessing(item, state, "split", setStateItems[index]);
      });
    });
  }, [details.id]);

  useEffect(() => {
    const stateItems = [references];
    const setStateItems = [setReferences];

    stateItems.forEach((state, index) => {
      Object.keys(state).forEach((item) => {
        handleProcessing(item, state, "join", setStateItems[index]);
      });
    });
  }, [references]);

  return (
    <>
      <Stack mt={2}>
        <Typography fontSize={16} fontWeight={500} mb={1}>
          Skills
        </Typography>

        {references.reference_full_name.map((duplicate_item, duplicate_idx) => {
          return (
            <Stack key={duplicate_idx} mt={duplicate_idx !== 0 ? 2 : 0}>
              {reference_data.map((item, idx) => {
                return (
                  <FieldTemplate
                    key={idx}
                    index={idx}
                    dupli_index={duplicate_idx}
                    length={reference_data.length}
                    placeholder={item.placeholder}
                    name={item.name}
                    setAdd={addField}
                    setVal={handleInputChange}
                    state={references}
                    setState={setReferences}
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

export default Reference;
