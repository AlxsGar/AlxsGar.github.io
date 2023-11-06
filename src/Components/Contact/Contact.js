import React, { forwardRef } from "react";
import classes from "./Contact.module.css";

function Contact(props, ref) {
  return (
    <div ref={ref} className={classes.contact}>
      <h1>Contact</h1>
      <div className={classes.formSection}>
        <form>
          <div className={classes.formSub}>
            <label>
              Name:<span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={classes.formSub}>
            <label>
              Email:<span>*</span>
            </label>
            <input type="email" />
          </div>
          <div className={classes.formSub}>
            <label>
              Subject:<span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className={classes.formSub}>
            <label>
              Message:<span>*</span>
            </label>
            <textarea maxLength="150" />
          </div>
          <div className={classes.formButton}>
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default forwardRef(Contact);
