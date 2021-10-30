import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <Link to="/detail"><img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700287259.jpg" alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link><img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700287259.jpg" alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link><img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700287259.jpg" alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link><img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700287259.jpg" alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link><img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700287259.jpg" alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link><img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700287259.jpg" alt="" /></Link>
                </Wrap>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    h4 {
        padding 20px 0;
    }
`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, .1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all .3s;
    &:hover{
        border-color: rgba(249, 249, 249, .8);
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
`