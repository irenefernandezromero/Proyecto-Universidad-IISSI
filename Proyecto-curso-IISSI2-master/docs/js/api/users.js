"use stric";

import { BASE_URL, requestOptions } from "./common.js";

const usersAPI = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            axios.get(`${BASE_URL}/users`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    getById: function (userId) {
        return new Promise(function (resolve, reject) {
            axios
                .get(`${BASE_URL}/users/${userId}`, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },
    create: function (formData) {
        return new Promise(function (resolve, reject) {
            axios
                .post(`${BASE_URL}/users`, formData, requestOptions)
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    delete: function (userId) {
        return new Promise(function (resolve, reject) {
            axios
                .delete(`${BASE_URL}/users/${userId}`, requestOptions
                )
                .then(response => resolve(response.data))
                .catch(error => reject(error.response.data.message));
        });
    },

    
};

export { usersAPI };
