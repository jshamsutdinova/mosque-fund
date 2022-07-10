import React from 'react'
import { StartContainer, StartBg, ImgBg, StartContent, StartH1 } from './start-section-elements'
import Img from '../../images/mosque-img.jpg'

const StartSection = () => {
  return (
    <StartContainer>
        <StartBg>
            <ImgBg src={Img} alt='Мечеть' />
        </StartBg>
        <StartContent>
            <StartH1>СБОР СРЕДСТВ НА СТРОИТЕЛЬСТВО СВИРСКОЙ МЕЧЕТИ</StartH1>
        </StartContent>
    </StartContainer>
  )
}

export default StartSection