import css from "./UserMenu.module.css";

export default function UserMenu() {
  const handleLogout = () => {};

  return (
    <div className={css.wrapper}>
      {/*<p className={css.username}>Welcome, {user.name}</p>*/}
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
