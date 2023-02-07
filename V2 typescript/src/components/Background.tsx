import React from "react"
import styled, { keyframes } from "styled-components"

/**
 * Snowfall Background
 */
const Container = styled.div`
    overflow: hidden;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    min-height: 100vh;
`
const animSnowflakes = keyframes`
  from { transform: translateY(-2000px); }
  to { transform: translateY(0px); }
`
const random = (x: number) => Math.floor(Math.random() * x)
const multipleBoxShadow = (length: number) => {
    const biggestScreenSize = 2560
    let value = `${random(biggestScreenSize)}px ${random(biggestScreenSize)}px #FFF`
    for (let i in Array.from({ length })) {
        value += `, ${random(biggestScreenSize)}px ${random(biggestScreenSize)}px #FFF`
    }
    return value
}
let snowflakes = (h: number, w: number, animationTime: number, shadow: number) => styled.div`
    width: ${w}px;
    height: ${h}px;
    background: transparent;
    box-shadow: ${multipleBoxShadow(shadow)};
    animation: ${animSnowflakes} ${animationTime}s linear infinite;
    &:after {
        content: " ";
        position: absolute;
        top: 2000px;
        width: ${w}px;
        height: ${h}px;
        box-shadow: ${multipleBoxShadow(shadow)};
    }
`
const SmallSnowflakes = snowflakes(1, 1, 50, 700)
const MediumSnowflakes = snowflakes(2, 2, 100, 200)
const BigSnowflakes = snowflakes(3, 3, 150, 100)

export const Background = ({ children, ...props }: { children: React.ReactNode }) => (
    <Container {...props}>
        {children}
        <SmallSnowflakes />
        <MediumSnowflakes />
        <BigSnowflakes />
    </Container>
)
