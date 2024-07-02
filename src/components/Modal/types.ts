export type ModalProps = {
  title?: string;
  children: React.ReactNode;
  onModalSubmit?: () => void;
  isLoading?: boolean;
  bodyOverFlow?: "visible" | "hidden " | "auto";
  open?: boolean;
  setOpenModal: (value: boolean) => void;
};