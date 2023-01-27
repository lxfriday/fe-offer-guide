import { createPortal } from 'react-dom'
import './Portal.css'

export default function Portal() {
  return (
    <div>
      <Modal>
        <div>hello this is in modal</div>
      </Modal>
      Portal
    </div>
  )
}

type ModalProps = {
  children: JSX.Element
}

function Modal(props: ModalProps) {
  return createPortal(
    <div className="modal-wrapper">
      <div className="modal-content-wrapper">{props.children}</div>
    </div>,
    document.body,
  )
}
