import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import * as StyledComps from './styled'

const CharacterCard = (props) => {
  return (
    <StyledComps.CardStyled>

      <StyledComps.CardBodyStyled>

        <CardTitle
          style={{fontSize: '2rem'}}>{props.name}</CardTitle>

        <CardSubtitle 
          style={{marginBottom: '2vh'}}><StyledComps.SpanStyled>Height: </StyledComps.SpanStyled>{props.height}</CardSubtitle>

        <CardSubtitle 
          style={{marginBottom: '2vh'}}><StyledComps.SpanStyled>Hair Color: </StyledComps.SpanStyled>{(props.hairColor === "n/a") ? 'No hair' : `${props.hairColor}`}</CardSubtitle>

        <CardSubtitle
          style={{marginBottom: '2vh'}}><StyledComps.SpanStyled>Birth Year: </StyledComps.SpanStyled>{props.birthYear}</CardSubtitle>

      </StyledComps.CardBodyStyled>

    </StyledComps.CardStyled>
  );
};

export default CharacterCard;