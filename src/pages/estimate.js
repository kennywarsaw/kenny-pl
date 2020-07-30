import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../assets/css/globalStyle'
import Button from '../components/button'

const StyledForm = styled.form`
    margin: 0 auto;
    background-color: hsl(255, 1%, 96%);
    font-family: 'Inter';
    max-width: 500px;
    padding: 25px;
    border-radius: 4px;
    box-shadow: 0 19px 25px -17px rgba(2, 31, 63, 0.1);
`

const StyledLabel = styled.label`
    margin: 30px 0 10px;
    display: block;
    font-size: 1.3rem;
    font-weight: 600;
`

const StyledInput = styled.input`
    font-size: 14px;
    font-family: 'Inter';
    border: none;
    width: 100%;
    border-radius: 4px;
    padding: 1rem 1.2rem;
    background-color: hsl(255, 100%, 100%);
    border: 1px solid hsl(240, 6%, 93%);
    font-size: 1.25rem;
    transition: .3s all;

    :active {
        border: 1px solid hsl(242, 100%, 66%);
    }
`

const EstimatePage = () => (
    <StyledForm>
        <GlobalStyle />
        <StyledLabel htmlFor="name">Imię i nazwisko</StyledLabel>
        <StyledInput type="text" name="name" id="name" placeholder="Jan Kowalski" />
        <StyledLabel htmlFor="email">E-mail</StyledLabel>
        <StyledInput type="e-mail" name="email" id="email" placeholder="hello@kenny.pl" />
        <StyledLabel htmlFor="message">Wiadomość</StyledLabel>
        <StyledInput as="textarea" type="text" name="message" id="message" placeholder="Opisz swój projekt, problemy i oczekiwania" />
        <Button type="submit" secondary>Wyślij formularz</Button>
    </StyledForm>
)

export default EstimatePage