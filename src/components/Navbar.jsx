import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user)
  const navigate = useNavigate();

  const handlerLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-between items-center p-4 z-[100] absolute w-full">
      <Link to="/">
        {" "}
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white  px-4 py-2 rounded">Account</button>
          </Link>
          <>
            <button onClick={handlerLogout} className="text-white bg-red-600 px-4 py-2 rounded">
              logout
            </button>
          </>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white  px-4 py-2 rounded">SIGN IN</button>
          </Link>
          <Link to="/signup">
            <button  className="text-white bg-red-600 px-4 py-2 rounded">
              SIGN UP
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
