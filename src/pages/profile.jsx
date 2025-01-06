import { useContext } from "react";
import { UserContext } from "../App";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({
    username: "",
    fullname: "",
    mobile: "",
    address: "",
    country: "",
  });
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const id = currentUser?.user?.uid;

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
      const res = await setDoc(doc(db, "users", id), {
        ...data,
        email: currentUser?.user?.email,
        timeStamp: serverTimestamp(),
      });
      alert("Data successfully Saved", res);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  console.log(data);

  return (
    <>
      <div className="profile">
        {/* Profile : {currentUser?.user?.email} */}

        <form onSubmit={handleAdd}>
          <input type="file" value={file} className="photo-input" />
          <input
            type="text"
            name="username"
            onChange={handleInput}
            value={data.username}
            placeholder="Username"
          />
          <input
            type="text"
            name="fullname"
            onChange={handleInput}
            value={data.fullname}
            placeholder="Name And Surname"
          />
          <input
            type="number"
            name="mobile"
            onChange={handleInput}
            value={data.mobile}
            placeholder="Mobile"
          />

          <input
            type="text"
            name="address"
            onChange={handleInput}
            value={data.address}
            placeholder="Address"
          />
          <input
            type="text"
            name="country"
            onChange={handleInput}
            value={data.country}
            placeholder="County"
          />
          {/* <input
            type="password"
            name="password"
            onChange={handleInput}
            value={data.password}
            placeholder="Password"
          /> */}
          <button type="submit">Update & Save</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
