import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play card game</h2>
      <div className="text">
        <p>Select your choices. Each choices contains different points.</p>
        <p>Click on card image.</p>
        <p>
          After click on card if selected choices are same as the card then you
          will get points as following:
          <ul><li>+1 for correct color</li>
          <li>+10 for correct type</li>
          <li>+100 for correct suit</li>
          <li>+1000 for correct name</li></ul>
        </p>
        <p>If you get wrong guess then 1 point will be dedcuted for each choice. </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
