import { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(
        `https://my-carpentry-server-test-vercel-kh5971eg7-anikkdev.vercel.app/user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const token = data.token;
          localStorage.setItem("accessToken", token);
          setToken(token);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
