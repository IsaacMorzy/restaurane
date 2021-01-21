import React from "react"
import styled from "styled-components"
import Container from "../../layout/container/Container"
import ModernHeading from "../../components/typography/ModernHeading"
import OldSchoolHeading from "../../components/typography/OldSchoolHeading"

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.dark};
`
const StyledHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  @media (max-width: 869px) {
    display: flex;
    padding: 120px;
  }
  @media (max-width: 619px) {
    padding: 60px;
  }
  @media (max-width: 429px) {
    padding: 40px;
  }
  @media (max-width: 359px) {
    padding: 20px;
  }
`
const StyledHeadingsWrapper = styled.div`
  min-height: 240px;
  grid-column: 3/8;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default function AboutHeader() {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderGrid>
          <StyledHeadingsWrapper>
            <ModernHeading>About Us</ModernHeading>
            <OldSchoolHeading whiteColor>
              We believe that food brings people together, so we care for every
              detail, to make your visit here unforgettable.
            </OldSchoolHeading>
          </StyledHeadingsWrapper>
        </StyledHeaderGrid>
      </Container>
    </StyledHeader>
  )
}
