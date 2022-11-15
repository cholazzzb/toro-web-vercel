import { mainTheme } from 'src/theme';

const Profile = () => {
  return (
    <ProfileContainer>
      <Name>Nicholas Biantoro</Name>
      <Role>Software Enginner</Role>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = mainTheme.styled('div', {
  marginInlineStart: '10px',
});

const Name = mainTheme.styled('p', {
  fontSize: '15px',
  fontWeight: 'bold',
  color: 'white',
});

const Role = mainTheme.styled('p', {
  lineHeight: '5px',
  fontSize: '12px',
  color: 'White',
});
