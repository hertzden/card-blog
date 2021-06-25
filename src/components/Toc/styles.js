import styled, { css } from 'styled-components'
import { BookContent } from 'styled-icons/boxicons-regular'
import { Close as Cross } from 'styled-icons/material'


export const TocDiv = styled.aside`
  background: var(--color-boxTOCBackground);
  border-radius: 1rem;
  transition: transform 250ms ease, box-shadow 250ms ease, color 250ms ease;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);
  padding: 2rem;
  margin: 0 0 3rem 0;
  height: max-content;
  max-height: 80vh;
  z-index: 3;
  line-height: 2.4rem;
  right: 1em;
  max-width: 27rem;
  overscroll-behavior: none;
  grid-row: span 10;
  button {
    background: transparent;
    border: 0;
  }
  nav {
    max-height: 78vh;
    overflow-y: scroll;
    display: flex;
    flex-flow: column;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`



export const Title = styled.h2`
  margin: 0;
  padding-bottom: 0.5em;
  display: flex;
  align-items: center;
  color: var(--color-gray);
`

export const TocLink = styled.a`
  cursor: pointer;
  color: ${p => (p.active ? `var(--color-c)` : `var(--color-gray)`)};
  font-weight: ${props => props.active && `400`};
  display: inline-flex;
  width: fit-content;
  margin-left: ${props => props.depth + `em`};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  &:before {
    bottom: 0;
  }
`

export const TocIcon = styled(BookContent)`
  width: 3rem;
  margin-right: 0.2em;
`

const openerCss = css`
  padding: 1rem;
  background: var(--color-background);
  color: var(--color-text);
  border: 2px solid var(--color-text);
  border-left: none;
  border-radius: 0 10px 10px 0;
  transform: translate(${props => (props.open ? `-100%` : 0)});
`
export const ToggleButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  position: fixed;
  left: 0;
  top: 30%;
  z-index: 2;
`

export const ToggleButtonClose = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  right: 5px;
  font-size: 2rem;
  color: var(--color-text);
`

export const TocToggle = styled(Cross).attrs(props => ({
  as: props.opener && BookContent,
  size: props.size || `1.6em`,
}))`
  z-index: 2;
  transition: 0.3s;
  justify-self: end;
  :hover {
    transform: scale(1.1);
  }
  ${props => props.opener && openerCss};
`
