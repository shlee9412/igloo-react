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
  const [selectecContact, setSelectedContact] = useState<Contact | null>(null);

  const getAllContacts = async () => {
    try {
      const res = await api.get('/contacts');
      console.log(res);
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const createContact: React.FormEventHandler<HTMLFormElement> = async e => {
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

  const deleteContact = async (e: React.MouseEvent, id: number) => {
    const confirm = window.confirm('삭제하시겠습니까?');
    if (!confirm) return;

    try {
      await api({
        url: `/contacts/${id}`,
        method: 'DELETE'
      });
      await getAllContacts();
      window.alert('삭제되었습니다.');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeSelectedContact: React.FormEventHandler<HTMLFormElement> = e => {
    const inputEl = e.target as HTMLInputElement;
    // const formEl = e.currentTarget;

    const selectedId = Number(inputEl.getAttribute('data-id'));

    const originalContact = contacts.find(d => d.id === selectedId) || null;
    setSelectedContact(originalContact);
  };

  const updateContact: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    if (!selectecContact) return;
    if (selectecContact.name === '') return window.alert('이름을 입력해주세요.');
    if (selectecContact.phone === '') return window.alert('전화번호를 입력해주세요.');

    try {
      await api({
        url: '/contacts',
        method: 'PUT',
        data: selectecContact
      });
      await getAllContacts();
      window.alert('수정되었습니다.');
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
      <form onSubmit={createContact}>
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
        <button type="submit">추가</button>
      </form>
      <hr />
      <h2>연락처 수정</h2>
      {selectecContact && (
        <form onSubmit={updateContact}>
          <label htmlFor="nm2">이름</label>
          <input
            type="text"
            id="nm2"
            value={selectecContact.name}
            onChange={(e) => {
              setSelectedContact({ ...selectecContact, name: e.target.value });
            }}
          />
          <br />
          <label htmlFor="ph2">전화번호</label>
          <input
            type="text"
            id="ph2"
            value={selectecContact.phone}
            onChange={(e) => {
              setSelectedContact({ ...selectecContact, phone: e.target.value });
            }}
          />
          <br />
          <button type="submit">수정</button>
        </form>
      )}
      <hr />
      <h2>연락처 목록</h2>
      <form onChange={handleChangeSelectedContact}>
        <table border={1}>
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>이름</th>
              <th>전화번호</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(d => (
              <tr key={d.id}>
                <td>
                  <input type="radio" data-id={d.id} name="selectedContact" />
                </td>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.phone}</td>
                <td>
                  <button onClick={e => deleteContact(e, d.id)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Contacts;