import React from 'react'
import styled from 'styled-components'

export default function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://afisha.a42.ru/uploads/posters/43/43024380-5cd4-11e9-aa8a-d79f1a3a92bf.jpg" alt="" />
            </Background>
            <ImageTitle>
                <img src="https://pngimage.net/wp-content/uploads/2018/06/monsters-inc-logo-png-6.png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </PlayButton>

                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerButton>
                
                <AddButton>
                    <span>+</span>
                </AddButton>
                
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 • 7m • Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem nesciunt tempora minus magni accusantium fuga ad sed reiciendis? Voluptates nemo architecto ut distinctio aut et earum molestiae eveniet delectus ab.
            </Description>
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: .5;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }    
`

const Controls = styled.div`
    display: flex;
    column-gap: 22px;
    align-items: center;
`

const CustomButton = styled.button`
    text-transform: uppercase;
    padding: 4px 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    letter-spacing: .1rem;
    font-size: .77rem;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s;
    
`

const PlayButton = styled(CustomButton)`
    background: rgb(249, 249, 249);
    &:hover {
        background: rgba(190, 190, 190);
    }
`

const TrailerButton = styled(CustomButton)`
    background: rgba(0, 0, 0, .3);
    border-color: white;
    color: white;
    &:hover {
        background: rgb(190, 190, 190);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

const AddButton = styled.button`
    background: rgba(0, 0, 0, .3);
    border: 2px solid rgb(249, 249, 249);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    height: 44px;
    width: 44px;
    cursor: pointer;

    &:hover {
        background: rgb(190, 190, 190);
    }
`

const GroupWatchButton = styled(AddButton)`
    background: black;
`

const SubTitle = styled.div`
    margin-top: 20px;
    color: rgb(249, 249, 249);
    font-size: .9rem;
`

const Description = styled.p`
    margin-top: 20px;
    max-width: 35vw;
    line-height: 1.7rem;
    color: rgb(249, 249, 249);
    font-size: 1.1rem;
`