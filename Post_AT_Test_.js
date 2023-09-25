import http from 'k6/http';
import { sleep } from 'k6';

export default function () 
{
  http.get('https://www.post.at/en/p/a/collection-service');
  sleep(1);
}