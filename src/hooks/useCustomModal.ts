import { useState } from "react";

const useCustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, showModal, handleCancel };
};
export default useCustomModal;
