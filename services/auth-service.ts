'user client'
import axios from "axios";
import { AuthResponse, Login, TokenResponse } from "../types/auth";
export const AuthService = () => {
    const login = async (data: { username: string; password: string }) => {
        const body: Login = {
            username: data.username,
            password: data.password,
        };
        try {
            const res = await axios.post("https://dummyjson.com/auth/login", body);
            console.log(res);
            setToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            return true;
        } catch (err) {
            return false;
        }
    };

    const refreshToken = async (data: { tenDV: any }) => {
        const refreshToken = getRefreshToken() || {};
        const body = {
            refresh_token: refreshToken,
        };
        try {
            const res = await axios.post("/auth/refresh", body);
            setToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            return true;
        } catch (err) {
            return false;
        }

    };

    const setToken = (token: string) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("token", JSON.stringify(token));
        }
    };

    const getToken = () => {
        if (typeof window === "undefined") {
            return null;
        }
        const token = localStorage.getItem("token");
        return token ? JSON.parse(token) : null;
    };

    const setRefreshToken = (refreshToken: string) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
        }
    };

    const getRefreshToken = () => {
        if (typeof window === "undefined") {
            return null;
        }
        const refreshToken = localStorage.getItem("refreshToken");
        return refreshToken ? JSON.parse(refreshToken) : null;
    };

    
    const setLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    };
    return {
        login,
        refreshToken,
        getToken,
        setLogout,
        setToken,
        setRefreshToken,
        getRefreshToken
    };
};
