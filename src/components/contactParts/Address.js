import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  color: ${props => props.theme.colors.grey};
  line-height: 1.8;
`

export default function Address() {
  return (
    <div>
      <StyledParagraph>Open View restaurant</StyledParagraph>
      <StyledParagraph>Malindi</StyledParagraph>
      <StyledParagraph>90100 Palermo PA</StyledParagraph>
    </div>
  )
}
