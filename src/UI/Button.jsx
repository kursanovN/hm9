import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  const {
    children,
    onClick,
    disabled,
    bgColor = '#4a026b',
    color = '#fff',
    brRadius = '10px',
    hoverBgColor = '#600a87',
  } = props

  return (
    <ButtonStyle
      onClick={onClick}
      disabled={disabled}
      borderRadius={brRadius}
      backgroundColor={bgColor}
      color={color}
      hoverBackgroundColor={hoverBgColor}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 18px;
  gap: 10px;
  border: none;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  flex: none;
  order: 0;
  flex-grow: 0;

  :hover {
    background-color: ${(props) => props.hoverBackgroundColor};
  }

  :active {
    background-color: #520b73;
  }
`