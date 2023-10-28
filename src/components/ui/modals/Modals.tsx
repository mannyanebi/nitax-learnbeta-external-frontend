import React from "react";

// components
import { Text, Modal } from "@mantine/core";

type IModals = {
  visible: boolean;
  title?: string;
  children: React.ReactNode;
};

const Modals: React.FC<IModals> = ({ visible, title, children }) => {
  return (
    <Modal
      centered
      opened={visible}
      onClose={close}
      trapFocus={false}
      withCloseButton={false}
      closeOnClickOutside={false}
      title={
        title ? <Text className="font-[500] md:text-lg">{title}</Text> : null
      }
      overlayProps={{
        color: "black",
        blur: 5,
      }}
      transitionProps={{
        duration: 100,
        timingFunction: "linear",
      }}
    >
      {children}
    </Modal>
  );
};

export default Modals;
