export default function handler(req, res) {
    let theEnvs = {
      EXPRESS_URL: process.env.EXPRESS_URL,
      EXPRESS_URL2: process.env.EXPRESS_URL2,
      EXPRESS_SERVICE_PORT: process.env.EXPRESS_SERVICE_PORT,
      EXPRESS_SERVICE_HOST: process.env.EXPRESS_SERVICE_HOST,
    };
  
    res.status(200).json(theEnvs);
  }