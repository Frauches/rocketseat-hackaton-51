import styled from 'styled-components';

const mainBlack = '#141414';
const white = '#F6F6F6';
const yellowHover = '#eab302';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 50px 0 90px;
  background-color: ${mainBlack};
  color: ${white};

  div {
    span {
      font-size: 34px;
      margin: 0;
    }
  }

  nav ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    

      li {
        height: inherit;
        padding: 30px;
        cursor: pointer;
        transition: all 0.25s ease-in;
        &:hover {
          background-color: ${yellowHover};
        }
      }     
  }
`;

export const MainContainerStyle = styled.div`  
  display: flex;
  background-color: ${white};
  padding: 40px 90px;
  height: 417px;
`

export const FooterStyle = styled.footer`
  display: flex;
  background-color: ${mainBlack};
  height: 100px;
`

export const InputTextStyle = styled.div`
  transition: all 0.25s ease;
  opacity: ${props => props.isHidden ? '0' : '1'};
  visibility: ${props => props.isHidden ? 'hidden' : 'visible'};

  label {
    font-size: 15px;
    display: inline;
    margin-right: 15px;

    &:after {
      content: ">";
    }
  }

  input {
    background-color: transparent !important;
    width: 500px;
    margin-top: 10px;
    font-size: 12px;
    padding: 15px;
    border: .1px solid #cecece;
    outline:none;
    font-family: 'Press Start 2P', cursive;
  }
`;

export const Button = styled.button`
  background-color: ${yellowHover};
  border: none;
  outline: none;
  margin: 15px;
  padding: 20px 35px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;

  &:hover {
    -webkit-box-shadow: -9px 8px 2px 5px rgba(0,0,0,1);
    -moz-box-shadow: -9px 8px 2px 5px rgba(0,0,0,1);
    box-shadow: -9px 8px 2px 5px rgba(0,0,0,1);
  }
`;

export const CarreiraContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;  
  overflow-x: hidden;
`;

export const Paragraph = styled.p`
  text-align: justify;
  text-justify: inter-word;
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 1.4;
`;

export const ItemContainer = styled.div`
  opacity: ${props => props.isActive ? 1 : 0};  
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  iframe {
    margin-right: 20px;
  }
`;