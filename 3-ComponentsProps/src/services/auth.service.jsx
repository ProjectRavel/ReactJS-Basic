import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Named import

// Function to handle login
export const postLogin = (data, callback) => {
    axios.post("https://fakestoreapi.com/auth/login", data).then((res) => {
        callback(true, res);
    }).catch((err) => {
        callback(false, err);
    });
}

// Function to decode the token and get username
export const getUsername = (token) => {
    const decoded = jwtDecode(token); 
    return decoded.user
}