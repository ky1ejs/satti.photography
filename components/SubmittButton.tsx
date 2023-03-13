import { LoadingSpinner } from "./LoadingSpinner";

export const SubmitButton = ({ loading }: { loading?: boolean }) => (
  <button
    className="mt-8 w-full rounded bg-primary py-2 transition hover:bg-secondary"
    type="submit"
    disabled={loading}
  >
    {loading ? <LoadingSpinner /> : "Submit"}
  </button>
);
