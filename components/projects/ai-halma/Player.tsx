import styles from "./Player.module.css";

const players: string[] = ["Human", "Halmiezzz", "RL"];

type PlayerProps = {
  playerNumber: number;
  player: string;
  onPlayerChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Player = ({ playerNumber, player, onPlayerChange }: PlayerProps) => {
  return (
    <div>
      Player {playerNumber}:
      <select value={player} onChange={(e) => onPlayerChange(e)}>
        {players.map((player) => (
          <option key={player} value={player}>
            {player}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Player;
