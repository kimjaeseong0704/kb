import { useContext, useEffect } from "react";
import First from "./page/First";
import Second from "./page/Second";

import { 전역값, 프롭스 } from "../context/globalContext"
import BottomSheet from "./common/BottomSheet";



function Funnel() {
    const 값 = useContext<프롭스 | null>(전역값);
    const 페이지변경 = (e:React.ChangeEvent<HTMLSelectElement>) =>{
      값?.페이지설정(Number(e.target.value)); 
    }
    const 바텀시트변경 = (e:React.ChangeEvent<HTMLSelectElement>) =>{
      console.log(Boolean(e.target.value));
      값?.바텀시트설정(Boolean(Number(e.target.value)));
    }
    useEffect(()=>{
      console.log('바텀시트변경');
    },[값?.바텀시트])
    return (
      <>

        {값?.페이지 === 0 && <First />}
        {값?.페이지 === 1 && <Second />}
        {값?.바텀시트 && <BottomSheet />}
        <div className="컨트롤" >
          <div className="타이틀">제어센터</div>
          <div>
            <label>페이지 :{" "}
              <select onChange={페이지변경} value={값?.페이지 ? 1 : 0}>
                <option value={0}>첫번째</option>
                <option value={1}>두번째</option>
              </select>
            </label>
          </div>
          <div>
            <label>바텀시트 :{" "}
              <select onChange={바텀시트변경} value={값?.바텀시트 ? 1 : 0}>
                <option value={0} >close</option>
                <option value={1}>open</option>
              </select>
            </label>
          </div>
          <div>
            <label>채팅 :{" "}
              <button style={{height:18, padding: '0 2px'}}>뭘넣을가</button>
            </label>
          </div>
        </div>
      </>
    )
  }
  
  export default Funnel
  