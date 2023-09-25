import https from 'k6/http';
import {sleep} from 'k6';
import {check} from 'k6';

export const options = {
    VUS: 1,
    duration: '1s',
}

export default function(){
    const url = 'https://dummyjson.com/auth/login';
    const payload = JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
    });


    const params = {
        headers:{
            'Content-Type': "application/json",
        },
    };
 
    const response = https.post(url, payload,params);
    check(response,{
        'is status 200' : (r) =>r.response === 200,
        'is username present': (r)=>r.body.includes('kminchelle'),
    });
}