# NETFLIX (2023.01.17 ~ )
    
    - 넷플릭스를 보다가 만들고 싶어져서 움직인게 동기
    - 사용: Node.js, react, redux, styled-component, firebase
    
    -코로나 걸려서 휴식

    2023.01.30 (재시작)
    - firebase로 입력한 이메일과 비밀번호를 보내는 과정에서 [Module not found: Error: Package path . is not exported from package] 에러 발생 -> "https://stackoverflow.com/questions/70445014/module-not-found-error-package-path-is-not-exported-from-package"의 방법대로 해결하니 formValues is not iterable에러 -> handleSign에서 formValues로 받은 email, password를 분해해 꺼내오는 과정에서 배열로 설정했었음 -> 수정 후 정상작동

    