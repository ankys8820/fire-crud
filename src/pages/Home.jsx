import { useContext } from "react";
import { UserContext } from "../App";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  return <div>Home : {currentUser?.user?.email}</div>;
};

export default Home;
