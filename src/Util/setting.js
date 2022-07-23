import axios from "axios";

export const domain = 'https://elearningnew.cybersoft.edu.vn'

// Cấu hình interceptor
export const http = axios.create({
    baseURL:'https://elearningnew.cybersoft.edu.vn',
    timeout:30000,
   
})

http.interceptors.request.use((config) => {
    config.headers ={
        ...config.headers,
        'TokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNyIsIkhldEhhblN0cmluZyI6IjE0LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjMzMjgwMDAwMCIsIm5iZiI6MTY0NjE1NDAwMCwiZXhwIjoxNjc2NDgwNDAwfQ.QEoicztqydmEk9BgHT9J2sJjvRpW9K0M2v0iopkUdQ0'
    }
    const getToken = () => {
        let credentials = localStorage.getItem('credentials');
        credentials = JSON.parse(credentials);
        return credentials&&credentials.accessToken;
    };
    const token= getToken();
    // console.log(token)
    if(token){
        config.headers ={
            ...config.headers,
            "Authorization": `Bearer ${token}`
    }
    };
    return config
}, (errors) => {
    return Promise.reject(errors)
})

//'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidmFudGVvMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNjM4NzE2NTgwLCJleHAiOjE2Mzg3MjAxODB9.xp1vMV3syzmGDNh-C-sxDF2T60gh-QU_PuqRpQnfJsw'
