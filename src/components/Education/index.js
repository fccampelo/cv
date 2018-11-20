import React, { Component } from 'react';
import { connect } from "react-redux";

//components
import Title from '../Title';
import Article   from '../Article';
import SubTitle from '../SubTitle';
import Paragraph from '../Paragraph';


const educationList = (el) =>  {      
  return (
    <Article>
      <SubTitle>  { el.name } </SubTitle>
      <Paragraph> { el.date }   </Paragraph>
      <Paragraph> { el.description } </Paragraph>
    </Article>
  )
}

const Education = props => {
  const { education } = props;
  return (
    <div>
      <Title> Education </Title>
      { education ? education.map(educationList) : null}
    </div>
  )
}
  

export default Education;