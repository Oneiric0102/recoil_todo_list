import { atom } from "recoil";

export const todoFormModalOpenState = atom({
  // 할 일 등록 모달
  key: "todoFormModalOpenState",
  default: false,
});
