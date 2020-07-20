import React, { Component } from 'react'
import styled from 'styled-components'

const InnerWrapper = styled.div`
    width: 400px;
`

const SmallText = styled.h2`
    font-size: 1.45rem;
    text-transform: uppercase;
    letter-spacing: -0.04rem;
    color: hsl(242, 100%, 66%);
    font-weight: 700;
`

const BigText = styled.h1`
    font-size: 3.95rem;
    font-weight: 600;
    margin-top: 0;
`

class MainText extends Component {
    render() {
        return (
            <InnerWrapper>
                <SmallText>kenny.pl</SmallText>
                <BigText>Strony i sklepy internetowe dla firm</BigText>
            </InnerWrapper>
        )
    }
}

export default MainText