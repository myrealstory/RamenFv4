import React, { createContext } from 'react'

export const SERVER = 'http://localhost:3600'

export const LIST_GET_MEMBER = `${SERVER}/member/api`;

const MemberProvider = createContext(null)

export default MemberProvider
