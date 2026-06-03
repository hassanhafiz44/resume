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
#        location / {
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
- restarts the `resume` systemd service
