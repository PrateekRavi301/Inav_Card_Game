import styled from "styled-components";

const RoleDice = ({ rolecard, currentcard }) => {
  const imagesrc = '/images/cards/'+currentcard+'.png';
  return (
    <DiceContainer>
      <div className="dice" onClick={rolecard}>
        <img src={imagesrc} alt="card 1"/>
      </div>
      <p>Click on Card to shuffle</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  img {
    border: 5px solid red;
    border-radius: 25px;
  }

  p {
    font-size: 24px;
    color: red;
  }
`;
