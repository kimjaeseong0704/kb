import { useContext } from "react";
import { 전역값, 프롭스 } from "../../context/globalContext"

function Header() {
    const 값 = useContext<프롭스 | null>(전역값);
    const 페이지변경 = (e:React.MouseEvent<HTMLButtonElement>) =>{
      값?.페이지설정(값?.페이지 > 0 ? 값?.페이지-1 : 0); 
    }
    return (
      <>
        <div className={`헤더`}>
          <button onClick={페이지변경}>뒤로</button>
          <h1>헤더</h1>
        </div>
      </>
    )
  }
  
export default Header
  