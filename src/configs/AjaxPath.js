import { createContext } from "react";

export const SERVER = 'http://localhost:3600'

export const LIST_GET_NEWS = `${SERVER}/namelist/news/api`;

const FileNewsInfo = createContext(null);

export default FileNewsInfo;