import 'express'
import { Link } from '../models/link';

type LinkType = typeof Link;

declare module 'express' {
  export interface Link extends LinkType {}
}