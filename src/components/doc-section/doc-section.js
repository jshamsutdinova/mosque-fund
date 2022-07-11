import React from 'react'
import { DocContainer, DocWrapper, DocRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle } from './doc-section-elements' 
const DocSection = () => {
  return (
    <>
      <DocContainer>
        <DocWrapper>
          <DocRow>
            <Column1>
              <TextWrapper>
                <TopLine>Учредительные документы</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <TopLine>Document scans</TopLine>
              <Heading>Documents</Heading>
            </Column2>
          </DocRow>
        </DocWrapper>
      </DocContainer>
    </>
  )
}

export default DocSection