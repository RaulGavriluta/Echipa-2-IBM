import React from "react";
import "./Badge.css";

export type BadgeVariant =
  | "hot"
  | "sale"
  | "new"
  | "discount"
  | "count"
  | "notification";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const Badge = ({ children, variant = "hot", className = "" }: BadgeProps) => {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Badge;
