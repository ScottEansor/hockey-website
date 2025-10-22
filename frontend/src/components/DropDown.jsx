import { Link } from "react-router-dom";
import { useState } from "react";
export default function DropDown({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
     e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        onClick={handleToggle}
        href="#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
      </a>
      <ul className={"dropdown-menu " + (isOpen ? "show" : "")}>{children}</ul>
    </li>
  );
}

export function DropDownLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="dropdown-item">
        {children}
      </Link>
    </li>
  );
}

export function DropDownButton({ onClick, children }) {
  return (
    <li>
      <a onClick={onClick} className="dropdown-item" href="#">
        {children}
      </a>
    </li>
  );
}
