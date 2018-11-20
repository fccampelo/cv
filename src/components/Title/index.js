import styled from 'styled-components';

import { fontFamily } from '../../config/constantes';

const Title = styled.h1`
  letter-spacing: 1px;
  font-family: ${ fontFamily };
  font-weight: bold;
  border-bottom: 1px solid ${ props => props.profile ?  "#fff" : "#000" };
  text-transform: uppercase;
  text-align: ${ props => props.profile ?  "center" : "left" };
  line-height: 60px;
  margin: 10px auto 0px auto;
  width:  ${ props => props.profile ? "85%" : "100%" };
  
`;

export default Title;
