import { createContext}  from "react";

export const SERVER = "http://localhost:3600";

export const LIST_GET_MENUS = `${SERVER}/Menulist/api/menu`;

const FileMenuInfo = createContext(null);

export default FileMenuInfo