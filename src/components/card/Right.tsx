type 프롭스타입 = {
    메세지 : string,
}

function Right(프롭스:프롭스타입) {
    return (
        <>
            <div className={`메세지 오른쪽`}>{프롭스.메세지}</div>
        </>
    )
}

export default Right
