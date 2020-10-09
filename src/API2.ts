export class App {
    /**
     * 어플리케이션 Context를 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns android.content.Context
     */
    static getContext() {}

    /**
     * `onComplete`에는 `error:Throwable`과 `task`의 반환값이 인자로 주어집니다.
     *
     * 이**이 메소드는 아직 지원하지 않습니다.**
     *
     * @param task `task`를 UIThread에서 호출합니다.
     * @param onComplete `task`가 끝나면, `onComplete`를 호출합니다.
     *
     * @returns void
     */
    static runOnUiThread(
        task: Function,
        onComplete: (error: Error, task: any) => {}
    ) {}
}

export class Bot {
    /**
     * 커맨드 접두어를 설정합니다. 메시지가 prefix로 시작하면 Event.COMMAND이벤트가 발생합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param prefix 커맨드 접두어
     *
     * @returns void
     */
    static setCommandPrefix(prefix: string) {}

    /**
     * 해당 패키지의 해당 방으로 메시지를 보냅니다. `packageName`이 `null`일 경우 패키지명을 구분하지 않습니다.
     *
     * 해당 방의 세션이 있을 경우 `true`, 그렇지 않을 경우 `false`를 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param room 방 이름
     * @param msg 메시지
     * @param packageName 패키지명
     *
     * @returns Boolean
     */
    static send(room: string, msg: string, packageName: string | null = null) {}

    /**
     * 해당 패키지의 해당 방의 세션을 가지고 있는지 확인합니다. 가지고 있다면 `true`, 그렇지 않다면 `false`를 반환합니다.
     *
     * `packageName`이 `null`일 경우 패키지명을 구분하지 않습니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param room 방 이름
     * @param packageName 패키지명
     *
     * @returns Boolean
     */
    static canReply(room: string, packageName: string | null = null) {}

    /**
     * 현재 봇의 이름을 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static getName() {}

    /**
     * 현재 봇의 전원을 설정합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param power 봇의 전원
     *
     * @returns void
     */
    static setPower(power: boolean) {}

    /**
     * 현재 봇의 전원 상태를 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns Boolean
     */
    static getPower() {}

    /**
     * 현재 봇을 컴파일합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns void
     */
    static compile() {}

    /**
     * 현재 봇을 언로드합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns void
     */
    static unload() {}

    /**
     * 이벤트 리스너를 등록합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     * @param listener 이벤트 리스너
     *
     * @returns void
     */
    static on(eventName: string, listener: Function) {}

    /**
     * 이벤트 리스너를 등록합니다. (Bot#on과 같습니다.)
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     * @param listener 이벤트 리스너
     *
     * @returns void
     */
    static addListener(eventName: string, listener: Function) {}

    /**
     * 마지막으로 등록된 이벤트 리스너를 해제합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     * @param listener 이벤트 리스너
     *
     * @returns void
     */
    static off(eventName: string, listener?: Function) {}

    /**
     * 마지막으로 등록된 이벤트 리스너를 해제합니다. (Bot#off와 같습니다.)
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     * @param listener 이벤트 리스너
     *
     * @returns void
     */
    static removeListener(eventName: string, listener?: Function) {}

    /**
     * 모든 이벤트 리스너를 해제합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     *
     * @returns void
     */
    static removeAllListeners(eventName: string) {}

    /**
     * 이벤트 리스너를 등록합니다. `Bot#addListener`와의 차이점은 `Bot#addListener`는 리스너 리스트의 뒤에 추가하는 반면, `Bot#prependListener`는 앞에 추가합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     * @param listener 이벤트 리스너
     *
     * @returns void
     */
    static prependListener(eventName: string, listener: Function) {}

    /**
     * 등록된 이벤트 리스너들을 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     *
     * @returns Array\<Function>
     */
    static listeners(eventName: string) {}
}

export class BotManager {
    /**
     * 현재 스크립트에 할당된 `Bot`을 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns Bot
     */
    static getCurrentBot() {}

    /**
     * 해당 이름을 가진 `Bot`을 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param botName 봇 이름
     *
     * @returns Bot
     */
    static getBot(botName: string) {}

    /**
     * `packageName`앱에서 받은 메시지들의 방제를 배열로 반환합니다.
     *
     * `packageName`이 null이면 모든 앱에서 받은 메시지들의 방제를 배열로 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param packageName 패키지명
     *
     * @returns Array\<String>
     */
    static getRooms(packageName?: string) {}

    /**
     * 모든 `Bot` 인스턴스를 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns Array\<Bot>
     */
    static getBotList() {}

    /**
     * 해당 봇의 활성 상태를 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param botName 봇 이름
     *
     * @returns Boolean
     */
    static getPower(botName: string) {}

    /**
     * 해당 봇의 활성 상태를 변경합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param botName 봇 이름
     * @param power 봇 전원
     */
    static setPower(botName: string, power: boolean) {}

    /**
     * 모든 봇을 컴파일합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param botName 봇 이름
     * @param throwOnError 에러 받기
     *
     * @returns Boolean
     */
    static compile(botName: string, throwOnError: boolean = false) {}

    /**
     * 모든 봇을 컴파일합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns void
     */
    static compileAll() {}

    /**
     * 해당 봇이 한번도 컴파일되지 않은 경우 컴파일 합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param botName 봇 이름
     * @param throwOnError 에러 받기
     *
     * @returns Int
     */
    static prepare(botName: string, throwOnError: boolean) {}

    /**
     * 모든 봇을 `prepare` 합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param throwOnError 에러 받기
     *
     * @returns Int
     */
    static prepareAll(throwOnError: boolean) {}

    /**
     * 해당 봇이 컴파일되어 있으면 `true`, 그렇지 않으면 `false`를 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param botName 봇 이름
     *
     * @returns Boolean
     */
    static isCompiled(botName: string) {}

    /**
     * 해당 봇을 언로드합니다. 이렇게 하면 `isCompiled` 플래그가 `false`가 됩니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param botName 봇 이름
     *
     * @returns void
     */
    static unload(botName: string) {}
}

export class Broadcast {
    /**
     * 해당 이벤트에 리스너를 등록합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     * @param task 이벤트 리스너
     */
    static register(eventName: string, task: Function) {}

    /**
     * 해당 이벤트에 등록한 리스너를 해제합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     * @param task 이벤트 리스너
     */
    static unregister(eventName: string, task: Function) {}

    /**
     * 모든 봇을 대상으로 해당 이벤트를 방출합니다. `value`는 `task`의 인자로 주어집니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param eventName 이벤트 이름
     * @param value task 인자
     */
    static send(eventName: string, value: any) {}
}

export class Database {
    /**
     * `obj`를 JSON string으로 변환하여 봇 로컬 폴더 내의 Database폴더에 `fileName`으로 저장합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param fileName 파일 이름
     * @param obj JS 오브젝트
     *
     * @returns void
     */
    static writeObject(fileName: string, obj: object) {}

    /**
     * `str`의 내용을 봇 로컬 폴더 내의 Database폴더에 `fileName`으로 저장합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param fileName 파일 이름
     * @param str 내용
     *
     * @returns void
     */
    static writeString(fileName: string, str: string) {}

    /**
     * 봇 로컬 폴더 내의 Database폴더에 있는 `fileName`파일을 읽어 자바스크립트 Object로 반환합니다.
     *
     * 이때 해당 파일은 json이어야 합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param fileName 파일 이름
     *
     * @returns JSObject
     */
    static readObject(fileName: string) {}

    /**
     * 봇 로컬 폴더 내의 Database폴더에 있는 `fileName`파일의 내용을 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param fileName 파일 이름
     *
     * @returns String
     */
    static readString(fileName: string) {}

    /**
     * 봇 로컬 폴더 내의 Database폴더에 `fileName`파일의 존재 여부를 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param fileName 파일 이름
     *
     * @returns Boolean
     */
    static exists(fileName: string) {}
}

export class Event {
    /**
     * 메시지가 수신되었을 때 발생하는 이벤트입니다.
     */
    static get MESSAGE(): "message" {
        return "message";
    }

    /**
     * 메시지가 수신되었으며, 그 메시지가 커맨드 형식일 때 발생하는 이벤트입니다.
     *
     * 자세한 내용은 [Bot#setCommandPrefix](https://gist.github.com/mir99712/6b428aa0c1bacfa170c8d140fa34e336#void-setcommandprefixstring-prefix)를 참고하세요.
     *
     * 전달되는 인자는 Event.MESSAGE의 인자에 추가로 msg.command(수신된 command이름), msg.args(수신된 command의 인자 배열)가 붙습니다.
     */
    static get COMMAND(): "command" {
        return "command";
    }

    /**
     * 컴파일 요청이 있을 때, 컴파일이 시작하기 전에 발생하는 이벤트입니다.
     */
    static get START_COMPILE(): "startCompile" {
        return "startCompile";
    }

    /**
     * 기기에 새로운 알림이 왔을 때 발생하는 이벤트입니다.
     *
     * statusBarNotification, sessionManager가 인자로 전달됩니다.
     */
    static get NOTIFICATION_POSTED(): "notificationPosted" {
        return "notificationPosted";
    }

    /**
     * 매 틱마다 발생하는 이벤트입니다.
     */
    static get TICK(): "tick" {
        return "tick";
    }

    static get Activity() {
        return Activity;
    }
}

enum Activity {
    /**
     * 스크립트 액티비티의 onCreate가 호출되면 발생합니다.
     *
     * savedInstanceState, activity가 인자로 전달됩니다.
     */
    CREATE = "activityCreate",

    /**
     * 스크립트 액티비티의 onStart가 호출되면 발생합니다.
     *
     * activity가 인자로 전달됩니다.
     */
    START = "activityStart",

    /**
     * 스크립트 액티비티의 onResume이 호출되면 발생합니다.
     *
     * activity가 인자로 전달됩니다.
     */
    RESUME = "activityResume",

    /**
     * 스크립트 액티비티의 onPause가 호출되면 발생합니다.
     *
     * activity가 인자로 전달됩니다.
     */
    PAUSE = "activityPause",

    /**
     * 스크립트 액티비티의 onStop이 호출되면 발생합니다.
     *
     * activity가 인자로 전달됩니다.
     */
    STOP = "activityStop",

    /**
     * 스크립트 액티비티의 onRestart가 호출되면 발생합니다.
     *
     * activity가 인자로 전달됩니다.
     */
    RESTART = "activityRestart",

    /**
     * 스크립트 액티비티의 onDestroy가 호출되면 발생합니다.
     *
     * activity가 인자로 전달됩니다.
     */
    DESTROY = "activityDestroy",

    /**
     * 스크립트 액티비티의 onBackPressed가 호출되면 발생합니다.
     *
     * activity가 인자로 전달됩니다.
     */
    BACK_PRESSED = "activityBackPressed",
}

export class Http {
    /**
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
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param options 옵션
     * @param callback 콜백
     *
     * @returns void
     */
    static request(
        options: {
            url: string;
            timeout?: number | 3000;
            method?: string | "GET";
            headers?: {} | null;
        },
        callback: Function
    ) {}

    /**
     * 동기적으로 `request`를 수행합니다. org.jsoup.nodes.Document를 반환합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param options 옵션
     *
     * @returns org.jsoup.nodes.Document
     */
    static requestSync(options: {
        url: string;
        timeout?: number | 3000;
        method?: string | "GET";
        headers?: {} | null;
    }) {}
}

export class Security {
    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static base64Encode(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static base64Decode(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static base32Encode(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static base32Decode(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static aesEncode(key: string, initVector: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static aesDecode(key: string, initVector: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static ariaEncode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static ariaDecode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static desKey() {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static desEncode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static desDecode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static des3Encode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static des3Decode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static seedEncode(seed: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static seedDecode(seed: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static rc4Encode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static rc4Decode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static eccKey(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static eccEncode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static eccDecode(key: string, value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static hashCode(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static md2(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static md5(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static sha5(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static sha256(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static sha384(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static sha512(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static sha3_224(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static sha3_256(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static sha3_384(value: string) {}

    /**
     * 각종 암호화/복호화 메서드를 제공합니다.
     *
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @returns String
     */
    static sha3_512(value: string) {}
}

/**
 * SessionManager는 Event.NOTIFICATION_POSTED의 리스너에 전달되는 인자로,
 *
 * 채팅방 세션을 메신저봇 앱에 수동으로 등록할 수 있게 해주어 메신저봇이 공식적으로 지원하지 않는 메신저 앱을 사용할 때 활용할 수 있습니다.
 */
export class SessionManager {
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
     * **이 메소드는 아직 지원하지 않습니다.**
     *
     * @param packageName 패키지명
     * @param room 방 이름
     * @param action 메시지 전송 액션
     *
     * @returns Boolean
     */
    static bindSession(
        packageName: string,
        room: string,
        action: "Notification.Action" | null = null
    ) {}
}
