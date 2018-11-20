import React from 'react';

//components
import Article from '../Article';
import Paragraph from '../Paragraph';
import Progress from '../Progress'
import Section from '../Section';
import Title from '../Title';

const skillList = (el) =>  {
  return (
    <div style={{marginTop: '10px'}}>
      <Paragraph profile> { el.name } </Paragraph>
      <Progress percent={ el.value } />
    </div>
  )
}
const Skills = ({ skills }) => {
  return (
    <Section profile>
      <Article>
        <Title profile> Skills </Title>
        { skills ? skills.map(skillList)  : null}
      </Article>
    </Section>
  )
}

export default Skills;