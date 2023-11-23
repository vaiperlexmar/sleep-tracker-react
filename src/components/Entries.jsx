import React, { useState } from "react";
import Header from "./Header";
import Modal from "./Modal/Modal";

export default function Entries() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div>
      <Header />
      {/* Добавить базу данных чтобы проверять на наличие */}

      <main>
        <Modal active={modalActive} setActive={setModalActive} />
      </main>
    </div>
  );
}
