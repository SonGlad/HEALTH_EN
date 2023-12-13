import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import { SignUp } from "components/Register/SignUp/SignUp";
import { YourGoal } from "components/Register/YourGoal/YourGoal";
import { SelectGender } from "components/Register/SelectGender/SelectGender";
import { BodyParametrs } from "components/Register/BodyParametrs/BodyParametrs";
import { YourActivity } from "components/Register/YourActivity/YourActivity";



const RegisterPage = () => {


    return(
        <Section>
            <Container>
                <h1>Welcome to the HealthyHub REGISTER Page</h1>
                <SignUp/>
                <YourGoal/> 
                <SelectGender/> 
                <BodyParametrs/>  
                <YourActivity/>
            </Container>
        </Section>
    );
};


export default RegisterPage;