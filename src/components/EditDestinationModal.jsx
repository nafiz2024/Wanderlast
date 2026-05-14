"use client";

import { Button, Modal } from "@heroui/react";
import {
  FiChevronDown,
  FiEdit2,
  FiSave,
  FiTrash2,
} from "react-icons/fi";

const inputClassName =
  "h-[42px] w-full border border-[#e9edf2] bg-[#f7f9fc] px-4 text-[13px] text-[#1f2937] outline-none placeholder:text-[#8f949c]";

const textareaClassName =
  "h-[130px] w-full resize-none border border-[#e9edf2] bg-[#f7f9fc] px-4 py-3 text-[13px] text-[#1f2937] outline-none placeholder:text-[#8f949c]";

export function EditDestinationModal( { destination }) {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedDestination = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:5000/destination/${destination._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDestination),
    }); 

    if (!res.ok) {
      throw new Error(`Failed to update destination: ${res.status}`);
    }

    const data = await res.json();

    console.log("Updated Destination:", data);
  };

  return (
    <Modal>
      <Button className="inline-flex h-[40px] min-w-[88px] items-center justify-center gap-2 rounded-none border border-[#d4d4d4] bg-white px-5 text-[13px] font-medium text-[#1f1f1f] shadow-none transition-colors hover:bg-[#fafafa]">
        <FiEdit2 className="h-3.5 w-3.5 text-[#1f1f1f]" />
        <span>Edit</span>
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-[690px] max-w-[calc(100vw-32px)] rounded-none border border-[#e5e7eb] bg-white p-0 shadow-none">
            <Modal.CloseTrigger className="right-4 top-4 text-[#a3a3a3]" />
            <Modal.Header className="px-8 pb-0 pt-8">
              <div>
                <Modal.Heading className="text-[20px] font-medium tracking-[-0.03em] text-[#111111]">
                  Update Travel Package
                </Modal.Heading>
                <p className="mt-2 text-[13px] text-[#7b7b7b]">
                  Make changes to the travel package details below
                </p>
              </div>
            </Modal.Header>
            <Modal.Body className="px-8 pb-8 pt-14">
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <input
                    id="destinationName"
                    name="destinationName"
                    type="text"
                    defaultValue={destination.destinationName}
                    className={inputClassName}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-[13px] font-medium text-[#111111]"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      defaultValue={destination.country}
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-[13px] font-medium text-[#111111]"
                    >
                      Category
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        name="category"
                        defaultValue={destination.category} 
                        className={`${inputClassName} appearance-none pr-10 text-[#7b7b7b]`}
                      >
                        <option value="Beach">Beach</option>
                        <option value="Mountain">Mountain</option>
                        <option value="City">City</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Luxury">Luxury</option>
                      </select>
                      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#a3a3a3]">
                        <FiChevronDown className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="price"
                      className="mb-2 block text-[13px] font-medium text-[#111111]"
                    >
                      Price (USD)
                    </label>
                    <input
                      id="price"
                      name="price"
                      type="text"
                      placeholder="e.g., 1299"
                      className={inputClassName}
                      defaultValue={destination.price}  
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="duration"
                      className="mb-2 block text-[13px] font-medium text-[#111111]"
                    >
                      Duration
                    </label>
                    <input
                      id="duration"
                      
                      name="duration"
                      type="text"
                      placeholder="e.g., 7 Days/6 Nights"
                      className={inputClassName}
                      defaultValue={destination.duration}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="departureDate"
                    className="mb-2 block text-[13px] font-medium text-[#111111]"
                  >
                    Departure Date
                  </label>
                  <input
                    id="departureDate"
                    name="departureDate"
                    type="text"
                    placeholder="mm/dd/yyyy"
                    className={inputClassName}
                    defaultValue={destination.departureDate}  
                  />
                </div>

                <div>
                  <label
                    htmlFor="imageUrl"
                    className="mb-2 block text-[13px] font-medium text-[#111111]"
                  >
                    Image URL
                  </label>
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className={inputClassName}
                    defaultValue={destination.imageUrl}
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-[13px] font-medium text-[#111111]"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Describe the travel experience..."
                    className={textareaClassName}
                    defaultValue={destination.description}
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4">
                  <Button
                    slot="close"
                    className="inline-flex h-[46px] min-w-[114px] items-center justify-center gap-2 rounded-none border border-[#ff7e7e] bg-white px-5 text-[13px] font-medium text-[#ff4d4f] shadow-none hover:bg-[#fff7f7]"
                  >
                    <FiTrash2 className="h-4 w-4" />
                    <span>Cancel</span>
                  </Button>
                  <Button
                    type="submit"
                    slot="close"
                    className="inline-flex h-[46px] min-w-[158px] items-center justify-center gap-2 rounded-none bg-[#16a4c3] px-5 text-[13px] font-medium text-white shadow-none hover:bg-[#1298b5]"
                  >
                    <FiSave className="h-4 w-4" />
                    <span>Save Changes</span>
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
