/* eslint-disable react/prop-types */
// import { forwardRef } from "react";

// new way
function Input({ label, type, ref }) {
  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} type={type} />
    </p>
  );
}
export default Input;

// const Input = forwardRef(function Input({ label, type }, ref) {
//   return (
//     <p className="control">
//       <label>{label}</label>
//       <input ref={ref} type={type} />
//     </p>
//   );
// });
// export default Input;

// with {...props}
// const Input = forwardRef(function Input({ label, ...props }, ref) {
//   return (
//     <p className="control">
//       <label>{label}</label>
//       <input ref={ref} {...props} />
//     </p>
//   );
// });
// export default Input;
