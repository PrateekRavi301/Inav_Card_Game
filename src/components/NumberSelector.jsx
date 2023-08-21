import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedcardColor,
  setSelectedcardColor,
  selectedcardType,
  setSelectedcardType,
  selectedcardSuit,
  setSelectedcardSuit,
  selectedcardName,
  setSelectedcardName,
  cardColor,
  cardType,
  cardSuit,
  cardName,
}) => {
  

  const cardColorSelectorHandler = (value) => {
    setSelectedcardColor(value);
    setError("");
  };
  const cardTypeSelectorHandler = (value) => {
    setSelectedcardType(value);
    setError("");
  };
  const cardSuitSelectorHandler = (value) => {
    setSelectedcardSuit(value);
    setError("");
  };
  const cardNameSelectorHandler = (value) => {
    setSelectedcardName(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {cardColor.map((value, i) => (
          <Box
            isSelected={value === selectedcardColor}
            key={i}
            onClick={() => cardColorSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <div className="flex">
      {cardType.map((value, i) => (
          <Box
            isSelected={value === selectedcardType}
            key={i}
            onClick={() => cardTypeSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <div className="flex">
      {cardSuit.map((value, i) => (
          <Box
            isSelected={value === selectedcardSuit}
            key={i}
            onClick={() => cardSuitSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <div className="flex">
      {cardName.map((value, i) => (
          <Box
            isSelected={value === selectedcardName}
            key={i}
            onClick={() => cardNameSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
    color: red;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid red;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  
`;
