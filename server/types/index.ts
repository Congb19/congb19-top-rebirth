// 数牌: 1m, 2m, ..., 9m, 1p, 2p, ..., 9p, 1s, 2s, ..., 9s
// 字牌: E(東), S(南), W(西), N(北), P(白), F(發), C(中)
// 赤牌: 5mr, 5pr, 5sr
export type Pai =
  | '1m'
  | '2m'
  | '3m'
  | '4m'
  | '5m'
  | '6m'
  | '7m'
  | '8m'
  | '9m'
  | '1p'
  | '2p'
  | '3p'
  | '4p'
  | '5p'
  | '6p'
  | '7p'
  | '8p'
  | '9p'
  | '1s'
  | '2s'
  | '3s'
  | '4s'
  | '5s'
  | '6s'
  | '7s'
  | '8s'
  | '9s'
  | 'E'
  | 'S'
  | 'W'
  | 'N'
  | 'P'
  | 'F'
  | 'C'
  | '5mr'
  | '5pr'
  | '5sr'
  | '?';

export type PlayerActionType = 'tsumo' | 'dahai' | 'pon' | 'reach' | 'reach_accepted' | 'none';

export type GameAction = 'start_game' | 'start_kyoku';

export type StreamUnit = {
  type: PlayerActionType | GameAction;
  actor?: number;
  pai?: string;
  tsumogiri?: boolean;
};

// 游戏初始化选项
export type GameOptions = {
  playerIds: string[];
};
export type KyokuOptions = {
  playerIds: string[];
  gameId: string;
};
