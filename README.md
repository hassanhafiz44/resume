# Resume

Personal resume web app built with Bun + Hono. Serves the resume as a styled HTML page with a PDF download.

## Local development

```sh
bun install
bun run dev        # http://localhost:8086
```

## Lightsail — one-time setup

Run these once on the Lightsail instance to bootstrap the app:

```sh
# 0. Install Bun and git (if not already present)
sudo apt-get update && sudo apt-get install -y git unzip
curl -fsSL https://bun.sh/install | bash
# re-login or `source ~/.bashrc` so `bun` is on PATH

# 1. Clone
sudo mkdir -p /var/www/resume
sudo chown $USER:$USER /var/www/resume
git clone <your-github-repo-url> /var/www/resume
cd /var/www/resume && bun install

# 2. Install systemd service
# Edit deploy/resume.service: update ExecStart path to match your user
#   which bun   ← run this to find the correct path, e.g. /home/ubuntu/.bun/bin/bun
sudo cp deploy/resume.service /etc/systemd/system/resume.service
sudo systemctl daemon-reload
sudo systemctl enable --now resume
sudo systemctl status resume

# 3. Allow the deploy user to restart the service without a password
#    Add this line via: sudo visudo
#    <ssh-deploy-user> ALL=(ALL) NOPASSWD: /bin/systemctl restart resume

# 4. Nginx — install and proxy port PORT
sudo apt-get install -y nginx
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

```sh
# 5. Lightsail networking firewall
#    In the Lightsail console, open the instance's "Networking" tab and add
#    firewall rules for HTTP (80) and HTTPS (443) — SSH (22) is open by default.

# 6. HTTPS via Let's Encrypt
#    Point your domain's A record (and www) at the instance's public IP first.
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com --redirect
#    Certbot edits the nginx server block to add the SSL listener and an
#    HTTP -> HTTPS redirect, and installs a systemd timer (certbot.timer)
#    that auto-renews the certificate before it expires.

# 7. Redirect www -> apex domain (avoids duplicate-content / canonical issues
#    in Google Search Console). Certbot's --redirect only adds HTTP->HTTPS
#    redirects for each host — it does NOT consolidate www into the apex.
#    Add a dedicated HTTPS server block for the www host, and point the
#    www case of certbot's HTTP redirect at the apex domain too:
#
#    server {
#        server_name www.yourdomain.com;
#        listen 443 ssl; # managed by Certbot
#        ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem; # managed by Certbot
#        ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem; # managed by Certbot
#        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
#        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
#        return 301 https://yourdomain.com$request_uri;
#    }
#
#    Then change the certbot-managed HTTP block's www case from:
#        if ($host = www.yourdomain.com) {
#            return 301 https://$host$request_uri;
#        }
#    to:
#        if ($host = www.yourdomain.com) {
#            return 301 https://yourdomain.com$request_uri;
#        }
#
#    sudo nginx -t && sudo systemctl reload nginx
```

## CI/CD

Push to `main` → GitHub Actions runs typecheck on `ubuntu-latest`, then deploys to the Lightsail instance over SSH:
- connects via SSH using `appleboy/ssh-action`
- pulls latest code into `/var/www/resume`
- runs `bun install`
- runs `bun run build` (compiles CSS, JS bundle, and pre-renders HTML)
- restarts the `resume` systemd service

### Required GitHub secrets

Set these in the repo under **Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `LIGHTSAIL_HOST` | Public IP or domain of the Lightsail instance |
| `LIGHTSAIL_USER` | SSH username (e.g. `ubuntu`) |
| `LIGHTSAIL_SSH_KEY` | Private key (PEM contents) for a key whose public half is in the instance's `~/.ssh/authorized_keys` |
