import { mainTheme } from 'src/theme';

type PlayerProps = {
  playerName: string;
  active?: boolean;
};

const Player = ({ playerName, active }: PlayerProps) => {
  const activePlayerStyle: Record<string, string> = {};
  if (active) {
    activePlayerStyle.border = '1px solid';
    activePlayerStyle.borderColor = 'white';
  }

  const PlayerRow = mainTheme.styled('div', {
    ...activePlayerStyle,
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '$gray3',
    width: '316px',
    height: '40px',
    margin: '10px',
    borderRadius: '5px',
  });
  return (
    <PlayerRow>
      <Avatar />
      <PlayerName>{playerName}</PlayerName>
    </PlayerRow>
  );
};

export default Player;

const Avatar = mainTheme.styled('span', {
  backgroundColor: 'white',
  height: '20px',
  width: '20px',
  borderRadius: '50%',
  marginInlineEnd: '10px',
});

const PlayerName = mainTheme.styled('p', {
  color: '$white10',
});
