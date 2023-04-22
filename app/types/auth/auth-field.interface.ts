import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

export interface IAuthField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder?: string;
  Icon?: string | IconType;
  error?: string;
}
