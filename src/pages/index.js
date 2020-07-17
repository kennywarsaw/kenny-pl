import React from 'react'
import GlobalStyle from '../assets/css/globalStyle'
import MainText from '../components/mainText'
import Button from '../components/button'

const SplashPage = () => (
    <>
        <GlobalStyle />
        <MainText />
        <Button>Zamów wycenę</Button>
    </>
);

export default SplashPage;