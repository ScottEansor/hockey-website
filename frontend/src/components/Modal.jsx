export default function Modal({ open, onClose, children, header, footer }){
    return(<div
            className="modal"
            style={{ display: open ? "block" : undefined }}
            tabIndex="-1"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  {header}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={onClose}
                  ></button>
                </div>
                <div className="modal-body">
                {children}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={onClose}
                  >
                    Close
                  </button>
                  {footer}
                </div>
              </div>
            </div>
          </div>)
}