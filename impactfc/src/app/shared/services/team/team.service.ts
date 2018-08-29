import { Injectable } from '@angular/core';
import { PlayerItem } from '../../models/player';

@Injectable()
export class TeamService {
  teamPlayers: PlayerItem[] = [
    {
      firstname: 'Bryan',
      lastname: 'Dodooe'
    },
    {
      firstname: 'Dave',
      lastname: 'Guardster'
    },
    {
      firstname: 'Bob',
      lastname: 'Sopmen'
    },
    {
      firstname: 'Philip',
      lastname: 'Thass'
    }
  ];
  constructor() { }
  getTeamPlayers() {
    return this.teamPlayers;
  }
}
