export const Dialog = ({
  children,
  title,
  open,
  Footer,
}: {
  children: React.ReactNode;
  open?: boolean;
  title: string;
  Footer: React.ReactNode;
}) => (
  <div
    className="relative z-10 animate-fade-in"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    style={{ display: open ? "block" : "none" }}
  >
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative w-[80%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  className="text-xl font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  {title}
                </h3>
                <div className="mt-2">{children}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            {Footer}
          </div>
        </div>
      </div>
    </div>
  </div>
);
