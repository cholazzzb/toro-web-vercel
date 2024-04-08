import { PlayerType } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { cva } from 'src/styled-system/css';
import { styled } from 'src/styled-system/jsx';

type PlayerProps = {
  playerName: string;
  color: string;
  active?: boolean;
  playerType: PlayerType;
};

const Player = ({ playerName, color, active, playerType }: PlayerProps) => {
  return (
    <styled.div className={containerCVA({ active })}>
      <styled.span
        backgroundColor={active ? color : 'White'}
        height="20px"
        width="20px"
        borderRadius="50%"
        marginInlineEnd="10px"
      />
      <styled.p color="white">
        {playerName} - {playerType}
      </styled.p>
    </styled.div>
  );
};

export default Player;

const containerCVA = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    width: '316px',
    height: '40px',
    margin: '10px',
    borderRadius: '5px',
  },
  variants: {
    active: {
      true: {
        border: '1px solid',
        borderColor: 'white',
      },
    },
  },
});
