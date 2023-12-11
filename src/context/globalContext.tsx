import { createContext } from "react";

export type 프롭스 = {
    페이지 : number, // 0 : 시작, 1 : 대화형
    페이지설정 : (i: number) => void,
    바텀시트 : boolean, // 통화선택 바텀시트 노출여부 
    바텀시트설정 : (i: boolean) => void,
    통화 : string, // 선택된 통화
    통화설정 : (i: string) => void,
    대화위치 : number, // 대화 위치
    대화위치설정 : (i: number) => void,
    // 대화 위치 초기화 방법 제공해야됨
}

export const 전역값 = createContext<프롭스 | null>(null);