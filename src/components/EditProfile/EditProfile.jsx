import css from './EditProfile.module.css';
export default function EditProfile() {
  return (
    <div className={css.conteiner}>
      <h2 className={css.title}>Edit profile</h2>
      <form>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          className={css.input}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          className={css.input}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          className={css.input}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
