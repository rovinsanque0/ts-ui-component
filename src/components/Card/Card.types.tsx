// Card.types.tsx
import { ReactNode } from "react";

export interface CardProps {
  title?: string;
  children?: ReactNode;
  disabled?: boolean;
}
