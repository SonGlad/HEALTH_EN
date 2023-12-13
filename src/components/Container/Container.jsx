import PropTypes from 'prop-types';
import { ContainersStyle } from './Container.styled';



export const Container = ({children}) => {
    return(
        <ContainersStyle>
            {children}
        </ContainersStyle>
    );
};



Container.propTypes = {
    children: PropTypes.node
};