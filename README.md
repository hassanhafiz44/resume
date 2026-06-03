# Resume

Personal resume web app built with Bun + Hono. Serves the resume as a styled HTML page with a PDF download.

## Local development

```sh
bun install
bun run dev        # http://localhost:8086
```

## Raspberry Pi — one-time setup

Run these once on the Pi to bootstrap the app and CI runner:

```sh
# 1. Clone
sudo mkdir -p /var/www/resume
sudo chown $USER:$USER /var/www/resume
git clone <your-github-repo-url> /var/www/resume
cd /var/www/resume && bun install

# 2. Install systemd service
# Edit deploy/resume.service: update ExecStart path if bun is not at /home/pi/.bun/bin/bun
#   which bun   ← run this on the Pi to find the correct path
sudo cp deploy/resume.service /etc/systemd/system/resume.service
sudo systemctl daemon-reload
sudo systemctl enable --now resume
sudo systemctl status resume

# 3. Allow runner to restart the service without a password
#    Add this line via: sudo visudo
#    <runner-user> ALL=(ALL) NOPASSWD: /bin/systemctl restart resume

# 4. Nginx — proxy port PORT
#    Add a server block to /etc/nginx/sites-available/resume:
#
#    server {
#        listen 80;
#        server_name yourdomain.com;
#
#        # Gzip — critical for the JS bundle (403 KB → ~120 KB)
#        gzip on;
#        gzip_types text/plain text/css application/javascript application/json image/svg+xml application/manifest+json;
#        gzip_min_length 1024;
#        gzip_vary on;
#
#        # nginx serves CSS and JS bundle directly — never hits Bun
#        location /styles/ {
#            root /var/www/resume/public;
#            try_files $uri =404;
#            expires 7d;
#            add_header Cache-Control "public, immutable";
#        }
#        location /dist/ {
#            root /var/www/resume/public;
#            try_files $uri =404;
#            expires 7d;
#            add_header Cache-Control "public, immutable";
#        }
#
#        # Favicons and web manifest
#        location ~* ^/(favicon\.ico|favicon-\d+x\d+\.png|apple-touch-icon\.png|android-chrome-\d+x\d+\.png|site\.webmanifest)$ {
#            root /var/www/resume/public;
#            access_log off;
#            expires 30d;
#            add_header Cache-Control "public, immutable";
#        }
#
#        # Serve pre-rendered HTML for known routes; fall back to Bun for 404s
#        location / {
#            root /var/www/resume/public;
#            try_files $uri $uri.html $uri/index.html @bun;
#        }
#
#        location @bun {
#            proxy_pass http://127.0.0.1:PORT;
#            proxy_set_header Host $host;
#            proxy_set_header X-Real-IP $remote_addr;
#            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#        }
#    }
#
#    sudo ln -s /etc/nginx/sites-available/resume /etc/nginx/sites-enabled/
#    sudo nginx -t && sudo systemctl reload nginx
```

## CI/CD

Push to `main` → GitHub Actions runs typecheck on `ubuntu-latest`, then deploys via the self-hosted Pi runner:
- pulls latest code into `/var/www/resume`
- runs `bun install`
- runs `bun run build` (compiles CSS, JS bundle, and pre-renders HTML)
- restarts the `resume` systemd service
