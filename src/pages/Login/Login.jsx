import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/Auth/auth-operations';
import {FormTitle, LoginFormStyles } from './Login.styled';
import { NavLink } from 'react-router-dom';




const LoginPage = () => {
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      dispatch(
        logIn({
          email: form.elements.email.value.toString(),
          password: form.elements.password.value.toString(),
        })
      );
      form.reset();
  
    };

    
    return(
        <Section>
            <Container>
            <FormTitle>Login to Account</FormTitle>
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
                <label className='label' htmlFor='password'>
                    <div className='descr-div'>
                        
                        <span className="input-title">Password</span>
                    </div>
                    <input className="input"
                    type="text"
                    name="password"
                    title="Name may contain letters, apostrophe, dash and spaces. For example luffy@gmail.com, mango-sushi@gmail.com"
                    required
                    placeholder=''
                    id='password'
                    />
                </label>
                <button className="btn btn-primary btn-block btn-large" 
                type="submit">Log In
                </button>
            </LoginFormStyles>
            <NavLink className="link" to="/forgot-password">
                FORGOT-PASSWORD
            </NavLink>   
            </Container>
        </Section>
    );
};


export default LoginPage;