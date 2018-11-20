import React, { Component } from 'react';
import { connect } from "react-redux";

//components
import Title     from '../Title';
import Article   from '../Article';
import SubTitle  from '../SubTitle';
import Paragraph from '../Paragraph/';

const experienceList = (el) => {      
  return (
    <Article>
      <SubTitle>  { el.name } </SubTitle>
      <Paragraph> { el.date }   </Paragraph>
      <Paragraph> { el.description } </Paragraph>
    </Article>
  )
}


const Experience = props => {
  const { experience } = props;
  return (
    <div>
      <Title> Work Experience </Title>
      { experience ? experience.map(experienceList) : null}
    </div>
  )
}
  

export default Experience;