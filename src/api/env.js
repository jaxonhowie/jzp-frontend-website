let local = window.location.href;

let dev_url = 'http://localhost:8088';
let prd_url = 'http://104.129.186.124:80';

let backend = '';

if (local.indexOf('http://172.31') === 0 || local.indexOf('http://localhost') === 0) {
  backend = dev_url;
} else {
  backend = prd_url;
}

export {
  backend
};
