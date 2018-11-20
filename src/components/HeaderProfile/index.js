import React from 'react';
import styled from 'styled-components';

import { fontFamily } from '../../config/constantes'; 


const image = "https://raw.githubusercontent.com/b2w-marketplace/code-challenge/master/files/avatar-dev.png"

const Name = styled.p`
  font-size: 39px;
  line-height: 49px;
  margin: 35px auto 0px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Profission = styled.span`
  letter-spacing: 5px;
  line-height: 20px;
  font-family: ${ fontFamily };
  font-size: 13px;
  text-align: center;
  margin-bottom: 40px;
  display: block;
`;

const Container = styled.aside`
  color: #fff;
  padding-bottom: 1px;
`;

const Img = styled.img`
  margin: 0 auto;
  display: block;
  padding-top: 43px;
`;

const Hr = styled.hr`
  background-color: #fff;
`;

const Div = styled.div`
  width: 100%;
`

const HeaderProfile = ({ name, profession }) => (
  <Container profile>
    <Div>
      <Img src={ image } />
    </Div>
    <Name> { name } </Name>
    <Profission> { profession } </Profission>  
    <Hr />
  </Container>
)


export default HeaderProfile;