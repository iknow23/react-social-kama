import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '7244807a-ddd9-49f2-aa3c-73ea155a3b51'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId ? userId : 2}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId ? userId : 2}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}
