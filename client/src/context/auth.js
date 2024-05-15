import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvide = ({ children }) => {
    const [user, setUser] = useState(null);
}