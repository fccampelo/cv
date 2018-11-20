import styled from 'styled-components';

const Section = styled.section`
  padding: 0px 40px 1px 40px;
  width: ${ props => props.profile ? null : "70%" };
  color: ${ props => props.profile ?  "#fff" : "#000" };
`;

export default Section;