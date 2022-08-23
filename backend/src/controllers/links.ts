import { Request, Response } from 'express';
import { Link } from '../models/link'

interface Ilink {
  id?: number;
  url: string;
  code?: string;
  hits?: number; 
}

interface ReqWithLink extends Request {
  link?: Ilink;
}

const links: Link[] = [];
let proxId: 1;

function generateCode() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i=0; i<5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function postLink(req: ReqWithLink, res: Response){
  const link = req.body as Link;
  link.id = proxId++;
  link.code = generateCode();
  link.hits = 0;
  links.push(link);
  res.status(201).json(links);
}

function getLink(req: ReqWithLink, res: Response){
  res.send('getLink');
}

function hitLink(req: ReqWithLink, res: Response){
  res.send('hitLink');
}

export default {
  postLink,
  getLink,
  hitLink
}