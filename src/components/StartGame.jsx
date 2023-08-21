import styled from "styled-components";
import { Button } from "../styled/Button";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="src/images/card.jpg" />
      </div>
      <div className="content">
        <h1>Card Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
      <div className="footer">
        <h4>
          All Rights Reserved. Made with&nbsp;&#x1f495;&nbsp;in India
          <div className='social-container'>
            <a href='https://twitter.com/PRATEEKRAVI011' className='twitter'><FaTwitter /></a>
            <a href='https://www.linkedin.com/in/prateek-ravi-1708081a6' className='linkedin'><FaLinkedin/></a>
            <a href='https://github.com/PrateekRavi301' className='github'><FaGithub /></a>
          </div>
        </h4>
      </div>
    </Container>

  );
};

export default StartGame;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  
  .content {
    color: red;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
  .footer {
  position: fixed;
  bottom: 0;
  color: white;
    h4 {
      margin-bottom: 0px;
    }
    a {
      color: white;
    }
    .social-container {
      display: flex;
      align-items: center;
      flex-direction: row;
      font-weight: bold;
      font-size: 30px;
      margin-left: 30%;
      .twitter {
        margin-right: 10px;
      }
      .linkedin {
        margin-right: 10px;
      }
      .github {
        margin-right: 10px;
      }
    }
}
`;
