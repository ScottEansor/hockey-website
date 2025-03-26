import { useCallback, useEffect, useState } from "react";

export default function useUserData() {
  const [userData, setUserData] = useState(null);

  const getMe = useCallback(async () => {
    const response = await fetch("/api/auth/me");
    if (!response.ok) {
      setUserData({
        status: "not signed in",
      });
      return;
    }
    const data = await response.json();
    setUserData({
      status: "signed in",
      ...data,
    });
  }, []);

  useEffect(() => {
    getMe();
  }, [getMe]);

  return {
    userData,
    getMe,
  };
}
