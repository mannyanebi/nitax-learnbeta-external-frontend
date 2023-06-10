import React, { useState } from "react";
import { UserContext } from "../contexts/UserContext";

type UserProps = { children: React.ReactNode }

const UserProvider: React.FC<UserProps> = ({ children }) => {
  const [user, setUser] = useState<any>([])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider