import {Request, Response} from 'express';
type ReqRes = {
  req: Request,
  res: Response
}
function postLink({req, res}: ReqRes){
  res.send('postLink');
}

function getLink({req, res}: ReqRes){
  res.send('getLink');
}

function hitLink({req, res}: ReqRes){
  res.send('hitLink');
}

export default {
  postLink,
  getLink,
  hitLink
}