import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../common/Header"
import Left from "../card/Left";
import Right from "../card/Right";

type 프롭스타입 = {
  아이디 : string,
  순서 : number,
  컴포넌트 : JSX.Element,
  활성화 : boolean,
  노출여부 : boolean,
}

function Second() {
  const box = useRef<HTMLInputElement>(null);
   const [카드, 카드설정] = useState<프롭스타입[]>([
    {
      아이디 : uuidv4(),
      순서 : 1,
      컴포넌트 : <Left 메세지={`111111`} />,
      활성화 : false,
      노출여부 : false,
    },
    {
      아이디 : uuidv4(),
      순서 : 2,
      컴포넌트 : <Right 메세지={`22222`} />,
      활성화 : false,
      노출여부 : false,
    },
    {
      아이디 : uuidv4(),
      순서 : 3,
      컴포넌트 : <Left 메세지={`333333`} />,
      활성화 : false,
      노출여부 : false,
    },
    {
      아이디 : uuidv4(),
      순서 : 4,
      컴포넌트 : <Right 메세지={`44444`} />,
      활성화 : false,
      노출여부 : false,
    },
    {
      아이디 : uuidv4(),
      순서 : 5,
      컴포넌트 : <Left 메세지={`5555`} />,
      활성화 : false,
      노출여부 : false,
    },
    {
      아이디 : uuidv4(),
      순서 : 6,
      컴포넌트 : <Right 메세지={`6666666`} />,
      활성화 : false,
      노출여부 : false,
    },
    {
      아이디 : uuidv4(),
      순서 : 8,
      컴포넌트 : <Right 메세지={`888888`} />,
      활성화 : false,
      노출여부 : false,
    },
    {
      아이디 : uuidv4(),
      순서 : 9,
      컴포넌트 : <Right 메세지={`9999999`} />,
      활성화 : false,
      노출여부 : false,
    },
    {
      아이디 : uuidv4(),
      순서 : 10,
      컴포넌트 : <Right 메세지={`1010101010101010`} />,
      활성화 : false,
      노출여부 : false,
    },
    {
      아이디 : uuidv4(),
      순서 : 11,
      컴포넌트 : <Right 메세지={`11 11 11 11 11 11`} />,
      활성화 : false,
      노출여부 : false,
    },
   ]);

   const [위치, 위치설정] = useState(0)

   const 초기화 = () =>{
    카드설정((이전값)=>{
      const 업데이트값 = 이전값.map((아이템)=>{
        return {...아이템, 활성화: false, 노출여부: false};
      })
      위치설정(0)
      return [...업데이트값]
    })
   }

    const 추가 = () =>{
      위치설정(위치+1);
      카드설정((이전값)=>{
        const 업데이트값 = 이전값.map((아이템, 인덱스)=>{
            if(인덱스 === 위치){
                return {...아이템, 활성화: true};
            }else{
                return 아이템
            }
        })
        return [...업데이트값]
      })

      setTimeout(() => {
        if (box.current) box.current.scrollTop = box.current.offsetHeight + 9999;
        카드설정((이전값)=>{
          const 업데이트값 = 이전값.map((아이템, 인덱스)=>{
              if(인덱스 === 위치){
                  return {...아이템, 노출여부: true};
              }else{
                  return 아이템
              }
          })
          return [...업데이트값]
        })
      }, 10);
    }

    return (
      <>
        <Header />
        <div className={`바디`}>
          <div className={`채팅바디`} ref={box}>
            {
                카드?.slice(0).reverse().map((아이템) =>
                  아이템.활성화 &&
                    <React.Fragment key={아이템.아이디}>
                      <div className={아이템.노출여부 === true ? "active" : ""}>
                        {아이템.컴포넌트}
                      </div>
                    </React.Fragment>
                )
            }
          </div>
          
        </div>
        <div style={{position:'fixed',right:0,bottom:0,}}>
          <button onClick={초기화}>메세지초기화</button>
          <button onClick={추가}>메세지노출</button>
          </div>
      </>
    )
  }
  
  export default Second
  