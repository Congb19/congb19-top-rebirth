import { GameOptions, KyokuOptions, Pai } from '../types';

import { generatePaishan } from './tools';

export class Game {
  id: string;
  players: string[];
  Kyokus: Kyoku[] = [];
  constructor(options: GameOptions) {
    this.id = Date.now().toString();
    this.players = options.playerIds;
    console.log('new game:', this);
  }
}

// <-	{"type":"start_kyoku","bakaze":"E","kyoku":1,"honba":0,"kyotaku":0,"oya":0,"dora_marker":"7s","tehais":[["?","?","?","?","?","?","?","?","?","?","?","?","?"],["3m","4m","3p","5pr","7p","9p","4s","4s","5sr","7s","7s","W","N"],["?","?","?","?","?","?","?","?","?","?","?","?","?"],["?","?","?","?","?","?","?","?","?","?","?","?","?"]]}
export class Kyoku {
  gameId: string;
  id: string;
  players: string[];
  paishan: Pai[] = [];
  dora_markers: Pai[] = [];
  bakaze: string;  // E, S, W, N  场风
  kyoku: number;  // 1-4  局
  honba: number;  // 0-4  1本场 300  2本场 600
  kyotaku: number;  // 0-4  供托 立直棒数量
  constructor(options: KyokuOptions) {
    this.gameId = options.gameId;
    this.id = Date.now().toString();
    this.players = options.playerIds;
    console.log('new kyoku:', this);
    // todo 计算这一场的场风、第几局、本场、供托
    this.bakaze = 'E';
    this.kyoku = 1;
    this.honba = 0;
    this.kyotaku = 0;
    // 生成牌山
    this.initTehais();
  }
  // 配牌
  initTehais() {
    this.paishan = generatePaishan();
    // 翻开一张dora_marker
    this.dora_markers.push(this.paishan[this.paishan.length - 10] as Pai);
    // 发牌
  }
}
