import { useContext } from "react";
import { UserContext } from "../App";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

const Profile = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({
    username: "",
    fullname: "",
    email: "",
    address: "",
    country: "",
    password: "",
  });
  const { currentUser } = useContext(UserContext);

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //
  async function handleAdd(e) {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "users"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
        timeStamp: serverTimestamp(),
      });
      console.log(res.id);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="profile">
        {/* Profile : {currentUser?.user?.email} */}

        <form onSubmit={handleAdd}>
          <input type="file" value={file} className="photo-input" />
          <input
            type="text"
            onChange={handleInput}
            value={data.username}
            placeholder="Username"
          />
          <input
            type="text"
            onChange={handleInput}
            value={data.fullname}
            placeholder="Name And Surname"
          />
          <input
            type="email"
            onChange={handleInput}
            value={data.email}
            placeholder="Email"
          />
          <input
            type="text"
            onChange={handleInput}
            value={data.address}
            placeholder="Address"
          />
          <input
            type="text"
            onChange={handleInput}
            value={data.country}
            placeholder="County"
          />
          <input
            type="password"
            onChange={handleInput}
            value={data.password}
            placeholder="Password"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
