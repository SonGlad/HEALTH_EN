import styled from 'styled-components';


export const Container = styled.div`


  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 16px;
    padding-top: 20px;

    @media screen and (min-width: 834px) {
      font-size: 22px;
      line-height: 1.5;
      padding-top: 20px;
      }
      @media (min-width: 1440px) {
    padding-top: 20px;
   
  }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 16px;
    height: 1040px; 
  overflow-y: auto;
  scrollbar-width: thin; 
  scrollbar-color: transparent transparent; 
  &::-webkit-scrollbar {
    width: 6px; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; 
  }
    

    & > :nth-last-child(-n + 2) {
      display: none;
    }

    @media screen and (min-width: 834px) {
      flex-direction: row;
      flex-wrap: wrap;
      height: 510px; 
      gap: 20px;
      & > :nth-last-child(-n + 2) {
        display: flex;
      }
    }

    @media screen and (min-width: 1440px) {
      font-size: 22px;
      line-height: 1.5;
      width: 676px;
      display: flex;
      
     
    }
  }

  li {
    border-radius: 12px;
    background: ${props => props.theme.color.primary_black_2};
    display: flex;
    align-items: center;
    padding: 20px 24px;
    gap: 20px;

    @media screen and (min-width: 834px) {
      width: calc((100% - 20px) / 2);
    }

    img {
      width: 46px;
      height: 46px;
    }
  }
`;

export const ContentWrapper = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 2px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  span {
    color: ${props => props.theme.color.primary_grey};
    font-weight: 500;
    margin-left: 6px;
  }
`;




export const DesctopContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 60px;

  @media (min-width: 834px) {
    padding-top: 20px;
    padding-bottom: 60px;
  }
  @media (min-width: 1440px) {
    padding-top: 0;
    display: flex;
    gap: 44px;
    padding-bottom: 60px;
  }
`;

export const StyledImg = styled.img`
  height: 312px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    height: 396px;
    width: 380px;
  }
  @media (min-width: 1440px) {
    height: 560px;
    width: 536px;
    margin-right: 0;
    margin-left: 110px;
 
   
  }
`;

export const ProductsList = styled.div`
  @media (min-width: 320px) {
    padding-top: 24px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 834px) {
    width: 780px;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    
  }
  @media (min-width: 1440px) {
    width: 680px;
    padding: 0;
    display: flex;
    align-items: flex-start;
  }
`;