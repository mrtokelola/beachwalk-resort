import React, { Component } from 'react';
import Room from './Room';
import styled from 'styled-components';
import Title from '../globals/Title';
import Section from '../globals/Section';
import rooms from './rooms-data';
import { setColor, media, setRem} from '../../styles'

export default class Rooms extends Component {
  state = {
    rooms: rooms
  }
  render () {
    return (
     <Section color={setColor.lightGray}>
      <Title title="our rooms" center/>
       <RoomsCenter>
         {this.state.rooms.map((room)=> {
           return <Room key={room.id} room={room}/>
         })}
       </RoomsCenter>
     </Section>
    );
  }
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  
  ${media.tablet`
    width: 100vw:
    max-width: 1170px
  `}
  
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};

`

