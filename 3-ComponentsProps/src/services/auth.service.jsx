import axios from "axios";

// export axios
export const postLogin = (data, callback) => {
    axios.post("https://fakestoreapi.com/auth/login", data).then((res) => {
        callback(true, res)
    }).catch((err) => {
        callback(false, err);
    });
}