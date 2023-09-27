import React, { useState } from "react";
import dynamic from "next/dynamic";
import { UserContext } from "../contexts/UserContext";
import { getCookieItem } from "@/helpers/functions/cookie";

type UserProps = { children: React.ReactNode }

const Provider: React.FC<UserProps> = ({ children }) => {
  const [user, setUser] = useState<any>(getCookieItem("learnbeta_user") || null)

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

const UserProvider = dynamic(() => Promise.resolve(Provider), { ssr: false });

export default UserProvider