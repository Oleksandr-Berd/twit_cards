import axios from "axios";

export const addNewData = async (url, data, id) => {
    return await axios
        .put(`${url}/${id}`, data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}


