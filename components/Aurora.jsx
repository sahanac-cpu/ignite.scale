/* Global ambient background: slow-drifting blurred colour blobs (gold + wine)
   on the near-OLED base. Fixed, behind everything, pointer-events none.
   Pure transform/opacity animation; paused for reduced-motion via CSS. */
export default function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="a1" />
      <span className="a2" />
      <span className="a3" />
    </div>
  )
}
