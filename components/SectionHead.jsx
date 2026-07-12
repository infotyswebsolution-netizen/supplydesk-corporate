/** The purchase-order ruling signature: a 2px ink rule, a mono index label, and a right-aligned mono note. Opens every section on every page. */
export function SectionHead({ idx, note, children }) {
  return (
    <div>
      <div className="po-head">
        <span className="idx">{idx}</span>
        {note ? <span className="note">{note}</span> : null}
      </div>
      {children ? (
        <h2 className="display-2" style={{ marginTop: 20 }}>
          {children}
        </h2>
      ) : null}
    </div>
  );
}
