export default function ErrorMessage({ text }) {
  return (
    <p
      style={{
        fontSize: 14,
        color: 'var(--error-color)',
        margin: 0,
        textAlign: 'left',
      }}
    >
      {text}
    </p>
  );
}
