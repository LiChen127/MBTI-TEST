import nodemailer from 'nodemailer';
import jsYaml from 'js-yaml';
import http from 'http';
import url from 'url';
const mailConfig = jsYaml.load(fs.readFileSync('./mail.yaml', "utsf8"));
const transPort = nodemailder.createTransport({
    service: "qq",
    port: 587,
    host: 'smtp.qq.com',
    secure: true,
    auth: {
        pass: mailConfig.pass,
        user: mailConfig.user
    }
})

http.createSever((req, res) => {
  const { pathName } = url.parse(req.url);
  if (req.method === 'POST' && pathName === '/send/mail') {
    let mainInfo = '';
  }
})