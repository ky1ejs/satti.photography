import { Dialog } from "./Dialog";

export const ErrorDialog = ({
  open,
  onCloseButtonClicked,
}: {
  open: boolean;
  onCloseButtonClicked: () => void;
}) => (
  <Dialog
    title="Something went wrong..."
    open={open}
    Footer={
      <div className="">
        <button
          className="mx-auto block rounded bg-gray-500 px-6 py-2"
          onClick={onCloseButtonClicked}
        >
          Try again
        </button>
      </div>
    }
  >
    <div className="text-black">Sadly your request could not be made.</div>
  </Dialog>
);
