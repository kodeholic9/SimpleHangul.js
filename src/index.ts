import * as hangul from "hangul-js";
import { simpleHangul } from "./simple-hangul";

let list = simpleHangul.split(
  "쥐똥별빛반짝반짝쪼ab잔!하@$3sd&+`~게똠방뷁가야왜그러냐?",
  false
);
console.log(list);
console.log(simpleHangul.join(list));
console.log(hangul.assemble(list));

list = simpleHangul.split("너의젊음이상이아니듯나의늙음이벌은아니다", true);
console.log(list);
console.log(simpleHangul.join(list));
console.log(hangul.assemble(list));

const matchIndex = simpleHangul.contains("091 가나다 달걀덮밥", "닭", false);
console.log("matchIndex: ", matchIndex);
