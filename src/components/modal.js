import React from 'react'
import styled from 'styled-components'
import EstimatePage from '../pages/estimate'

const Wrapper = styled.div`
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 35vw;
    height: 70vh;
    background-color: hsl(0, 100%, 100%);
    border-radius: 8px;
    position: fixed;
`

const CloseButton = styled.div`
    width: 27px;
    height: 27px;
    border: none;
    background-color: hsl(255, 1%, 96%);
    position: absolute;
    right: 20px;
    top: 20px;
    
    ::before, 
    ::after {
      content: '';
      width: 16px;
      height: 3px;
      position: absolute;
      background: hsl(0, 100%, 0%);
      display: block;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      transform-origin: 50%;
      transition: .3s all;
    }
    
    ::before {
      transform: rotate(45deg);
    }
    
    ::after {
      transform: rotate(-45deg);
    }
`

const Modal = ({ closeModalFn }) => (
    <Wrapper>
        <CloseButton onClick={closeModalFn} />
        <EstimatePage />
    </Wrapper>
)

export default Modal