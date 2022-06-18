import toast from "react-hot-toast";
// show toast handler
export function showToastHandler({ text, type, position }) {
  toast[type](text, {
    duration: 2000,
    position: position ?? "top-center",
  });
}
