import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import GlobalStyle from '../assets/css/globalStyle'
import LogoText from '../components/logoText'
import MainText from '../components/mainText'
import Button from '../components/button'
import ContactInfo from '../components/contactInfo'
import Modal from '../components/modal'

const Wrapper = styled.div`
    width: 900px;
    margin: 0 auto;
    display: flex;
    height: 100vh;
    align-items: center;
`

const ContentWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const StyledImage = styled(Image)`
    width: 600px;
    object-fit: contain;
`

const ImageWrapper = styled.div`
    width: 50%;
    object-fit: contain;
`

const InnerWrapper = styled.div`
    display: flex;
    padding-top: 20px;
`

class SplashPage extends React.Component {
    state = {
        isModalOpen: false,
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const { isModalOpen } = this.state;

        return (
            <Wrapper>
                <GlobalStyle />
                <ContentWrapper>
                    <LogoText>kenny.pl</LogoText>
                    <MainText>Strony i sklepy internetowe dla firm</MainText>
                    <Button openModalFn={this.openModal} />
                    {isModalOpen && <Modal closeModalFn={this.closeModal} />}
                    <InnerWrapper>
                        <ContactInfo>email:<br /> <a href="mailto:hello@kenny.pl">hellO@kenny.pl</a></ContactInfo>
                        <ContactInfo>phone:<br /> <a href="tel:+48508408403">+48 508 408 403</a></ContactInfo>
                    </InnerWrapper>
                </ContentWrapper>
                <ImageWrapper>
                    {/* <StyledImage fluid={data.file.childImageSharp.fluid} /> */}
                </ImageWrapper>
            </Wrapper>
        )
    }
}

export const query = graphql`
  {
    file(name: {eq: "development"}, childImageSharp: {fixed: {}}) {
      childImageSharp {
          fluid(maxWidth: 464, maxHeight: 318, quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
              ...GatsbyImageSharpFluidLimitPresentationSize
          }
      }
    }
  }
`

export default SplashPage