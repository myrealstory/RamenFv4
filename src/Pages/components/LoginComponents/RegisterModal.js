import React, { useState, useRef, useEffect ,useContext} from 'react'
import { REGISTER_API } from '../../../configs/AjaxPath'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '../../../../node_modules/@fortawesome/free-solid-svg-icons'
import sqlLoginContext from './sqlLoginContext'
import { useNavigate} from 'react-router-dom'

function RegisterModal() {
  const USER_REGEX = /^[A-z\][a-z0-9-_]{3,23}$/
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
  const { setAuth } = useContext(sqlLoginContext);
  const navigate = useNavigate();

  const userRef = useRef()
  const errRef = useRef()
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)
  const [matchPwd, setMatchPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const [triggerhidden, setTriggerHidden] = useState(false);
  const [myForm, setMyForm] = useState({
    username: '',
    password: '',
    CustomerName: '',
    Email: '',
    mobile: '',
    address: '',
    birthday: '',
  })

  useEffect(() => {
    userRef.current.focus()
  }, [])
  useEffect(() => {
    setValidName(USER_REGEX.test(myForm.username))
  }, [USER_REGEX, myForm.username])
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(myForm.password))
  }, [myForm.password, matchPwd, PWD_REGEX])
  useEffect(() => {
    setErrMsg('')
  }, [myForm.username, myForm.password, matchPwd])

  const changeFields = (event) => {
    const id = event.target.id
    const val = event.target.value
    console.log({ id, val })

    setMyForm({ ...myForm, [id]: val })

    if (id in ['username', 'password']) {
      const v1 = USER_REGEX.test(myForm.username)
      const v2 = PWD_REGEX.test(myForm.password)
      if (!v1 || !v2) {
        setErrMsg('invalid Entry')
      }
    }
  }

  const whenSubmit = (event) => {
    event.preventDefault()
    console.log(myForm)

    fetch(REGISTER_API, {
      method: 'POST',
      body: JSON.stringify(myForm),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          setSuccess(true)
          alert(`'${myForm.username} Registered had been Successful'`)
         navigate('/')

        }
      })
  }

  return (
    <>
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div
        className="HideBTN"
        onClick={() => {
          setTriggerHidden(true)
        }}
      ></div>
      <div className="RegContainer">
        <div className="RegRow">
          <h3 className="RegTitle">會員註冊 Member Sign up </h3>
          <form action="" name="form1" onSubmit={whenSubmit}>
            <div className="Formbox">
              <div className="mr-3">
                <label htmlFor="username">
                  Insert Your UserName :
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validName ? 'valid' : 'hide'}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={
                      validName || !myForm.username ? 'hide' : 'invalid'
                    }
                  />
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  onChange={changeFields}
                  ref={userRef}
                  required
                  aria-invalid={validName ? 'false' : 'true'}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className="LoginInput"
                  value={myForm.username}
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && myForm.username && !validName
                      ? 'instructions'
                      : 'offscreen'
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, htphens allowed.
                </p>

                <label htmlFor="CustomerName">Insert Your Name : </label>
                <input
                  type="text"
                  name="CustomerName"
                  id="CustomerName"
                  placeholder="請輸入您的名字"
                  className="LoginInput"
                  value={
                    triggerhidden
                      ? (myForm.CustomerName = '張國榮')
                      : myForm.CustomerName
                  }
                  onChange={changeFields}
                />

                <label htmlFor="Mobile">Insert Your Mobile Number : </label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="請輸入手機號碼"
                  className="LoginInput"
                  value={
                    triggerhidden
                      ? (myForm.mobile = '0987194870')
                      : myForm.mobile
                  }
                  onChange={changeFields}
                />
                <label htmlFor="Mobile">Insert Your birthday : </label>
                <input
                  type="date"
                  name="birthday"
                  id="birthday"
                  placeholder="請輸入手機號碼"
                  className="LoginInput"
                  value={myForm.birthday}
                  onChange={changeFields}
                />
              </div>
              <div className="ml-3">
                <label htmlFor="password">
                  Insert Your Password :
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validPwd ? 'valid' : 'hide'}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={
                      validPwd || !myForm.password ? 'hide' : 'invalid'
                    }
                  />
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={userRef}
                  className="LoginInput"
                  onChange={changeFields}
                  required
                  aria-invalid={validPwd ? 'false' : 'true'}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  value={myForm.password}
                />
                <p
                  id="pwdnote"
                  class={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character
                  <br />
                  Allowed special characters:{' '}
                  <span aria-label="exclamation mark"> ! </span>
                  {''}
                  <span aria-label="at symbol">@</span>
                  {''}
                  <span aria-label="hashtag">#</span>
                  {''}
                  <span aria-label="dollar sign">$</span>
                  {''}
                  <span aria-label="percent">%</span>
                </p>

                <label htmlFor="Email">Insert Your Email : </label>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  placeholder="請輸入您的郵箱"
                  className="LoginInput"
                  value={
                    triggerhidden
                      ? (myForm.Email = 'gogopowerRanger@gmail.com')
                      : myForm.Email
                  }
                  onChange={changeFields}
                />

                <label htmlFor="address">Insert Your Home address : </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="請輸入地址"
                  className="LoginInput"
                  value={triggerhidden?myForm.address="台北區地下道第505個大坑洞1號":myForm.address}
                  onChange={changeFields}
                />
              </div>
            </div>
            <button type="submit" className="LoginBtn">
              確認註冊
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterModal
