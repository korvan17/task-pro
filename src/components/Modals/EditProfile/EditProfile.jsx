import css from './EditProfile.module.css';
import sprite from '../../../icons/sprite.svg';
export default function EditProfile() {
  return (
    <div className={css.conteiner}>
      <h2 className={css.title}>Edit profile</h2>
      <svg className={css.userImg}>
        <use xlinkHref={`${sprite}#icon-user`} />
      </svg>

      <form className={css.form}>
        <div className={css.blockInputs}>
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
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
