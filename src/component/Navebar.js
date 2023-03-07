import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";

const Navebar = () => {

  const navigate = useNavigate()

  const gotologin = ({})=>{
    navigate('/login')
    
  }

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&MHOME', ,'스포츠', 'Sale', '지속가능성']

    const search = (event)=>{

      if(event.key == 'Enter'){
        let keyWord = event.target.value

        console.log('keyword',keyWord)

        navigate(`/?q=${keyWord}`)

      } 

    }

const gotohome = ()=>{
  navigate('/')
}

  return (
    <div>
      <div className="login-button" onClick={gotologin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nave-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          onClick={gotohome}
          className="img-button"
        />
      </div>
      <div className="meue-section">
        <ul className="menu">
            {menuList.map((meun)=><li>{meun}</li>)}
        </ul>
        <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input type={text} className='input-box' onKeyPress={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
