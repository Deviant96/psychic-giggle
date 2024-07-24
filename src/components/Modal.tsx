import { CgClose } from 'react-icons/cg';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[99]"
        onClick={onClose}
      >
        <div
          style={{
            maxHeight: "100vh",
          }}
          className="bg-white p-6 rounded shadow-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button onClick={onClose} className="text-black/55 p-2 rounded mt-2 mr-2 absolute top-0 right-0">
            <CgClose />
          </button>
        </div>
      </div>
      <button className="hidden"></button>
    </>
  );
};

export default Modal;
