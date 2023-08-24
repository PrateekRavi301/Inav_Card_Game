import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button} from "../styled/Button";
import Rules from "./Rules";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [hscore, sethScore] = useState(0);
  const [selectedcardColor, setSelectedcardColor] = useState("");
  const [selectedcardType, setSelectedcardType] = useState("");
  const [selectedcardSuit, setSelectedcardSuit] = useState("");
  const [selectedcardName, setSelectedcardName] = useState("");
  const [currentcard, setCurrentcard] = useState("clubs_A");
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const cardColor = ["Black","Red"];
  const cardType = ["2-9","Face Card"];
  const cardSuit = ["\u2663","\u2660","\u2665","\u2666"];//club,spade,heart,diamond
  const cardName = ['A','2','3','4','5','6','7','8','9','J','Q','K'];

  const rolecard = () => {
    if (!selectedcardColor) {
      setError("You have not selected any card color");
      return;
    }
    if (!selectedcardType) {
      setError("You have not selected any card type");
      return;
    }
    if (!selectedcardSuit) {
      setError("You have not selected any card suit");
      return;
    }
    if (!selectedcardName) {
      setError("You have not selected any card name");
      return;
    }

    const randomcardSuit = cardSuit[Math.floor(Math.random()*cardSuit.length)];
    const randomcardName = cardName[Math.floor(Math.random()*cardName.length)];
    var randomcardColor = "";
    var randomcardType = "";

    var temp = "";
    if(randomcardSuit==="\u2663"){
      temp = "clubs_"+randomcardName;
      randomcardColor = "Black";
    }else if(randomcardSuit==="\u2660"){
      temp = "spades_"+randomcardName;
      randomcardColor = "Black";
    }else if(randomcardSuit==="\u2665"){
      temp = "hearts_"+randomcardName;
      randomcardColor = "Red";
    }else{
      temp = "diamonds_"+randomcardName ;
      randomcardColor = "Red";
    }
    if(randomcardName==="A" || randomcardName==="J" || randomcardName==="Q" || randomcardName==="K"){
      randomcardType = "Face Card";
    }else{
      randomcardType = "2-9";
    }
  
    setCurrentcard(temp);
   

    if (selectedcardColor === randomcardColor) {
      console.log(selectedcardColor+"="+randomcardColor);
      setError((prev) => prev + "| +1 for correct card color ");
      setScore((prev) => prev + 1);
    } else {
      console.log(selectedcardColor+"!="+randomcardColor);
      setError((prev) => prev + "| -1 for wrong card color ");
      setScore((prev) => prev - 1);
    }

    setSelectedcardColor(undefined);


    if (selectedcardType === randomcardType) {
      console.log(selectedcardType+"="+randomcardType);
      setError((prev) => prev + "| +10 for correct card type ");
      setScore((prev) => prev + 10);
    } else {
      console.log(selectedcardType+"!="+randomcardType);
      setError((prev) => prev + "| -1 for wrong card type ");
      setScore((prev) => prev - 1);
    }

    setSelectedcardType(undefined);

    if (selectedcardSuit === randomcardSuit) {
      console.log(selectedcardSuit+"="+randomcardSuit);
      setError((prev) => prev + "| +100 for correct card suit ");
      setScore((prev) => prev + 100);
    } else {
      console.log(selectedcardSuit+"!="+randomcardSuit);
      setError((prev)=>prev + "| -1 for wrong card suit ");
      setScore((prev) => prev - 1);
    }

    setSelectedcardSuit(undefined);

    if (selectedcardName === randomcardName) {
      console.log(selectedcardName+"="+randomcardName);
      setError((prev)=>prev+"| +1000 for correct card name |");
      setScore((prev) => prev + 1000);
    } else {
      console.log(selectedcardName+"!="+randomcardName);
      setError((prev)=>prev+ "| -1 for wrong card name |");
      setScore((prev) => prev - 1);
    }
    sethScore((prev) => Math.max(prev,score));
    setSelectedcardName(undefined);
  };

  const resetScore = () => {
    setScore(0);
    sethScore(0);
    setError("");
    setCurrentcard("clubs_A");
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} hscore={hscore} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedcardColor={selectedcardColor}
          setSelectedcardColor={setSelectedcardColor}
          selectedcardType={selectedcardType}
          setSelectedcardType={setSelectedcardType}
          selectedcardSuit={selectedcardSuit}
          setSelectedcardSuit={setSelectedcardSuit}
          selectedcardName={selectedcardName}
          setSelectedcardName={setSelectedcardName}
          cardColor={cardColor}
          cardType={cardType}
          cardSuit={cardSuit}
          cardName={cardName}
        />
      </div>
      <RoleDice rolecard={rolecard} currentcard={currentcard}  />
      <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      
      {showRules && <Rules />}
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
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  background-color: black;
  .top_section {
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .footer {
  bottom: 0;
  padding-top: 40px;
  display: flex;
      align-items: center;
      justify-content: center;
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
