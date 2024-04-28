import React from "react";
import { useRecoilValue } from "recoil";
import Calendar from "./features/Calendar/Calendar";
import Modal from "./components/Modal";

import { todoFormModalOpenState } from "./features/TodoFormModal/atom";
import TodoFormModal from "./features/TodoFormModal";
import { todoStatisticsModalOpenState } from "./features/TodoStatisticsModal/atom";
import TodoStatisticsModal from "./features/TodoStatisticsModal/index";
function App() {
  const setTodoFormModalOpen = useRecoilValue(todoFormModalOpenState);
  const setTodoStatisticsModalOpen = useRecoilValue(
    todoStatisticsModalOpenState
  );

  return (
    <div>
      <Calendar />
      <Modal isOpen={setTodoFormModalOpen}>
        <TodoFormModal />
      </Modal>
      <Modal isOpen={setTodoStatisticsModalOpen}>
        <TodoStatisticsModal />
      </Modal>
    </div>
  );
}

export default App;
