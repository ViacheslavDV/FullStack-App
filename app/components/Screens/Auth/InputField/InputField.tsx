import { forwardRef, useRef } from "react";
import styles from "./InputField.module.scss";
import { IAuthField } from "@/app/types/auth/auth-field.interface";

const InputField = forwardRef<HTMLInputElement, IAuthField>(
  ({ label, placeholder, error, Icon, type, ...rest }, ref) => {
    return (
      <div>
        <p className={styles.text}>
          {Icon && <Icon className={styles.icon} />}
          <span className={styles.label}>{label}</span>
        </p>
        <div className={styles.wrapper}>
          <input
            ref={ref}
            className={styles.input}
            type={type}
            placeholder={placeholder}
            {...rest}
          />
        </div>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

// ???
// InputField.displayName = "InputField";

export default InputField;
