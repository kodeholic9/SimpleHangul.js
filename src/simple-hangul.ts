/**
 * 자모의 유형을 정의한다
 */
type JamoType =
  | "none"
  | "cho"
  | "cho-cho"
  | "jung"
  | "jung-jung"
  | "jong"
  | "jong-jong";

/**
 * 상수를 정의한다.
 */
const Constants = {
  hangulOffsetRange: [0xac00, 0xd7a3],
  jaemOffsetRange: [0x3131, 0x314e],
  moemOffsetRange: [0x314f, 0x3163],

  cho: [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],

  chocho: {
    ㄲ: ["ㄱ", "ㄱ"],
    ㄸ: ["ㄷ", "ㄷ"],
    ㅃ: ["ㅂ", "ㅂ"],
    ㅆ: ["ㅅ", "ㅅ"],
    ㅉ: ["ㅈ", "ㅈ"],
  },

  jung: [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ", // ["ㅗ", "ㅏ"],
    "ㅙ", // ["ㅗ", "ㅐ"],
    "ㅚ", // ["ㅗ", "ㅣ"],
    "ㅛ",
    "ㅜ",
    "ㅝ", // ["ㅜ", "ㅓ"],
    "ㅞ", // ["ㅜ", "ㅔ"],
    "ㅟ", // ["ㅜ", "ㅣ"],
    "ㅠ",
    "ㅡ",
    "ㅢ", // ["ㅡ", "ㅣ"],
    "ㅣ",
  ],

  jungjung: {
    ㅘ: ["ㅗ", "ㅏ"],
    ㅙ: ["ㅗ", "ㅐ"],
    ㅚ: ["ㅗ", "ㅣ"],
    ㅝ: ["ㅜ", "ㅓ"],
    ㅞ: ["ㅜ", "ㅔ"],
    ㅟ: ["ㅜ", "ㅣ"],
    ㅢ: ["ㅡ", "ㅣ"],
  },

  jong: [
    "",
    "ㄱ",
    "ㄲ",
    "ㄳ", // ["ㄱ", "ㅅ"],
    "ㄴ",
    "ㄵ", // ["ㄴ", "ㅈ"],
    "ㄶ", // ["ㄴ", "ㅎ"],
    "ㄷ",
    "ㄹ",
    "ㄺ", // ["ㄹ", "ㄱ"],
    "ㄻ", // ["ㄹ", "ㅁ"],
    "ㄼ", // ["ㄹ", "ㅂ"],
    "ㄽ", // ["ㄹ", "ㅅ"],
    "ㄾ", // ["ㄹ", "ㅌ"],
    "ㄿ", // ["ㄹ", "ㅍ"],
    "ㅀ", // ["ㄹ", "ㅎ"],
    "ㅁ",
    "ㅂ",
    "ㅄ", // ["ㅂ", "ㅅ"],
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],

  jongjong: {
    ㄲ: ["ㄱ", "ㄱ"],
    ㄳ: ["ㄱ", "ㅅ"],
    ㄵ: ["ㄴ", "ㅈ"],
    ㄶ: ["ㄴ", "ㅎ"],
    ㄺ: ["ㄹ", "ㄱ"],
    ㄻ: ["ㄹ", "ㅁ"],
    ㄼ: ["ㄹ", "ㅂ"],
    ㄽ: ["ㄹ", "ㅅ"],
    ㄾ: ["ㄹ", "ㅌ"],
    ㄿ: ["ㄹ", "ㅍ"],
    ㅀ: ["ㄹ", "ㅎ"],
    ㅄ: ["ㅂ", "ㅅ"],
    ㅆ: ["ㅅ", "ㅅ"],
  },
};

/**
 * 한글 charCode 범위에 일치하는지 여부 판단
 * @param code 한글 문자의 charCode
 * @returns
 */
const isHangul = (code: number) => {
  return (
    code >= Constants.hangulOffsetRange[0] &&
    code <= Constants.hangulOffsetRange[1]
  );
};

/**
 * 한글 자음 charCode 범위에 일치하는지 여부 판단
 * @param code 한글 문자의 charCode
 * @returns
 */
const isJaem = (code: number) => {
  return (
    code >= Constants.jaemOffsetRange[0] && code <= Constants.jaemOffsetRange[1]
  );
};

/**
 * 한글 모음 charCode 범위에 일치하는지 여부 판단
 * @param code 한글 문자의 charCode
 * @returns
 */
const isMoem = (code: number) => {
  return (
    code >= Constants.moemOffsetRange[0] && code <= Constants.moemOffsetRange[1]
  );
};

/**
 * 한글 자음/모음 charCode 범위에 일치하는지 여부 판단
 * @param code 한글 문자의 charCode
 * @returns
 */
const isJamo = (code: number) => {
  return isJaem(code) || isMoem(code);
};

/**
 * 자모의 유형을 식별
 * @param jamo
 * @param isBegin
 * @returns
 */
const jamoTypeOf = (jamo: string, isBegin: boolean): JamoType => {
  if (!jamo) return "none";
  const charCode = jamo.charCodeAt(0);

  //자음인 경우
  if (isJaem(charCode)) {
    if (isBegin) {
      if (Constants.chocho[jamo]) return "cho-cho";
      return "cho";
    } else {
      if (Constants.jongjong[jamo]) return "jong-jong";
      return "jong";
    }
  }

  //모음인 경우
  if (isMoem(charCode)) {
    if (Constants.jungjung[jamo]) return "jung-jung";
    return "jung";
  }

  return "none";
};

/**
 * 자모 타입별 결합 가능여부 판단
 * @param a
 * @param b
 * @returns
 */
const isJamoTypeJoinable = (a: JamoType, b: JamoType) => {
  if (!a || !b) return false;
  switch (a) {
    case "cho":
    case "cho-cho":
    case "jong":
    case "jong-jong":
      if (b === "jung" || b === "jung-jung") {
        return true;
      }
      break;

    case "jung":
    case "jung-jung":
      if (b === "jong" || b === "jong-jong") {
        return true;
      }
      break;
  }

  return false;
};

/**
 * 초성에 위치하는 이중 자음 병합
 * @param a
 * @param b
 * @returns
 */
const joinChocho = (a: string | undefined, b: string | undefined) => {
  if (!a || !b) return null;
  return Object.keys(Constants.chocho).find((x) => {
    return Constants.chocho[x][0] === a && Constants.chocho[x][1] === b;
  });
};

/**
 * 중성에 위치하는 이중 모음 병합
 * @param a
 * @param b
 * @returns
 */
const joinJungjung = (a: string | undefined, b: string | undefined) => {
  if (!a || !b) return null;
  return Object.keys(Constants.jungjung).find((x) => {
    return Constants.jungjung[x][0] === a && Constants.jungjung[x][1] === b;
  });
};

/**
 * 종성에 위치하는 이중 자음 병합
 * @param a
 * @param b
 * @returns
 */
const joinJongjong = (a: string | undefined, b: string | undefined) => {
  if (!a || !b) return null;
  return Object.keys(Constants.jongjong).find((x) => {
    return Constants.jongjong[x][0] === a && Constants.jongjong[x][1] === b;
  });
};

/**
 * word를 연산가능하도록 컴파일한다.
 * @param word
 * @param doubleFlag
 * @returns
 */
const compile = (word: string, doubleFlag: boolean = false) => {
  if (!word) throw new Error("invalid arguments!");

  return word.split("").reduce((acc, x) => {
    const code = x.charCodeAt(0);
    const jamoStack = [];

    //한글이 아닌 경우
    if (!isHangul(code)) {
      jamoStack.push(x);
      acc.push(jamoStack);
      return acc;
    }

    //한글인 경우
    const hangulCode = code - Constants.hangulOffsetRange[0];
    const jongCode = hangulCode % 28;
    const jungCode = ((hangulCode - jongCode) / 28) % 21;
    const choCode = Math.floor((hangulCode - jongCode) / 28 / 21);

    console.log(hangulCode, choCode, jungCode, jongCode);

    //초성
    if (Constants.cho[choCode]) {
      //단자음? or 이중자음
      const chocho = Constants.chocho[Constants.cho[choCode]];
      if (doubleFlag && chocho) {
        jamoStack.push(chocho[0]);
        jamoStack.push(chocho[1]);
      } else {
        jamoStack.push(Constants.cho[choCode]);
      }
    }

    //중성
    if (Constants.jung[jungCode]) {
      //단모음? or 이중모음
      const jungjung = Constants.jungjung[Constants.jung[jungCode]];
      if (jungjung) {
        jamoStack.push(jungjung[0]);
        jamoStack.push(jungjung[1]);
      } else {
        jamoStack.push(Constants.jung[jungCode]);
      }
    }

    //종성
    if (Constants.jong[jongCode]) {
      //단자음? or 이중자음
      const jongjong = Constants.jongjong[Constants.jong[jongCode]];
      if (jongjong) {
        jamoStack.push(jongjong[0]);
        jamoStack.push(jongjong[1]);
      } else {
        jamoStack.push(Constants.jong[jongCode]);
      }
    }
    acc.push(jamoStack);
    return acc;
  }, []);
};

/**
 * 한글은 자/모로 분리하여 추출하고, 그 이외는 왜곡없이 추출
 * @param word
 * @param doubleFlag
 * @returns
 */
const split = (word: string, doubleFlag: boolean = false) => {
  const jamoList = compile(word, doubleFlag);

  console.log("jamoList: ", jamoList);
  return jamoList.flat(1);
};

/**
 * 자모를 결합한다.
 * @param jamos
 * @returns
 */
const joinJamo = (jamoSet: string[]) => {
  //console.log("joinJamo() - jamoSet: ", jamoSet);
  if (!jamoSet || jamoSet.length === 0) return "";
  if (jamoSet.length > 3) return jamoSet.join("");
  if (jamoSet.findIndex((x: string) => !isJamo(x.charCodeAt(0))) !== -1) {
    return jamoSet.join("");
  }

  const choIndex = jamoSet[0] ? Constants.cho.indexOf(jamoSet[0]) : -1;
  const jungIndex = jamoSet[1] ? Constants.jung.indexOf(jamoSet[1]) : -1;
  const jongIndex = jamoSet[2] ? Constants.jong.indexOf(jamoSet[2]) : 0;
  console.log("joinJamo() - jamoSet: ", jamoSet, ", index: ", choIndex, jungIndex, jongIndex);
  if (choIndex === -1 || jungIndex === -1) {
    return jamoSet.join("");
  }

  let hangulCode = (choIndex * 21 + jungIndex) * 28;
  hangulCode += jongIndex;
  hangulCode += Constants.hangulOffsetRange[0];

  return String.fromCharCode(hangulCode);
};

/**
 * 자/모로 분리되어 있는 글자를 한글로 완성
 * @param jamoList
 * @returns
 */
const join = (jamoList: string[]) => {
  console.log("join() - jamoList: ", jamoList);
  if (!jamoList || !Array.isArray(jamoList))
    throw new Error("invalid arguments!");

  const hangulList = [];
  let jamoStack = [];

  const _complete = (last: string | null) => {
    if (last) jamoStack.push(last);
    if (jamoStack.length > 0) hangulList.push(joinJamo(jamoStack));

    jamoStack = [];
  };

  for (let i = 0; i < jamoList.length; i++) {
    const type0 = jamoTypeOf(jamoList[i], jamoStack.length === 0);
    const type1 = jamoTypeOf(jamoList[i + 1], false);
    const type2 = jamoTypeOf(jamoList[i + 2], false);

    //console.log("join() - jamo: ", jamoList[i], type0, type1, type2);

    switch (type0) {
      case "cho": {
        // ㄱ(i), ㅏ(i+1) case
        if (isJamoTypeJoinable(type0, type1)) {
          jamoStack.push(jamoList[i]);
          break;
        }

        // ㄱ(i), ㄱ(i+1) case
        const chocho = joinChocho(jamoList[i], jamoList[i + 1]);
        if (chocho) {
          jamoStack.push(chocho);
          i++; // skip next
          break;
        }

        _complete(jamoList[i]);
        break;
      }

      case "cho-cho": {
        // ㄲ(i), ㅏ(i+1) case
        if (isJamoTypeJoinable(type0, type1)) {
          jamoStack.push(jamoList[i]);
          break;
        }

        _complete(jamoList[i]);
        break;
      }

      case "jung": {
        // ㅏ(i), ㄱ(i+1) case
        if (isJamoTypeJoinable(type0, type1)) {
          jamoStack.push(jamoList[i]);
          break;
        }

        // ㅏ(i),ㅣ(i+1) case
        const jungjung = joinJungjung(jamoList[i], jamoList[i + 1]);
        if (jungjung) {
          jamoStack.push(jungjung);
          i++; // skip next
          break;
        }

        _complete(jamoList[i]);
        break;
      }

      case "jung-jung": {
        // ㅐ(i), ㄱ(i+1) case
        if (isJamoTypeJoinable(type0, type1)) {
          jamoStack.push(jamoList[i]);
          break;
        }

        _complete(jamoList[i]);
        break;
      }

      case "jong": {
        // ㄱ(i), ㅏ(i+1) case
        if (isJamoTypeJoinable(type0, type1)) {
          _complete(null);
          jamoStack.push(jamoList[i]);
          break;
        }

        // ㄹ(i), ㅎ(i+1), ㅏ(i+2) case
        if (isJamoTypeJoinable(type1, type2)) {
          _complete(jamoList[i]);
          break;
        }

        // ㄱ(i), ㄱ(i+1) case
        const jongjong = joinJongjong(jamoList[i], jamoList[i + 1]);
        if (jongjong) {
          _complete(jongjong);
          i++; // skip next
          break;
        }

        _complete(jamoList[i]);
        break;
      }

      case "jong-jong": {
        // ㄲ(i), ㅏ(i+1) case
        if (isJamoTypeJoinable(type0, type1)) {
          _complete(null);
          jamoStack.push(jamoList[i]);
          break;
        }

        _complete(jamoList[i]);
        break;
      }

      case "none":
      default:
        _complete(jamoList[i]);
        break;
    }
  }

  return hangulList.join("");
};

/**
 * 문자열(word)이 부분문자열(sub)를 포함하는지 체크한다
 * @param word
 * @param sub
 * @param choFlag
 * @returns
 */
const contains = (word: string, sub: string, choFlag: boolean = true) => {
  console.log("contains() - word: ", word, sub);
  if (!word || !sub) return false;

  const jamoList1 = compile(word, false);
  const jamoList2 = compile(sub, false);

  // 초성 검색
  if (choFlag) {
    const choList1 = jamoList1.filter((x) => x[0]).flatMap((x) => x[0]);
    const choList2 = jamoList2.filter((x) => x[0]).flatMap((x) => x[0]);
    if (choList1.join("").indexOf(choList2.join("")) !== -1) {
      return true;
    }
  }

  // 자모 검색
  if (jamoList1.flat(1).join("").indexOf(jamoList2.flat(1).join("")) !== -1) {
    return true;
  }

  // 문자열 검색
  return word.indexOf(sub) !== -1;
};

/**
 * 한글 자모 분리, 한글 자모 결합, 자모 검색, 초성 검색
 */
class SimpleHangul {
  public split: (word: string, doubleFlag: boolean) => string[];
  public join: (jamoList: string[]) => string;
  public contains: (word: string, sub: string, choFlag: boolean) => boolean;

  constructor() {
    this.split = split;
    this.join = join;
    this.contains = contains;
  }
}

export const simpleHangul = new SimpleHangul();
