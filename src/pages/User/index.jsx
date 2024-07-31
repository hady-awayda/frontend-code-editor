import "./style.css";
import Chat from "../../components/Cards/Chat";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getUserById from "../../data/remote/user/getUserById";
import Input from "../../components/Cards/Message/index";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserById(id);

      setUser(data);
    };

    fetchUserData();
  });

  return (
    <div className="px-32 my-10 p-4 flex justify-between w-full">
      <div className="w-60">
        <h1 className="text-5xl font-bold mb-12">{user?.name}</h1>
        <div className="mb-4 text-xl">
          <strong>Email:</strong> {user?.email}
        </div>
      </div>
      <div className=" pl-4 w-8/12">
        <Chat {...{ id }} />
        <Input {...{ id }} />
      </div>
    </div>
  );
};

export default UserPage;
