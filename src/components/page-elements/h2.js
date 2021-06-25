import React from 'react'
import styled from 'styled-components'
import { AutoLink } from './heading-link'

export const StyledH2 = styled.h2`
  font-size: 16px;
  
  ${AutoLink}
`

export const H2 = props => {
  return <StyledH2 {...props}>{props.children}</StyledH2>
}
