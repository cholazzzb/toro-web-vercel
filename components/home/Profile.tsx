import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <p className={styles.name}>Nicholas Biantoro</p>
      <p className={styles.role}>Engineering Physics</p>
      <p className={styles.role}>Fresh Graduate</p>
    </div>
  );
};

export default Profile;
