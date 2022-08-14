import { createContext } from "react";

export const SERVER = 'http://localhost:3600'

export const LIST_GET_NEWS = `${SERVER}/namelist/news/api`;

export const LOGIN_API = `${SERVER}/member/login`;

export const REGISTER_API = `${SERVER}/member/register`;

export const LIST_GET_MEMBER = `${SERVER}/member/api`;

const FileNewsInfo = createContext(null);

export default FileNewsInfo;