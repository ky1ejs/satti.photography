export default function TestSentryError() {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}
      >
        Throw error
      </button>
    </>
  );
}
