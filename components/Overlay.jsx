import { stateFunc } from "./stateContent/UseStateContext";

export default function Overlay() {
  const { overlay } = stateFunc();
  return (
    <div
      className={`fixed bottom-0 left-0  w-screen z-[101] overlay ${
        overlay ? "active-overlay" : "inactive-overlay"
      }`}
    ></div>
  );
}
