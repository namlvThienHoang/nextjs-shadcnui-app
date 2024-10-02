import axios from "axios";
import { ApiUrl } from "@/public/app-setting";
import { AuthService } from "./auth-service";
const api = axios.create({
    baseURL: ApiUrl,
    headers: {
        'Content-Type': 'application/json',
      }
});

// api.interceptors.request.use(
//     (config) => {
//         const { getToken } = AuthService();
//         const token = getToken() || {};
//         if (token) {
//             config.headers["Authorization"] = "Bearer " + token;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

const refresh = async () => {
    const { getRefreshToken } = AuthService();
    const refreshToken = getRefreshToken();
    const rs = await axios.post("/auth/refresh", {
        refresh_token: refreshToken.refresh_token,
    });

    return rs;
};

let refreshToken: any = null;

// api.interceptors.response.use(
//     (res) => {
//         return res.data;
//     },
//     async (err) => {
//         const { setToken, setLogout } = AuthService();
//         const originalConfig = err?.config;
//         if (
//             originalConfig?.url !== "auth/login" &&
//             err?.response?.status === 401 &&
//             !originalConfig?._retry
//         ) {
//             originalConfig._retry = true;
//             try {
//                 refreshToken = refreshToken ? refreshToken : refresh();
//                 const rs = await refreshToken;
//                 refreshToken = null;
//                 if (rs.data.access_token) {
//                     setToken(rs.data);
//                 }
//                 return await api(originalConfig);
//             } catch (_error) {
//                 setLogout();
//                 window.location.href = "/auth/login";
//                 return Promise.reject(_error);
//             }
//         }

//         return Promise.reject(err);
//     }
// );

export default api;
