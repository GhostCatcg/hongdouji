# SSL签发笔记  HTTP改为HTTPS协议

[签发作者GitHub - acne.sh](https://github.com/Neilpang/acme.sh)


## SSL 签发 nginx转发固定配置
``` bash
server {
        listen 80;
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name  hdouji.com;
        ssl on;
        ssl_certificate "cert/hdouji.com.cer";
        ssl_certificate_key "cert/hdouji.com.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        location / {
          proxy_pass http://localhost:8080;
        }
        error_page 404 /404.html;
            location = /40x.html {
        }
        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
        if ($scheme != https) {
          rewrite ^/(.*) https://$server_name/$1 permanent;
        }
}


```