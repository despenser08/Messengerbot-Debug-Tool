"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionManager = exports.security = exports.http = exports.Event = exports.database = exports.broadcast = exports.botManager = exports.app = void 0;
const fs_1 = __importDefault(require("fs"));
class app {
    /**
     * 어플리케이션 Context를 반환합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    getContext() { }
    /**
     * `task`를 UIThread에서 호출합니다. `task`가 끝나면, `onComplete`를 호출합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * `onComplete`에는 `error:Throwable`과 `task`의 반환값이 인자로 주어집니다.
     *
     * @param task `task`를 UIThread에서 호출합니다.
     * @param onComplete `task`가 끝나면, `onComplete`를 호출합니다.
     * @returns void
     */
    runOnUiThread(task, onComplete) {
        let result, error;
        try {
            result = task();
        }
        catch (e) {
            error = e;
        }
        onComplete(error, result);
    }
}
exports.app = app;
class Bot {
    constructor(botName, sender, rooms, packageName = "com.kakao.talk") {
        this.botName = botName;
        this.sender = sender;
        this.rooms = rooms;
        this.packageName = packageName;
    }
    /**
     * 커맨드 접두어를 설정합니다. 메시지가 prefix로 시작하면 Event.COMMAND이벤트가 발생합니다.
     *
     * @param prefix 접두사
     * @returns void
     */
    setCommandPrefix(prefix) {
        this.prefix = prefix;
    }
    /**
     * 해당 패키지의 해당 방으로 메시지를 보냅니다. `packageName`이 `null`일 경우 패키지명을 구분하지 않습니다.
     *
     * @param room 방 이름
     * @param msg 메시지
     * @param packageName 패키지 이름
     * @returns Boolean
     */
    send(room, msg, packageName) {
        if (room === this.rooms[0] &&
            (packageName === null || packageName === this.packageName)) {
            console.log(`[${this.botName}] Room: ${room} | From: ${this.sender} | Package Name: ${packageName ? packageName : "All"}\n[${this.botName}]: ${msg}`);
            return true;
        }
        return false;
    }
    /**
     * 해당 패키지의 해당 방의 세션을 가지고 있는지 확인합니다. 가지고 있다면 `true`, 그렇지 않다면 `false`를 반환합니다.
     *
     * `packageName`이 `null`일 경우 패키지명을 구분하지 않습니다.
     *
     * @param room 방 이름
     * @param packageName 패키지 이름
     * @returns Boolean
     */
    canReply(room, packageName) {
        if (room === this.rooms[0] &&
            (packageName === null || packageName === this.packageName))
            return true;
        return false;
    }
    /**
     * 현재 봇의 이름을 반환합니다.

     * @returns String
     */
    getName() {
        return this.botName;
    }
    /**
     * 현재 봇의 전원을 설정합니다.
     *
     * @param power 전원 여부
     * @returns void
     */
    setPower(power) {
        this.power = power;
    }
    /**
     * 현재 봇의 전원 상태를 반환합니다.
     *
     * @returns Boolean
     */
    getPower() {
        return this.power;
    }
    /**
     * 현재 봇을 컴파일합니다.
     *
     * @returns void
     */
    compile() {
        this.power = true;
        console.log(`[${this.botName}] Compiled.`);
    }
    /**
     * 현재 봇을 언로드합니다.
     *
     * @returns void
     */
    unload() {
        this.power = false;
        console.log(`[${this.botName}] Unloaded; Bot will not work`);
    }
    /**
     * 이벤트 리스너를 등록합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param eventName 이벤트 이름
     * @param listener 리스너
     * @returns void
     */
    on(eventName, listener) {
        this.events[eventName].push(listener);
    }
    /**
     * Bot#on과 같습니다.
     *
     * @param eventName 이벤트 이름
     * @param listener 리스너
     * @returns void
     */
    addListener(eventName, listener) {
        this.on(eventName, listener);
    }
    /**
     * 마지막으로 등록된 이벤트 리스너를 해제합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param eventName 이벤트 이름
     * @param listener 리스너
     * @returns void
     */
    off(eventName, listener) {
        this.events[eventName].pop();
    }
    /**
     * Bot#off와 같습니다.
     *
     * @param eventName 이벤트 이름
     * @param listener 리스너
     * @returns void
     */
    removeListener(eventName, listener) {
        this.off(eventName, listener);
    }
    /**
     * 모든 이벤트 리스너를 해제합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param eventName 이벤트 이름
     * @returns void
     */
    removeAllListeners(eventName) {
        while (this.events[eventName].length === 0)
            this.events[eventName].shift();
    }
    /**
     * 이벤트 리스너를 등록합니다. `Bot#addListener`와의 차이점은 `Bot#addListener`는 리스너 리스트의 뒤에 추가하는 반면, `Bot#prependListener`는 앞에 추가합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param eventName 이벤트 이름
     * @param listener 리스너
     * @returns void
     */
    prependListener(eventName, listener) {
        this.events[eventName].unshift(listener);
    }
    /**
     * 등록된 이벤트 리스너들을 반환합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param eventName 이벤트 이름
     * @returns Function[]
     */
    listeners(eventName) {
        return this.events[eventName];
    }
}
class botManager {
    /**
     * @param BotName 봇 이름
     * @param Sender 유저네임
     * @param Rooms 방 이름들 (첫번째 방이 디버그할 방 이름이 됩니다.)
     * @param PackageName 알림을 읽을 패키지의 이름 (기본: `com.kakao.talk`)
     */
    constructor(BotName, Sender, Rooms, PackageName = "com.kakao.talk") {
        this.botName = BotName;
        this.sender = Sender;
        this.rooms = Rooms;
        this.packageName = PackageName;
    }
    /**
     * 현재 스크립트에 할당된 `Bot`을 반환합니다.
     *
     * @returns Bot
     */
    getCurrentBot() {
        return new Bot(this.botName, this.sender, this.rooms, this.packageName);
    }
    /**
     * 해당 이름을 가진 `Bot`을 반환합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @return null
     */
    getBot() {
        return null;
    }
    /**
     * `packageName`앱에서 받은 메시지들의 방제를 배열로 반환합니다.
     *
     * `packageName`이 null이면 모든 앱에서 받은 메시지들의 방제를 배열로 반환합니다.
     *
     * @param packageName 패키지 이름
     * @returns String[]
     */
    getRooms(packageName) {
        return this.rooms;
    }
    /**
     * 모든 `Bot` 인스턴스를 반환합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns Bot[]
     */
    getBotList() {
        let bots;
        bots.push(new Bot(this.botName, this.sender, this.rooms, this.packageName));
        return bots;
    }
    /**
     * 해당 봇의 활성 상태를 반환합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param botName 봇 이름
     * @returns Boolean
     */
    getPower(botName) {
        if (botName === this.botName)
            return this.getCurrentBot().getPower();
        return false;
    }
    /**
     * 해당 봇의 활성 상태를 변경합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param botName 봇 이름
     * @param power 전원 여부
     * @returns void
     */
    setPower(botName, power) {
        if (botName === this.botName)
            this.getCurrentBot().setPower(power);
    }
    /**
     * 해당 봇을 컴파일합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param botName 봇 이름
     * @param throwOnError 에러 받기
     * @returns Boolean
     */
    compile(botName, throwOnError = false) {
        if (botName === this.botName) {
            try {
                this.getCurrentBot().compile();
                return true;
            }
            catch (e) {
                if (throwOnError)
                    throw e;
                return false;
            }
        }
        return false;
    }
    /**
     * 모든 봇을 컴파일합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns void
     */
    compileAll() {
        this.getCurrentBot().compile();
    }
    /**
     * 해당 봇이 한번도 컴파일되지 않은 경우 컴파일 합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param botName 봇 이름
     * @param throwOnError 에러 받기
     * @returns Number
     */
    prepare(botName, throwOnError) {
        if (botName === this.botName) {
            try {
                this.getCurrentBot().compile();
                return 1;
            }
            catch (e) {
                if (throwOnError)
                    throw e;
                return 1;
            }
        }
        return 2;
    }
    /**
     * 모든 봇을 `prepare` 합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param throwOnError 에러 받기
     * @returns Number
     */
    prepareAll(throwOnError) {
        try {
            this.getCurrentBot().compile();
            return 1;
        }
        catch (e) {
            if (throwOnError)
                throw e;
            return 1;
        }
        // return 0;
    }
    /**
     * 해당 봇이 컴파일되어 있으면 `true`, 그렇지 않으면 `false`를 반환합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param botName 봇 이름
     * @returns Boolean
     */
    isCompiled(botName) {
        if (botName === this.botName)
            return true;
        return false;
    }
    /**
     * 해당 봇을 언로드합니다. 이렇게 하면 `isCompiled` 플래그가 `false`가 됩니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param botName 봇 이름
     * @returns void
     */
    unload(botName) {
        if (botName === this.botName)
            this.getCurrentBot().unload();
    }
}
exports.botManager = botManager;
class broadcast {
    /**
     * 이벤트 리스너를 등록합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param eventName 이벤트 이름
     * @param task 테스크
     * @returns void
     */
    register(eventName, task) {
        this.events.push({ eventName: eventName, task: task });
    }
    /**
     * 해당 이벤트에 등록한 리스너를 해제합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param eventName 이벤트 이름
     * @param task 테스크
     * @returns void
     */
    unregister(eventName, task) {
        for (let i = 0; i < this.events.length; i++) {
            if (eventName === this.events[i].eventName &&
                task === this.events[i].task)
                this.events.splice(i);
        }
    }
    /**
     * 모든 봇을 대상으로 해당 이벤트를 방출합니다. `value`는 `task`의 인자로 주어집니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @param eventName 이벤트 이름
     * @param value 테스트 인자 값
     */
    send(eventName, value) {
        this.events.forEach((event) => {
            if (eventName === event.eventName)
                event.task(value);
        });
    }
}
exports.broadcast = broadcast;
class database {
    /**
     * `obj`를 JSON string으로 변환하여 봇 로컬 폴더 내의 Database폴더에 `fileName`으로 저장합니다.
     *
     * @param fileName 파일 이름
     * @param obj JS 오브젝트
     * @returns void
     */
    writeObject(fileName, obj) {
        fs_1.default.writeFileSync(`Database/${fileName}`, JSON.stringify(obj));
    }
    /**
     * `str`의 내용을 봇 로컬 폴더 내의 Database폴더에 `fileName`으로 저장합니다.
     *
     * @param fileName 파일 이름
     * @param str 내용
     * @returns void
     */
    writeString(fileName, str) {
        fs_1.default.writeFileSync(`Database/${fileName}`, str.toString());
    }
    /**
     * 봇 로컬 폴더 내의 Database폴더에 있는 `fileName`파일을 읽어 자바스크립트 Object로 반환합니다.
     *
     * 이때 해당 파일은 json이어야 합니다.
     *
     * @param fileName 파일 이름
     * @returns Object
     */
    readObject(fileName) {
        try {
            return JSON.parse(fs_1.default.readFileSync(`Database/${fileName}`, { encoding: "utf-8" }));
        }
        catch (e) {
            throw e;
        }
    }
    /**
     * 봇 로컬 폴더 내의 Database폴더에 있는 `fileName`파일의 내용을 반환합니다.
     *
     * @param fileName 파일 이름
     * @returns String
     */
    readString(fileName) {
        try {
            return fs_1.default.readFileSync(`Database/${fileName}`, {
                encoding: "utf-8",
            });
        }
        catch (e) {
            throw e;
        }
    }
    /**
     * 봇 로컬 폴더 내의 Database폴더에 `fileName`파일의 존재 여부를 반환합니다.
     *
     * @param fileName 파일 이름
     * @returns Boolean
     */
    exists(fileName) {
        return fs_1.default.existsSync(`Database/${fileName}`);
    }
}
exports.database = database;
var Event;
(function (Event) {
    Event["MESSAGE"] = "message";
    Event["COMMAND"] = "command";
    Event["START_COMPILE"] = "startCompile";
    Event["NOTIFICATION_POSTED"] = "notificationPosted";
    Event["TICK"] = "tick";
    Event["ActivityCREATE"] = "activityCreate";
    Event["ActivitySTART"] = "activityStart";
    Event["ActivityRESUME"] = "activityResume";
    Event["ActivityPAUSE"] = "activityPause";
    Event["ActivitySTOP"] = "activityStop";
    Event["ActivityRESTART"] = "activityRestart";
    Event["ActivityDESTROY"] = "activityDestroy";
    Event["ActivityBACK_PRESSED"] = "activityBackPressed";
})(Event = exports.Event || (exports.Event = {}));
class http {
    /**
     * 해당 url에 Jsoup를 통해 request를 보냅니다. 이 메서드는 비동기적입니다.
     *
     * callBack에 전달되는 인자:
     * ```js
     * error: java.lang.Exception
     * response: org.jsoup.Connection.Response
     * doc: org.jsoup.nodes.Document
     * ```
     *
     * Jsoup를 통해 request를 보냅니다. 이 메서드는 비동기적입니다.
     *
     * options의 형태:
     * ```js
     * {
     *   "url": "https://www.google.com", //request를 보낼 url
     *   "timeout": 3000, //request timeout(ms), 기본값 3000
     *   "method": "GET", //request 메서드, 기본값 "GET"
     *   "headers": { //request header, 기본값 null
     *     //헤더들을 여기 넣으세요
     *   }
     * }
     * ```
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    request() { }
    /**
     * 동기적으로 `request`를 수행합니다. org.jsoup.nodes.Document를 반환합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    requestSync() { }
}
exports.http = http;
class security {
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    base64Encode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    base64Decode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    base32Encode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    base32Decode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    aesEncode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    aesDecode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    ariaEncode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    ariaDecode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    deskey() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    desEncode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    desDecode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    des3Encode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    des3Decode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    seedEncode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    seedDecode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    rc4Encode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    rc4Decode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    eccKey() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    eccEncode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    eccDecode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    hashCode() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    md2() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    md5() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    sha() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    sha256() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    sha384() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    sha512() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    sha3_224() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    sha3_256() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    sha3_384() { }
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    sha3_512() { }
}
exports.security = security;
class sessionManager {
    /**
     * `packageName`이라는 메신저 앱의 `room`채팅방에 대해 메시지 전송 액션인 `action`을 할당합니다.
     *
     * 이렇게 하면 [Bot#send](https://gist.github.com/mir99712/6b428aa0c1bacfa170c8d140fa34e336#boolean-sendstring-room-string-msg-string-packagename--null),
     * [msg#reply](https://gist.github.com/mir99712/6b428aa0c1bacfa170c8d140fa34e336#message--message)등을 사용할 수 있게 됩니다.
     *
     * `action`이 `null`일 경우 메신저봇이 자동 분석한 답장 액션을 사용합니다.
     *
     * `action`이 `null`이고, 메신저봇이 자동 분석한 답장 액션 또한 `null`일 경우 `false`를 반환하며, 그 외에는 `true`를 반환합니다.
     *
     * `bindSession(String packageName, String room, Notification.Action action = null)`과 매커니즘은 같지만, `packageName`을 메신저봇이 자동 분석합니다.
     *
     * `action`이 `null`일 경우 메신저봇이 자동 분석한 답장 액션을 사용합니다.
     *
     * `action`이 `null`이고, 메신저봇이 자동 분석한 답장 액션 또한 `null`일 경우 `false`를 반환하며, 그 외에는 `true`를 반환합니다.
     *
     * 이 메소드는 아직 지원하지 않습니다.
     *
     * @returns any
     */
    bindSession() { }
}
exports.sessionManager = sessionManager;
