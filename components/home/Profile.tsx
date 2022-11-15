import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <p className={styles.name}>Nicholas Biantoro</p>
      <p className={styles.role}>Software Enginner</p>
    </div>
  );
};

export default Profile;
