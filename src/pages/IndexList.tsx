import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import styled from 'styled-components';

const DivContainer = styled.div`
  background-color: ${props => props.theme === 'light' ? 'white' : 'black'};
  color: ${props => props.theme === 'light' ? 'black' : 'white'};
`;

const indexList = [
  { id: 1, title: '카운터 예제', path: '/counter' },
  { id: 2, title: '인터벌 예제', path: '/timeInterval' },
  { id: 3, title: '연락처 예제', path: '/contacts' },
  { id: 4, title: '회원가입 예제', path: '/signup' },
  { id: 5, title: '리덕스 카운터 예제 1', path: '/redux-counter1' },
  { id: 6, title: '리덕스 카운터 예제 2', path: '/redux-counter2' }
];

const IndexList = () => {

  const context = useContext(ThemeContext);


  return (
    <DivContainer
      theme={context}
    >
      <h1>목차</h1>
      <ol>
        {indexList.map(d => {
          return (
            <li key={d.id}>
              <Link to={d.path}>
                {d.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </DivContainer>
  );
};

export default IndexList;