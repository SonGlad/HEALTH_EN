// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const Container = styled.div``;
// export const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 0 auto;
//   width: 320px;
//   padding: 0 10px;

//   @media screen and (min-width: 834px) {
//     width: 834px;
//     padding: 0 27px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 1440px;
//     padding: 0 34px;
//   }
// `;
// export const LogoBox = styled.div`
//   color: ${props => props.theme.color.primary_grey};
//   font-size: 16px;
//   font-weight: 700;

//   @media screen and (min-width: 834px) {
//     font-size: 22px;
//   }
// `;

// export const Unauthorized = styled.div`
//   color: ${p => p.theme.color.primary_white};
//   font-size: 12px;
//   font-weight: 400;
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   margin-right: 10px;

//   @media screen and (min-width: 834px) {
//     font-size: 14px;
//     margin-right: 27px;
//   }

//   @media screen and (min-width: 834px) {
//     margin-right: 34px;
//   }
// `;
// export const ActiveLink = styled(Link)`
//   color: ${p => p.theme.color.primary_green_lite};
// `;
// export const DefaultLink = styled(Link)`
//   color: ${p => p.theme.color.primary_white};
// `;

// export const AvatarImg = styled.img`
//   width: 26px;
//   @media screen and (min-width: 834px) {
//     width: 28px;
//   }
// `;

import { styled } from 'styled-components';

export const AuthNavStyles = styled.div`
  display: flex;
  align-items: center;

  .link {
    text-decoration: none;
    /* padding: 12px; */
    font-weight: 400;
    color: ${p => p.theme.color.primary_white};
    font-size: 12px;
    letter-spacing: 1px;
    transition: color 0.25s;

    @media screen and (min-width: 834px) {
      font-size: 14px;
    }

    &:hover,
    &:focus {
      color: #9bb537;
    }
  }

  .link.active {
    color: #9bb537;
  }
`;

export const AvatarImg = styled.img`
  width: 26px;
  margin-left: 6px;
  @media screen and (min-width: 834px) {
    width: 28px;
  }
`;
