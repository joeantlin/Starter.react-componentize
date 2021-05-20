import axios from "axios"
let endpoint = "https://api.remotebootcamp.dev/api/users";

export const logIn = payload => {
    const config = {
        method: "POST",
        url: `${endpoint}/login`,
        crossdomain: true,
        data: payload,
        headers: { "Content-Type": "application/json" }
    }
    return axios(config);
}

export default { logIn };