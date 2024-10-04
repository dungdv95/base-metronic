import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MainPage() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline" className="bg-blue-600 dark:bg-red-700">
        click me
      </Button>
      <Input type="email" placeholder="Email" />
      <button className="btn btn-light">Light</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-danger">Danger</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-dark">Dark</button>
      <div
        className="dropdown"
        data-dropdown="true"
        data-dropdown-trigger="click"
      >
        <button className="dropdown-toggle btn btn-light">Show Dropdown</button>
        <div className="dropdown-content w-full max-w-56 p-4 dark:text-white">
          The Tailwind CSS Dropdown component offers a sleek, user-friendly
          interface for presenting overlay content.
        </div>
      </div>
      <div className="input max-w-72" data-toggle-password="true">
        <input placeholder="Password" type="password" />
        <div className="btn btn-icon" data-toggle-password-trigger="true">
          <i className="ki-outline ki-eye toggle-password-active:hidden"></i>
          <i className="ki-outline ki-eye-slash hidden toggle-password-active:block"></i>
        </div>
      </div>
    </div>
  );
}
