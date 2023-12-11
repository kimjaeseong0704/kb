import './App.css'
import { 전역값 } from "./context/globalContext"
import Funnel from './components/Funnel'
import "./App.css"
import { useState } from 'react';
function App() {


  const [페이지, 페이지설정] = useState<number>(0);
  const [바텀시트, 바텀시트설정] = useState<boolean>(false);
  const [통화, 통화설정] = useState<string>('USD');
  const [대화위치, 대화위치설정] = useState<number>(0);
  return (
    <>
      <전역값.Provider value={{
        페이지 : 페이지,
        페이지설정 : 페이지설정,
        바텀시트 : 바텀시트,
        바텀시트설정 : 바텀시트설정,
        통화 : 통화,
        통화설정 : 통화설정,
        대화위치 : 대화위치,
        대화위치설정 : 대화위치설정,
      }}>
        <Funnel />
      </전역값.Provider>
    </>
  )
}

export default App
