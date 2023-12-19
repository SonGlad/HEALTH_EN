import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import { SignUp } from "components/Register/SignUp/SignUp";
import { YourGoal } from "components/Register/YourGoal/YourGoal";
import { SelectGender } from "components/Register/SelectGender/SelectGender";
import { BodyParametrs } from "components/Register/BodyParametrs/BodyParametrs";
import { YourActivity } from "components/Register/YourActivity/YourActivity";
import { useState } from "react";


const RegisterPage = () => {
  const [currentComponent, setCurrentComponent] = useState(0);


  const handleNext = () => {
    setCurrentComponent((current) => current + 1);
  };


  const handleBack = () => {
    setCurrentComponent((current) => current - 1);
  };


  const components = [
    <SignUp onNext={handleNext} />,
    <YourGoal onNext={handleNext} onBack={handleBack} />,
    <SelectGender onNext={handleNext} onBack={handleBack} />,
    <BodyParametrs onNext={handleNext} onBack={handleBack} />,
    <YourActivity onBack={handleBack} />,
  ];

  return (
    <Section>
      <Container>{components[currentComponent]}</Container>
    </Section>
  );
};

export default RegisterPage;
