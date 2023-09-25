import https from 'k6/http';
import {sleep} from 'k6';

export const options = {
    VUS: 10,
    duration: '30s',
    
}

export default function(){
    https.get('https://valentinos-coffee.herokuapp.com/status')
    sleep(1);
}