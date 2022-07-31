import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_API} from '../../../configs/AjaxPath'

function LoginModal(props) {
  const [myForm, setMyForm] = useState({
    username:"",
    password:"",
  });

  const changeFields = (event)=>{
    const id = event.target.id;
    const val = event.target.value;
    console.log({id,val});
      setMyForm({...myForm,[id]: val })
  };

  const whenSubmit = (event)=>{
    event.preventDefault();
    console.log(myForm);
    fetch(LOGIN_API, {
      method: "POST",
      body: JSON.stringify(myForm),
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((r => r.json()))
      .then(result => {
        console.log(result);
      });
  }
  //這裡做fetch auth功能

  return props.trigger ? (
    <div className="popLogin">
      <div className="LoginInner">
        <button
          to=""
          className="closeBTN"
          onClick={() => {
            props.setTrigger(false);
          }}
        ></button>
        <h3 className="LoginTitle">會員登入</h3>
        <form action="" name="form1" onSubmit={whenSubmit}>
          <div className="Formbox">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="請輸入帳號"
              className="LoginInput"
              value={myForm.username}
              onChange={changeFields}
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="請輸入密碼"
              className="LoginInput"
              value={myForm.password}
              onChange={ changeFields}
            />
            <div className="LoginBox2">
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="RemeberID"
                  value=""
                />
                <lable for="RememberID"> 記住賬號 </lable>
              </div>
              <div>
                <Link to="/"> 忘記密碼? </Link>
              </div>
            </div>
            <button type="submit" className="LoginBtn">
              登入
            </button>
            <div className="registerPart">
              <span>還不是會員嗎？現在馬上</span>
              <Link to="/">註冊</Link>
            </div>
          </div>
        </form>
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  ); 
}

export default LoginModal