import React from 'react'
import {SmallBtn} from '../globals/Buttons'
import styled from 'styled-components'
import {setRem, setLetterSpacing, setTransition, setShadow, setBorder} from '../../styles'
import PropTypes from 'prop-types';


const Room = ({ className, room }) => {

  const {img='', title='', info='', price=0} = room;

  console.log(room)
  return (
    <article className={className}>
      <div className='image-container'>
        <img src={img} alt='single-room'/>
        <div className='price'>${price}</div>
      </div>
      <div className='room'>
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
      <SmallBtn>Hello</SmallBtn>
    </article>
  )
}

export default styled(Room)``;

Room.propTypes = {
  Room:PropTypes.shape({
    room:PropTypes.string.isRequired,
  })
}