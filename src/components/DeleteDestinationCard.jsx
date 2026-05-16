"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";

export function DeleteDestinationCard({ destination }) {
 
    const handleDelete = async () => {
        await fetch(`http://localhost:5000/destination/${destination._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        window.location.href = "/destination";
    } 

  return (
    <AlertDialog>
      <Button className="inline-flex h-[42px] min-w-[112px] items-center justify-center gap-2 rounded-none border border-[#ff7d7d] bg-white px-5 text-[13px] font-medium text-[#ff4d4f] shadow-none transition-colors hover:bg-[#fff6f6]">
        <FiTrash2 className="h-4 w-4" />
        <span>Delete</span>
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="max-w-[calc(100vw-24px)] sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {destination.destinationName} Package?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{destination.destinationName}</strong> and all of its data.
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete This Package
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
