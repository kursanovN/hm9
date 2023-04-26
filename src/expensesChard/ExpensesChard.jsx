import React from 'react'
import styled from 'styled-components'

const ExpensesCard = ({ el }) => {
  const dateMonth = new Date(el.date).toLocaleString('en-En', {
    month: 'long',
  })

  const fullYear = new Date(el.date).getFullYear().toString()

  const date = new Date(el.date).getDate()

  return (
    <Card>
      <CardContainer>
        <ContainerOne>
          <DateContainer>
            <One>{dateMonth}</One>
            <Two>{+date}</Two>
            <Three>{+fullYear}</Three>
          </DateContainer>
          <Title>{el.title}</Title>
        </ContainerOne>

        <Price>$ {el.price}</Price>
      </CardContainer>
    </Card>
  )
}

export default ExpensesCard

const Card = styled.div`
  background-color: #4b4b4b;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 748px;
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const ContainerOne = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const DateContainer = styled.div`
  background-color: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 8px 23.11px 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #fff;
  width: 110px;
`

const One = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 12px;
  text-transform: capitalize;
`

const Two = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 15px;
  margin-top: 8px;
`

const Three = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 15px;
  margin-top: 8px;
`

const Title = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`

const Price = styled.span`
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 10px 18px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`
