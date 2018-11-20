import React from 'react';

//components
import Article from '../Article';
import Paragraph from '../Paragraph';
import Section from '../Section';
import Title from '../Title';

const Profile = ({ description }) => {
  return (   
    <Section profile>
      <Title profile> Profile </Title>
      <Article>
        <Paragraph profile> { description } </Paragraph>
      </Article>
    </Section>
  )
}

export default Profile;
