import {
  GiPunch,
  GiPistolGun,
  GiMusicalNotes,
  GiJumpAcross,
  GiPuzzle,
  GiSteeringWheel,
  GiChessKing,
  GiSwordman,
  GiFactory,
  GiSoccerBall,
  GiBrain,
  GiBattleGear,
  GiLightningSlashes,
  GiPerspectiveDiceSixFacesRandom,
  GiPinballFlipper,
  GiCompass,
  GiSparkles,
  GiSpellBook,
  GiCardRandom,
  GiBattleAxe,
} from "react-icons/gi";

export const genreIconMap: Record<number, React.ComponentType> = {
  2: GiCompass, // Point-and-click
  4: GiPunch, // Fighting
  5: GiPistolGun, // Shooter
  7: GiMusicalNotes, // Music
  8: GiJumpAcross, // Platform
  9: GiPuzzle, // Puzzle
  10: GiSteeringWheel, // Racing
  11: GiChessKing, // RTS
  12: GiSwordman, // RPG
  13: GiFactory, // Simulator
  14: GiSoccerBall, // Sport
  15: GiBrain, // Strategy
  16: GiChessKing, // TBS
  24: GiBattleGear, // Tactical
  25: GiLightningSlashes, // Hack & slash
  26: GiPerspectiveDiceSixFacesRandom, // Trivia
  30: GiPinballFlipper, // Pinball
  31: GiCompass, // Adventure
  32: GiSparkles, // Indie
  33: GiCompass, // Arcade
  34: GiSpellBook, // Visual Novel
  35: GiCardRandom, // Card/Board
  36: GiBattleAxe, // MOBA
};
