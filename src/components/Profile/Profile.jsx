import profileCss from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={profileCss.container}>
      <div className={profileCss.profileInfo}>
        <img className={profileCss.image} src={image} alt="User avatar" />
        <p className={profileCss.name}>{name}</p>
        <p className={profileCss.usertag}>{tag}</p>
        <p className={profileCss.userlocation}>{location}</p>
      </div>

      <ul className={profileCss.list}>
        <li className={profileCss.listItem}>
          <span className={profileCss.itemStats}>Followers</span>
          <span className={profileCss.statsCounter}>{stats.followers}</span>
        </li>
        <li className={profileCss.listItem}>
          <span className={profileCss.itemStats}>Views</span>
          <span className={profileCss.statsCounter}>{stats.views}</span>
        </li>
        <li className={profileCss.listItem}>
          <span className={profileCss.itemStats}>Likes</span>
          <span className={profileCss.statsCounter}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
