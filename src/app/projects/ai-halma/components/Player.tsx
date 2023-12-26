import { styled } from 'src/styled-system/jsx';

type PlayerProps = {
  playerName: string;
  color: string;
  active?: boolean;
};

const Player = ({ playerName, color, active }: PlayerProps) => {
  const activePlayerStyle: Record<string, string> = {};
  if (active) {
    activePlayerStyle.border = '1px solid';
    activePlayerStyle.borderColor = color;
  }

  return (
    <styled.div
      {...activePlayerStyle}
      display="flex"
      alignItems="center"
      padding="10px"
      backgroundColor="$gray3"
      width="316px"
      height="40px"
      margin="10px"
      borderRadius="5px"
    >
      <styled.span
        backgroundColor={active ? color : 'White'}
        height="20px"
        width="20px"
        borderRadius="50%"
        marginInlineEnd="10px"
      />
      <styled.p color="white">{playerName}</styled.p>
    </styled.div>
  );
};

export default Player;
