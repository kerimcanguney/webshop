import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
`;

const Item = styled.li`
  list-style-type: none;
`;

const Link = styled.a`
  display: inline-block;
  position: relative;
  color: black;
  text-decoration: none;
  font-size: 20px;
  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: rgba(138,43,226,1);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .2s ease-in-out;
  }
  &:hover::before{
    transform-origin: left;
    transform: scaleX(1);
  }
`; 


export const items = [
  {
    name: "Men",
    content: <Container>
      <Item>
        <Link href='/'>Tops</Link>
      </Item>
      <Item>
        <Link href=''>Bottom</Link>
      </Item>
      <Item>
        <Link href=''>Footwear</Link>
      </Item>
    </Container>
  },
  {
    name: "Women",
    content: <Container>
      <Item>
        <Link href=''>Tops</Link>
      </Item>
      <Item>
        <Link href=''>Bottom</Link>
      </Item>
      <Item>
        <Link href=''>Footwear</Link>
      </Item>
    </Container>
  }
  ]