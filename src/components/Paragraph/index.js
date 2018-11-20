import styled from 'styled-components';

//constantes
import { fontFamily } from '../../config/constantes';

const Paragraph = styled.p`
  letter-spacing: 1px;
  line-height: 20px;
  font-family: ${ fontFamily };
  font-size: 13px;
  text-align: ${ props => props.profile ?  "center" : "left" };
  margin-bottom: 10px;
`

export default Paragraph;