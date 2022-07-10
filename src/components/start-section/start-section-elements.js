import styled from "styled-components";

export const StartContainer = styled.div `
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;   

    // Add :before styles
`

export const StartBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImgBg = styled.img `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 0.5;
`

export const StartContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StartH1 = styled.h1 `
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const StartP = styled.p `
`


