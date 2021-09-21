import { createContext, useContext, useState, useEffect } from "react";
import cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const AuthContext = createContext();

const { Provider } = AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const setToken = (token) => {
    cookie.set("token", token, { expires: 7 });
    if (token) {
      axios.defaults.headers.common["auth-token"] = token;
    } else {
      delete axios.defaults.headers.common["auth-token"];
    }
  };

  useEffect(() => {
    setLoading(true);
    loadUser()
      .then(() => router.push("/user/profile"))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  const loadUser = async () => {
    const token = cookie.get("token");
    console.log(token);
    if (!token) {
      throw new Error("No token");
    }
    setToken(token);
    try {
      const res = await axios.get(`/api/login`);
      // console.log(res);
      setCurrentUser(res.data);
    } catch (err) {
      setCurrentUser(null);
      setLoading(false);
      throw err;
    }
  };

  const signup = async (name, email, password, category) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = JSON.stringify({ name, email, password, category });
    try {
      const res = await axios.post("/api/signup", body, config);
      console.log(res.data);
      setToken(res.data.token);
      await loadUser();
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const login = async (email, password) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post("/api/login", body, config);
      setToken(res.data.token);
      await loadUser();
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    delete axios.defaults.headers.common["auth-token"];
    cookie.remove("token");
  };

  const value = {
    signup,
    currentUser,
    login,
    logout,
  };

  return <Provider value={value}>{!loading && children}</Provider>;
};

export default AuthProvider;
