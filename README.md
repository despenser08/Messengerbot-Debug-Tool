# Messengerbot-Debug-Tool

MessengerBot Debug Tool in Node.js

#### 이 패키지는 메신저봇 API들의 메소드를 가져왔으며, 제대로 작동하지 않을 수 있다는 것을 감안해주십시오.

## 1. 사용방법

### 이 코드를 디버깅할때만 코드 맨 위에 붙여놓으십시오.

#### JavaScript/API1 (미완성) :

```js
const {} = require("messengerbotr-debug-tool/API2"); // 패키지 가져오기
// 클래스들 가져오기
```

#### JavaScript/API2 (개발중) :

```js
const {
    app,
    botManager,
    broadcast,
    database,
    Event,
    http,
    security,
    sessionManager,
} = require("messengerbotr-debug-tool/API2"); // 패키지 가져오기
// 클래스들 가져오기
const App = new app();
const BotManager = new botManager(
    "봇 이름",
    "유저네임",
    ["방 이름 1", "방 이름 2"],
    "com.kakao.talk"
);
const Broadcast = new broadcast();
const Database = new database();
const Http = new http();
const Security = new security();
const SessionManager = new sessionManager();
```
