import axios from "axios";

export default axios.create({
    baseURL: "https://aquiladev.azurewebsites.net/",
    headers: {
        "Content-type": "application/json"
    }
});