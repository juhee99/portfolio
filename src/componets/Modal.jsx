import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Modal({ modalName, markdown }) {
  return (
    <dialog id={modalName} className="modal">
      <div className="modal-box !p-0  max-w-2xl">
        <div className="flex w-full justify-between items-center bg-black p-4">
          <h3 className="text-2xl font-bold">README.md</h3>
          <div className="modal-action p-0 my-0">
            <form method="dialog">
              <button type="submit">
                <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
        <div className="text-black p-4 overflow-y-auto scrollbar-thin max-w-2xl max-h-[75vh]">
          <div className="prose prose-sm  max-w-none w-full">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
