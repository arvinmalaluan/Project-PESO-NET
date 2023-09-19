import InputFieldTemp from "./fields";

function Personal() {
  return (
    <>
      <InputFieldTemp
        title="Contact Information"
        fields={[
          "Full name",
          "Phone number",
          "Email Address",
          "Resume Objective",
        ]}
        is_replicable={false}
      />

      <InputFieldTemp
        title="Education"
        fields={[
          "Education Level",
          "Name of Institution",
          "Year Graduated",
          "Achievements",
        ]}
        is_replicable={true}
      />

      <InputFieldTemp
        title="Languages"
        fields={["Language", "Proficiency"]}
        is_replicable={true}
      />

      <InputFieldTemp
        title="Hobbies and Interest"
        fields={["Hobbies and Interest"]}
        is_replicable={true}
      />
    </>
  );
}

export default Personal;
