import React from 'react'
import styled from 'styled-components'

export default function Login() {
    return (
        <Container>
            <Content>
                <LogoOne src="/images/cta-logo-one.svg">

                </LogoOne>
                <SignUp>
                    Get all there
                </SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur recusandae error provident accusamus omnis? Sed quidem magnam omnis? Tenetur, soluta quam. Rem sunt facere rerum cum eaque placeat eligendi.
                </Description>
                <LogoTwo src="/images/cta-logo-two.png">

                </LogoTwo>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.8;
        background: url("/images/login-background.jpg") center center / cover no-repeat;
        z-index: -1;
    }
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 700px;
`

const LogoOne = styled.img`
    width: 100%;
    padding: 80px 40px;
`

const LogoTwo = styled(LogoOne)`

`

const SignUp = styled.a`
    width: 100%;
    background: #0063e5;
    color: #f9f9f9;
    text-transform: uppercase;
    padding: 10px 0;
    cursor: pointer;
    letter-spacing: .15rem;
    font-weight: 600;
    transition: all .3s;
    text-align: center;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    border-radius: 4px;
    
    &:hover {
        background-color: #1E90FF;
    }

    &:active {
        transform: scale(.9);
    }
`

const Description = styled.p`
    padding: 0 20px;
    margin-top: 20px;
    color: rgb( 249, 249, 249 );
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`