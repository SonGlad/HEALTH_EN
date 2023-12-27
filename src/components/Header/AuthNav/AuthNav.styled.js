import { styled } from 'styled-components';


export const AuthNavStyles = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  .link {
    text-decoration: none;
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
      color: ${p => p.theme.color.primary_green_lite};
    }
  }

  .link.active {
    color: ${p => p.theme.color.primary_green_lite};
  }

  .header-span{
    text-decoration: none;
    font-weight: 400;
    color: ${p => p.theme.color.primary_white};
    font-size: 12px;
    letter-spacing: 1px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const AvatarImg = styled.img`
  width: 26px;
  margin-left: 6px;
  @media screen and (min-width: 834px) {
    width: 28px;
  }
`;
