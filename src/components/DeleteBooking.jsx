"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";

export function DeleteBooking({ bookingId }) {

    const handleCancelBooking = async() => {
        await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })

        window.location.href = "/my-bookings";
    }

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <Button className="inline-flex h-[42px] min-w-[112px] items-center justify-center gap-2 rounded-none border border-[#ff7d7d] bg-white px-5 text-[13px] font-medium text-[#ff4d4f] shadow-none transition-colors hover:bg-[#fff6f6]">
          <FiTrash2 className="h-4 w-4" />
          <span>Delete</span>
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete My Booking and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
