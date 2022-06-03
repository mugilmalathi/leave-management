import axios from "axios";

export default axios.create({
    baseURL: "https://leave-backend-management.herokuapp.com"
})