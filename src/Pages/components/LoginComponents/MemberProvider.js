import React, { createContext } from 'react'
import { portMain } from '../../../testing';

export const SERVER = `http://localhost:${portMain}`

export const LIST_GET_MEMBER = `${SERVER}/member/api`;

const MemberProvider = createContext(null)

export default MemberProvider
