import {SectionStyle} from './Section.styled';


export const Section = ({children}) => {
    return (
        <SectionStyle>
            {children}
        </SectionStyle>
    );
};