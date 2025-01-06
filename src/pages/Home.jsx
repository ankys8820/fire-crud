import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  const id = currentUser?.user?.uid;
  const fetchData = async () => {
    //
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      Home : {currentUser?.user?.email}
      <p>Id : {id}</p>
    </div>
  );
};

export default Home;
