import { Dialog } from "./Dialog";

export const SuccessDialog = ({ open }: { open: boolean }) => (
  <Dialog
    title="Your enquiry has been sent!"
    open={open}
    Footer={
      <div className="">
        <button
          className="mx-auto block rounded bg-gray-500 px-6 py-2"
          onClick={() => {
            window.location.href = "https://satti.photography";
          }}
        >
          Done
        </button>
      </div>
    }
  >
    <div className="text-black">
      <p>Thank you for enquiring!</p>
      <p>I typically respond within a day. Speak soon!</p>
      <p>Sabrina</p>
    </div>
  </Dialog>
);
