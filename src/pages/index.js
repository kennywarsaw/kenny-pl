import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../assets/css/globalStyle'
import MainText from '../components/mainText'
import Button from '../components/button'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vw;
`

const SplashPage = () => (
    <Wrapper>
        <GlobalStyle />
        <MainText />
        <Button>Zamów wycenę</Button>
    </Wrapper>
);

export default SplashPage;