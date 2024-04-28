import { atom, atomFamily, selectorFamily } from "recoil";
import { filteredTodoListState } from "../TodoList/atom";

export const todoStatisticsModalOpenState = atom({
  key: "todoStatisticsModalOpenState",
  default: false,
});

export const todoStatisticsState = atomFamily({
  key: "todoStatisticsState",
  default: selectorFamily({
    key: "todoStatisticsState/default",
    get:
      (selectedDate) =>
      ({ get }) => {
        const todoList = get(filteredTodoListState(selectedDate));

        return {
          total: todoList.length,
          done: todoList.filter((todo) => todo.done).length || 0,
        };
      },
  }),
});
