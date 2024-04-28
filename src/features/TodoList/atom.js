import { atom, atomFamily, selectorFamily } from "recoil";
import { isSameDay } from "../../utils";

export const todoListState = atom({
  // 할 일 목록
  key: "todoListState",
  default: [],
});

export const selectedDateState = atom({
  // 선택한 날짜
  key: "selectedDateState",
  default: new Date(),
});

export const selectedTodoState = atom({
  // 선택한 할 일
  key: "selectedTodoState",
  default: null,
});

export const filteredTodoListState = atomFamily({
  // 선택한 날짜의 할 일 목록
  key: "filteredTodoListState",
  default: selectorFamily({
    key: "filteredTodoListState/default",
    get:
      (selectedDate) =>
      ({ get }) => {
        const todoList = get(todoListState);

        return todoList.filter((todo) => isSameDay(todo.date, selectedDate));
      },
  }),
});
