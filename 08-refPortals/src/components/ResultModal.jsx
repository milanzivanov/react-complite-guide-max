import { createPortal } from "react-dom";

function ResultModal({ targetTime, ref, remainingTime, onReset }) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost && <h2>Your lost</h2>}
      {!userLost && <h2>Your score is {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
export default ResultModal;

// for older react versions
// import { forwardRef, useImperativeHandle, useRef } from "react";
// const ResultModal = forwardRef(function ResultModal(
//   { result, targetTime },
//   ref
// ) {

// const dialog = useRef();

//   useImperativeHandle(ref, () => ({
//     open() {
//       dialog.current.showModal();
//     },
//   }));

//   return (
//     <dialog ref={dialog} className="result-modal">
//       <h2>Your {result}</h2>
//       <p>
//         The target time was <strong>{targetTime} seconds.</strong>
//       </p>
//       <p>
//         You stopped the timer with <strong>X seconds left.</strong>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });
// export default ResultModal;
