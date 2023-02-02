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

    - Redux : [
        {
            Store: 컴포넌트의 상태를 관리하는 저장소이며 하나의 프로젝트는 하나의 스토어만 가질 수 있다.
        },
        {
            Action: 스토어의 상태를 변경하기 위해서는 액션을 생성해야한다. 액션은 객체이며 반드시 type을 가져야한다.
            액션 객체는 액션생성함수에 의해서 만들어진다.
        },
        {
            Reducer: 현재 상태와 액션 객체를 받아 새로운 상태를 리턴하는 함수이다.
        },
        {
            Dispatch: 스토어의 내장 함수 중 하나이며, 액션 객체를 넘겨줘 상태를 업데이트 시켜주는 역할을 한다.
        },
        {
            Subscribe: 스토어의 내장 함수 중 하나이며, 리듀서가 호출될 때 subscribe된 함수 및 객체를 호출한다.
        },
        - useSelector: useSelector를 사용한 함수에서 스토어의 상태값이 변경된 경우 (버튼클릭 등의 이벤트를 통해 액션이 실행되어 상태값이 변경) 바뀐 스토어의 상태값을 다시 가져와 컴포넌트를 렌더링시킨다. 
    ]

    - Redux toolkit : [
        {
            createAsyncThunk(액션 타입 문자열, 프로미스를 반환하는 비동기 함수, 추가옵션): 액션 타입 문자열과 프로미스를 반환하는 함수를 받아 [pending, fulfilled, rejected] 액션 타입을 디스패치하는 thunk를 생성한다.
        },
        {
            configureStore(): createStore를 감싸 쓸만한 기본값들과 단순화된 설정을 제공한다. 리듀서 조각들을 자동으로 합쳐주고 기본 제공되는 redux-thunk를 포함하여 내가 지정한 미들웨어를 더해준다.
        },
        {
            createReducer() : switch문을 작성하는 대신에 액션타입과 리듀서 함수를 연결해주는 목록을 작성하도록 한다.
        },
        {
            createSlice(): 조각 이름과 상태 초기값, 리듀서 함수들로 이루어진 객체를 받아 그에 맞는 액션 생산자와 액션타입을 포함하는 리듀서 조각을 자동으로 생성
        },
    ]

    - https://developers.themoviedb.org/3/getting-started/image-languages