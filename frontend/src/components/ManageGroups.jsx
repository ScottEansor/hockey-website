import { useState } from "react";
import CreateGroup from "./CreateGroup";
import Modal from "./Modal";

export default function ManageGroups() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmitGroup = async (group) => {
    await fetch("/api/groups", {
      method: "POST",
      body: JSON.stringify(group),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="d-flex flex-column align-items-center vh-100 p-4 gap-2">
      <h1 className="text-center">Groups</h1>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => setShowModal(true)}
      >
        Create Group
      </button>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        header={<h5>Create new group </h5>}
      >
        <CreateGroup onSubmit={handleSubmitGroup} />
      </Modal>
    </div>
  );
}
