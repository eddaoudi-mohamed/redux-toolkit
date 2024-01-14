import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../Redux/features/user/userSlice";
import { store } from "../Redux/app/store";

interface Iprops {}

const UserList: FC<Iprops> = ({}) => {
  const userInfo = useSelector((state: any) => state.user);
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(fetchUser());
    // fetchUsers();
  }, []);
  //   console.log("infouser", userInfo);
  if (userInfo?.loading) return <h3>Laoding ...</h3>;
  if (userInfo?.error) return <h4>Error to get user {userInfo.error}</h4>;
  return (
    <>
      <h1>User List hh</h1>
      <ul>
        {userInfo?.Data.map((item: any) => (
          <li key={item.id}>
            <p>first name : {item.firstName}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
