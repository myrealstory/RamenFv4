import React, { createContext } from 'react'
import { portMain } from '../../../testing';

export const SERVER = `https://ramenbackdb.zeabur.app/`

export const LIST_GET_MEMBER = `${SERVER}/member/api`;

const MemberProvider = createContext(null)

export default MemberProvider
