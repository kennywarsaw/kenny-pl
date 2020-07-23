import React from 'react'
import styled from 'styled-components'
import Button from '../components/button'

const StyledLabel = styled.label`
    margin: 30px 0 10px;
    display: block;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Inter';
`

const StyledInput = styled.input`
    font-size: 14px;
`

const EstimatePage = () => (
    <from>
        <StyledLabel htmlFor="name">Imię i nazwisko</StyledLabel>
        <StyledInput type="text" name="name" id="name" />
        <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
        <StyledInput type="e-mail" name="email" id="email" />
        <StyledLabel>Wiadomość</StyledLabel>
        <StyledInput as="textarea" type="text" name="message" id="message" />
        <Button>Wyślij</Button>
    </from>
)

export default EstimatePage