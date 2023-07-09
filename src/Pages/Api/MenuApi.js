import { createContext } from 'react'
import { portMain } from '../../testing'

export const SERVER = `https://ramenbackdb.zeabur.app/`

export const LIST_GET_MENUS = `${SERVER}/Menulist/api/menu`

const FileMenuInfo = createContext(null)

export default FileMenuInfo
