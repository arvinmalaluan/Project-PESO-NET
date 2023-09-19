import InputFieldTemp from "./fields";

function WorkRelated() {
  return (
    <>
      <InputFieldTemp
        title="Skills"
        fields={["Skill", "Proficiency"]}
        is_replicable={true}
      />

      <InputFieldTemp
        title="Achievements and Rewards"
        fields={[
          "Reward name",
          "Year recieved",
          "Issuer/Organization",
          "Description (Optional)",
        ]}
        is_replicable={true}
      />

      <InputFieldTemp
        title="Projects"
        fields={[
          "Project name",
          "Published Year/Year Developed",
          "Description (Optional)",
        ]}
        is_replicable={true}
      />
    </>
  );
}

export default WorkRelated;
