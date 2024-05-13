import { stateFunc } from "./stateContent/UseStateContext";

export default function Overlay() {
  const { overlay } = stateFunc()
  return (
    <div className={`fixed bg-darkOverlay bottom-0 left-0  w-screen z-[200] overlay ${overlay ? 'active-overlay' : 'inactive-overlay'}`}></div>
  );
}
