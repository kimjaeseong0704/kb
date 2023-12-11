import { useContext } from "react";
import { 전역값, 프롭스 } from "../../context/globalContext"

function BottomSheet() {
    const 값 = useContext<프롭스 | null>(전역값);
    const 통화배열 = [
        'USD (미국달러)', 
        'JPY (일본 엔)',
        'EUR (유럽연합 유로)',
        'GBP (영국 파운드)',
        'CNY (중국 위안)',
    ]
    const 바텀시트변경 = () =>{
        값?.바텀시트설정(false);
    }
    const 통화설정 = (벨류:string) => {
        값?.통화설정(벨류)
    }
    return (
      <>
        <section className={`바텀시트`}>
            <h1>환전신청통화</h1>
            <ul>
                {
                    통화배열.map((아이템,인덱스)=>{
                        return <li className={(값?.통화 == 아이템.slice(0,3)) ? '강조' : ''} key={인덱스}><button onClick={()=> 통화설정(아이템.slice(0,3))}>{아이템}</button></li>
                    })
                }
            </ul>
            <button className={`확인`} onClick={바텀시트변경}>확인</button>
        </section>
      </>
    )
  }
  
  export default BottomSheet
  