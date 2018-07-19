import { fetch } from 'fetch';

const BASE_URL = 'http://192.168.1.9:5000'

exports.login = async function (username, password) {
    try {
        console.log(JSON.stringify({
            "username" : username,
            "password" : password
        }))
        let res = await fetch(BASE_URL + "/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
            mode: "no-cors"
        })

        let json = await res.json();
        res.json = json;

        return res;
    }catch(err){
        throw err
    }
}

exports.fetchGrades = async function () {
    try {
        let res = await fetch(BASE_URL + "/grades", {
            method: "GET",
            headers: {
                Accept: "application/json"
            },
            // credentials: "include": will include with integration
        })

        console.log(res);

        let json = await res.json();
        res.json = json;

        return res;
    } catch (err) {
        throw err;
    }
}