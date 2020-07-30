import styled, { css } from 'styled-components'

const Button = styled.button`
    background-color: hsl(242, 100%, 66%);
    padding: 13px 31px;
    color: hsl(0, 100%, 100%);
    border: none;
    border-radius: 2px;
    font-size: 1.2rem;
    transition: .3s all;

    :hover {
        opacity: 0.95;
        transform: translate(0px, -2px);
    }

    ${props => props.secondary && css`
            background-color: hsl(0, 0%,0%);
            margin-top: 10px;
    `}
`

export default Button