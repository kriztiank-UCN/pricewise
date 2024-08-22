"use client"

import { useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button type="button" className="btn" onClick={openModal}>
        Track
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="dialog-container">
          {/* TRANSITION CHILD */}
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            {/* TRANSITION CHILD ACTUAL MODAL*/}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* CONTENT */}
              <div className="dialog-content">TESTING MODAL CONTENT</div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default Modal
