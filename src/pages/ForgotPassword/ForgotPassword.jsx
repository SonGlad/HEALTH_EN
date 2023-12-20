import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import {FormTitle, LoginFormStyles } from './ForgotPassword.styled';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/Auth/auth-operations';
import { NavLink } from 'react-router-dom';



const ForgotPasswordPage = () => {
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      dispatch(
        forgotPassword({
          email: form.elements.email.value.toString(),
        })
      );
      form.reset();
    };


    return(
        <Section>
            <Container>
                <FormTitle>Forgot Your Password?</FormTitle>
                <LoginFormStyles onSubmit={handleSubmit} autoComplete="on">
                    <label className='label' htmlFor='email'>
                        <div className='descr-div'>
                            <span className="input-title">Email</span>
                        </div>
                        <input className="input"
                        type="text"
                        name="email"
                        title="Name may contain letters, apostrophe, dash and spaces. For example luffy@gmail.com, mango-sushi@gmail.com"
                        required
                        placeholder=''
                        id='email'
                        />
                    </label>
                    <button className="btn btn-primary btn-block btn-large" 
                    type="submit">SEND
                    </button>
                    <NavLink className="link" to="/signin">Sign In</NavLink>
                </LoginFormStyles>  
            </Container>
        </Section>
    );
};


export default ForgotPasswordPage;