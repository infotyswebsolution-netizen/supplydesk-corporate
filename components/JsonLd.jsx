/** Renders a schema.org JSON-LD block. `data` must be a plain, fully-trusted
 * object (never user input) — it's serialized directly, no sanitization. */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
