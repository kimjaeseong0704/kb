import { useContext } from "react";
import Header from "../common/Header";
import { 전역값, 프롭스 } from "../../context/globalContext";

function First() {
  const 값 = useContext<프롭스 | null>(전역값);
  const 페이지변경 = (e:React.MouseEvent<HTMLButtonElement>) =>{
    값?.페이지설정(1); 
  }
    return (
      <>
        <Header />
        <div className={`바디`}>
          <button onClick={페이지변경}>
            <span>환전 대화로 신청하기</span>
            <span>환전 어려우신가요? <br />은행원 아거와 대화하며<br />쉽게 환전해보세요!</span>
          </button>
          <div>
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
            더미 텍스트<br /><br />
          </div>
        </div>
      </>
    )
  }
  
export default First
  