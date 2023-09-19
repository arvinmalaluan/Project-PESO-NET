import InputFieldTemp from "./fields";

function Reference() {
  return (
    <>
      <InputFieldTemp
        title="Skills"
        fields={[
          "Full name",
          "Relationship to you",
          "Institution",
          "Contact Information",
        ]}
        is_replicable={true}
      />
    </>
  );
}

export default Reference;
