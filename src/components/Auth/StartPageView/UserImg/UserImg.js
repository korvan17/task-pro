import css from '../StartPageView.module.css';

const UserImg = () => {
  return (
    <picture className={css.startPageImage}>
      <source
        srcSet={
          require('../../../../images/mob-boy-img-1x.png') +
          ' 1x,' +
          require('../../../../images/mob-boy-img-2x.png') +
          ' 2x'
        }
        media="(max-width: 767px)"
      />
      <source
        srcSet={
          require('../../../../images/tablet-boy-img-1x.png') +
          ' 1x,' +
          require('../../../../images/tablet-boy-img-2x.png') +
          ' 2x'
        }
        media="(max-width: 1439px)"
      />
      <source
        srcSet={
          require('../../../../images/desk-boy-img-1x.png') +
          ' 1x,' +
          require('../../../../images/desk-boy-img-2x.png') +
          ' 2x'
        }
        media="(min-width: 1400px)"
      />
      <img
        src={require('../../../../images/mob-boy-img-1x.png')}
        alt="user"
        height="124"
      />
    </picture>
  );
};

export default UserImg;
