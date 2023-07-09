import { createContext } from 'react'
import { portMain } from '../testing'

export const SERVER = `http://localhost:${portMain}`

export const LIST_GET_NEWS = `${SERVER}/namelist/news/api`

export const LOGIN_API = `${SERVER}/member/login`

export const REGISTER_API = `${SERVER}/member/register`

export const LIST_CART = `${SERVER}/CartList/CreateCart`

const FileNewsInfo = createContext(null)

export default FileNewsInfo
