import { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { default_data } from "../../../templates/templates";

import Field from "./Field";

const WorkRelated = () => {
  const { skills_data, achievements_data, project_data } = default_data;

  const [skills, setSkills] = useState({
    skill: [""],
    proficiency: [""],
  });

  const [achievements, setAchievements] = useState({
    reward_name: [""],
    year_received: [""],
    issuer: [""],
    reward_description: [""],
  });

  const [projects, setProjects] = useState({
    project_name: [""],
    published_year: [""],
    project_description: [""],
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

  //   useEffect(() => {
  //     const stateItems = [skills, achievements, projects];
  //     const setStateItems = [setSkills, setAchievements, setProjects];

  //     stateItems.forEach((state, index) => {
  //       Object.keys(state).forEach((item) => {
  //         handleProcessing(item, state, "split", setStateItems[index]);
  //       });
  //     });
  //   }, [details.id]);

  //   useEffect(() => {
  //     const stateItems = [skills, achievements, projects];
  //     const setStateItems = [setSkills, setAchievements, setProjects];

  //     stateItems.forEach((state, index) => {
  //       Object.keys(state).forEach((item) => {
  //         handleProcessing(item, state, "join", setStateItems[index]);
  //       });
  //     });
  //   }, [skills, achievements, projects]);

  return (
    <>
      <Stack mt={2}>
        <Typography fontSize={16} fontWeight={500} mb={1}>
          Skills
        </Typography>

        {skills.skill.map((duplicate_item, duplicate_idx) => {
          return (
            <Stack key={duplicate_idx} mt={duplicate_idx !== 0 ? 2 : 0}>
              {skills_data.map((item, idx) => {
                return (
                  <Field
                    key={idx}
                    index={idx}
                    dupli_index={duplicate_idx}
                    length={skills_data.length}
                    placeholder={item.placeholder}
                    name={item.name}
                    setAdd={addField}
                    setVal={handleInputChange}
                    state={skills}
                    setState={setSkills}
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
          Achievements and Rewards
        </Typography>

        {achievements.reward_name.map((duplicate_item, duplicate_idx) => {
          return (
            <Stack key={duplicate_idx} mt={duplicate_idx !== 0 ? 2 : 0}>
              {achievements_data.map((item, idx) => {
                return (
                  <Field
                    key={idx}
                    index={idx}
                    dupli_index={duplicate_idx}
                    length={achievements_data.length}
                    placeholder={item.placeholder}
                    name={item.name}
                    setAdd={addField}
                    setVal={handleInputChange}
                    state={achievements}
                    setState={setAchievements}
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
          Projects
        </Typography>

        {projects.project_name.map((duplicate_item, duplicate_idx) => {
          return (
            <Stack key={duplicate_idx} mt={duplicate_idx !== 0 ? 2 : 0}>
              {project_data.map((item, idx) => {
                return (
                  <Field
                    key={idx}
                    index={idx}
                    dupli_index={duplicate_idx}
                    length={project_data.length}
                    placeholder={item.placeholder}
                    name={item.name}
                    setAdd={addField}
                    setVal={handleInputChange}
                    state={projects}
                    setState={setProjects}
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
};

export default WorkRelated;
