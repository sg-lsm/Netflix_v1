# NETFLIX (2023.01.17 ~ )
    
    - 넷플릭스를 보다가 만들고 싶어져서 움직인게 동기
    - 사용: Node.js, react, redux, styled-component, firebase
    
    -코로나 걸려서 휴식

    2023.01.30 (재시작)
    - firebase로 입력한 이메일과 비밀번호를 보내는 과정에서 [Module not found: Error: Package path . is not exported from package] 
        "https://stackoverflow.com/questions/70445014/module-not-found-error-package-path-is-not-exported-from-package"
    위 방법대로 해결하니 formValues is not iterable에러 ->
    handleSign에서 formValues로 받은 email, password를 분해해 꺼내오는 과정에서 배열로 설정했었음 -> 수정 후 정상작동


    - Warning: Expected `onFocus` listener to be a function, instead got a value of `object` type.
        onFocus = () => setSearchInput(true)를 사용했더니 과도한 리렌더링으로 메인페이지가 뻗어버리는 상황이 발생해 (useEffect=()=>{ setSearch(true) },[setSearch])로 감싸주었다.
    정상작동은 하는데 콘솔창을 보니 위와같은 에러가 발생 -> 
    자식 컴포넌트가 prop으로 함수를 받았는데 그걸 그냥 이벤트 함수에 받을 경우에 생기는 에러 ->
        onFocus=()=>{
            ()=>(useEffect=()=>{
                setSearch(true)
            },[setSearch])
        } 로 해결
    한 줄 알았으나 onFocus이벤트가 작동하지 않아 한참 고민
        onFocus = {
            () => setSearch(true)
        }
        처음에 그냥 onFocus={ setSearch(true) }로 입력해 과도한 리렌더링 이슈가 발생한 것 같다.
        주의하자.

        => 함수가 아닌 이벤트 핸들러로 객체를 전달하려 했기 때문에 오류가 발생한 것으로 보인다.
        이 오류를 방지하려면 함수를 이벤트 핸들러로 전달해야한다. (()=>{})
        핸들러를 호출(setShowSearch)하고 onFocus버튼이 렌더링 될 때마다 setShowSearch 상태가 변경되고 또 다른 렌더링이 트리거로 setShowSearch가 다시 실행되어 끝없이 진행하여 뻗어버린것으로 보인다.
        
    또는 받은 인자값을 분해할당하지 않아 생기는 버그 ({ ... })=> {}로 해결해주자

    - [Expected an assignment or function call and instead saw an expression] : https://helicopter55.tistory.com/2

    - useEffect Tip : https://ui.toast.com/weekly-pick/ko_20200916

    -