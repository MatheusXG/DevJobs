import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Slider = styled.div`
  background-color: white;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  position: relative;

  :hover > button {
    background-color: #939bf4;
  }
`;

export const Button = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  pointer-events: none;
  top: 5px;
  left: 5px;
  position: absolute;
  background-color: #5964e0;

  transition: all 300ms ease-in-out;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const Checkbox = styled.input`
  display: none;

  &:checked ~ ${Slider} > ${Button} {
    left: 29px;
  }
`;
