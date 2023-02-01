import axios from "axios";
import useAsync from "../hooks/useAsync";
import { Contact } from "./Contacts";


const User = () => {
  const getUsers = async () => {
    const response = await axios.get<Contact[]>('http://localhost:8080/api/contacts');

    return response.data;
  };

  const [state, refetch] = useAsync<Contact[]>(getUsers, false);
  const { loading, data, error } = state;

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러가 발생</div>;
  if (!data) return <button onClick={refetch}>불러오기</button>

  return (
    <>
      <ul>
        {
          data.map((d: Contact) => (
            <li key={d.id}>
              {d.name}
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default User;