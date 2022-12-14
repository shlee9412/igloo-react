import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Contact {
  id: number
  name: string
  phone: string
}

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

const Contacts = () => {
  const [newContact, setNewContact] = useState<Partial<Contact>>({
    name: '',
    phone: ''
  });
  const [contacts, setContacts] = useState<Contact[]>([]);

  const getAllContacts = async () => {
    try {
      const res = await api.get('/contacts');
      console.log(res);
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const createContact: React.MouseEventHandler<HTMLButtonElement> = async e => {
    e.preventDefault();

    if (!newContact.name) {
      alert('이름을 입력해주세요.');
      return;
    }

    if (!newContact.phone) {
      alert('전화번호를 입력해주세요.');
      return;
    }

    try {
      await api({
        url: '/contacts',
        method: 'POST',
        data: newContact
      });
      await getAllContacts();
      setNewContact({ name: '', phone: '' });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <hr />
      <h2>연락처 추가</h2>
      <form>
        <label htmlFor="nm">이름</label>
        <input
          type="text"
          id="nm"
          value={newContact.name}
          onChange={(e) => {
            setNewContact({ ...newContact, name: e.target.value });
          }}
        />
        <br />
        <label htmlFor="ph">전화번호</label>
        <input
          type="text"
          id="ph"
          value={newContact.phone}
          onChange={(e) => {
            setNewContact({ ...newContact, phone: e.target.value });
          }}
        />
        <br />
        <button type="submit" onClick={createContact}>추가</button>
      </form>
      <hr />
      <h2>연락처 목록</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;