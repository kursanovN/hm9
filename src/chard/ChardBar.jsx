import React from 'react'
import styled from 'styled-components'

const ChartsBar = ({ label, currentPrise, maximumPrise }) => {
  const fillHeight = Math.round((100 * currentPrise) / maximumPrise)

  return (
    <ChartsBarStyled>
      <ChartBarInner className="chart-bar_inner">
        <ChartBarFill
          className="chart-bar_fill"
          style={{ height: fillHeight }}
        ></ChartBarFill>
      </ChartBarInner>
      <ChartBarLabel>{label}</ChartBarLabel>
    </ChartsBarStyled>
  )
}

export default ChartsBar

const ChartsBarStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ChartBarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const ChartBarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`

const ChartBarLabel = styled.p`
  font-weight: bold;
  font-size: 0.6rem;
  text-align: center;
`
