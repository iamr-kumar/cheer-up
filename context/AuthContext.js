import { createContext, useContext, useState, useEffect } from "react";
import cookie from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

const { Provider } = AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const setToken = (token) => {
    cookie.set("token", token, { expires: 7 });
    if (token) {
      axios.defaults.headers.common["auth-token"] = token;
    } else {
      delete axios.defaults.headers.common["auth-token"];
    }
  };

  useEffect(() => {
    loadUser()
      .then(() => console.log("User loaded!"))
      .catch((err) => console.log(err));
  }, []);

  const loadUser = async () => {
    setLoading(true);
    const token = cookie.get("token");
    console.log(token);
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
    setLoading(false);
  };

  const signup = async (name, email, password, category) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const body = JSON.stringify({ name, email, password, category });
    try {
      const res = await axios.post("/api/signup", body, config);
      console.log(res.data);

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
      console.log(res.data);
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
