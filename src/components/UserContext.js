import { createContext } from "react";

const UserContext = createContext({
  userinfo: {
    name: "dummy name",
    email: "dummyaccount@gmail.com",
  },
});
export default UserContext;
