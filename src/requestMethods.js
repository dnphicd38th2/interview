import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWViYzMxNzdlY2UyNGRjOTY0YTE4ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDE0NzA3OCwiZXhwIjoxNjQ0NDA2Mjc4fQ.sgqtu0T1hCepRXqInvjjxv2VcTmJRRwhjf4iohXt-_k"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
