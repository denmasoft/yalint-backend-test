import {Router} from 'express';
import axios  from 'axios';
export const iprequester = Router();

iprequester.get('', async (req, res, next) => {
  try {
    const Request = await axios.get('https://api.ipify.org/?format=json');
    const hostExternalIp = Request.data.ip;
    res.json({'RequesterIP': req.connection.remoteAddress, 'RequesterRealIP': req.headers['x-real-ip']?req.headers['x-real-ip']:null, 'HostExternalIP': hostExternalIp });
  } catch (e) {
    next(e);
  }
});
