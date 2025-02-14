import { useImperativeHandle, useRef } from "react";
// import { useImperativeHandle, useRef, forwardRef } from "react";

// eslint-disable-next-line react/prop-types
export default function Form({ ref }) {
  const resetRef = useRef();

  useImperativeHandle(ref, () => ({
    resetForm() {
      resetRef.current.reset();
    }
  }));
  return (
    <form ref={resetRef}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
}

// const Form = forwardRef(function Form(props, ref) {
//   const form = useRef();
//   useImperativeHandle(ref, () => ({
//     clear() {
//       form.current.reset();
//     }
//   }));

//   return (
//     <form ref={form}>
//       <p>
//         <label>Name</label>
//         <input type="text" />
//       </p>

//       <p>
//         <label>Email</label>
//         <input type="email" />
//       </p>
//       <p id="actions">
//         <button>Save</button>
//       </p>
//     </form>
//   );
// });

// export default Form;
