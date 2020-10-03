module.exports = {
  apps: [
    {
      script: "index.js",
      watch: ".",
    },
  ],

  deploy: {
    production: {
      key: "/home/daniel/.ssh/id_rsa.pub",
      user: "pi",
      host: ["192.168.0.19"],
      ssh_options: "StrictHostKeyChecking=no",
      ref: "origin/master",
      repo: "git@github.com:danielkoziara/test-deploy-raspberry-pi.git",
      path: "/home/pi/apps/test-api",
      "pre-deploy-local": "",
      "post-deploy":
        "/home/pi/.nvm/versions/node/v14.13.0/bin/npm install && /home/pi/.nvm/versions/node/v14.13.0/bin/pm2 reload ecosystem.config.js",
      "pre-setup": "",
    },
  },
};
