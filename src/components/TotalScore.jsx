import styled from "styled-components";
const TotalScore = ({ score, hscore }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Current Score</p>
      <br/>
      <h1>{hscore}</h1>
      <p>Highest Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
    color: red;
  }
`;
