import React, { useCallback, useMemo, useState } from 'react';

interface FormInputParams {
  key?: any
  title: string
  type: 'text' | 'password' | 'date'
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');

  const register: React.FormEventHandler<HTMLFormElement> = useCallback(e => {
    e.preventDefault();
    console.log({
      userId,
      password,
      passwordConfirm,
      name,
      birth
    });
  }, [userId, password, passwordConfirm, name, birth]);

  const formInput = useCallback(({ key, title, type, value, onChange }: FormInputParams) => {
    return (
      <tr key={key}>
        <th>{title}</th>
        <td>
          <input type={type} value={value} onChange={onChange} />
        </td>
      </tr>
    );
  }, []);

  const inputParams: FormInputParams[] = useMemo(() => {
    return [
      {
        key: 1,
        title: '아이디',
        type: 'text',
        value: userId,
        onChange: e => setUserId(e.target.value)
      },
      {
        key: 2,
        title: '패스워드',
        type: 'password',
        value: password,
        onChange: e => setPassword(e.target.value)
      },
      {
        key: 3,
        title: '패스워드 확인',
        type: 'password',
        value: passwordConfirm,
        onChange: e => setPasswordConfirm(e.target.value)
      },
      {
        key: 4,
        title: '이름',
        type: 'text',
        value: name,
        onChange: e => setName(e.target.value)
      },
      {
        key: 5,
        title: '생일',
        type: 'date',
        value: birth,
        onChange: e => setBirth(e.target.value)
      }
    ];
  }, [userId, password, passwordConfirm, name, birth]);

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={register}>
        <table>
          <tbody>
            {inputParams.map((d) => formInput(d))}

            {/* <tr>
              <th>아이디</th>
              <td>
                <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th>패스워드</th>
              <td>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th>패스워드 확인</th>
              <td>
                <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th>생일</th>
              <td>
                <input type="date" value={birth} onChange={e => setBirth(e.target.value)} />
              </td>
            </tr> */}
            <tr>
              <td colSpan={2}>
                <button type="submit">가입</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SignUp;
