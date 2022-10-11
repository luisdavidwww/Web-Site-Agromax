import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background: linear-gradient(-45deg, rgb(40, 40, 40) 0%, rgb(40, 40, 40)  100%);
  


  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const ContainerT = styled.div`
  padding: 80px 60px;
  background: linear-gradient(-45deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255)  100%);

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 15px;
  font-size: 14px;
  text-decoration: none;
  font-family: 'PT Sans', sans-serif;
  font-family: 'Roboto';
  cursor: pointer;

  &:hover {
      color: #c5cf2f;
      transition: 200ms ease-in;
  }
`;

export const Linkbtn = styled.a`

  display: inline-block;
  margin-top: -20px;
  width: 140px;
  padding: 12px 26px;
  background-color: #fff;
  color: black;
  font-size: 15px;
  border-radius: 2px;
  text-decoration-line: none;
  outline: none;
  cursor: pointer;
  font-family: 'PT Sans', sans-serif;
  letter-spacing: 0.6px;

  &:hover {
      color: #fff;
      background-color: #a8b402;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  letter-spacing: 0.8px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'PT Sans', sans-serif;

  &:hover {
    color: #c5cf2f;
    transition: 200ms ease-in;
}
`;