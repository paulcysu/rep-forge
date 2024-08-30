import { createPortal } from 'react-dom';

const DragOverlayWrapper = ({ children }: { children: React.ReactNode }) => {
  if (typeof document === 'undefined') return null;
  return createPortal(children, document.body);
};

export default DragOverlayWrapper;