// CopyCoords renders GPS coordinates inline with a copy-to-clipboard button.
// Usage: <CopyCoords coords="48.5744189N, 7.7181089E" />
export default function CopyCoords({ coords }) {
  function handleCopy() {
    navigator.clipboard.writeText(coords)
      .then(() => alert('Souřadnice byly zkopírovány: ' + coords))
      .catch(() => alert('Nepovedlo se zkopírovat souřadnice.'))
  }

  return (
    <>
      <span className="coords">{coords}</span>
      <button onClick={handleCopy} className="copy-btn">
        <i className="fa fa-copy"></i>
      </button>
    </>
  )
}
