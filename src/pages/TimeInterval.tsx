import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div1 = styled.div`
`;

const Div2 = styled.div`
`;

const Div3 = styled.div`
`;

const Input = styled.input<{ inputColor: string }>`
  width: 100px;
  color: ${props => props.inputColor};
`;



const TimeInterval = () => {
    const [count, setCount] = useState(0);
    const [inputText, setInputText] = useState('');

    const numberElement = useRef<any>();

    useLayoutEffect(() => {
        console.log('useLayoutEffect');
    }, []);

    useEffect(() => {
        console.log('useEffect');
        const intervalId = setInterval(() => setCount((count) => count + 1), 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const focusInput = () => {
        numberElement.current.focus();
    };

    return (
        <DivContainer>
            <Div1>
                <Input
                    type="text"
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value)
                    }}
                    inputColor='red'
                />
            </Div1>
            <Div2>
                <Input
                    type="number"
                    ref={numberElement}
                    inputColor='green'
                />
            </Div2>
            <Div3>
              <button
                  onClick={focusInput}
              >focus</button>
            </Div3>
        </DivContainer>
    );
};

export default TimeInterval;