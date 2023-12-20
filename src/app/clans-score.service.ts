import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface iClan {
  name: string,
  score: number
}

@Injectable({
  providedIn: 'root'
})
export class ClansScoreService {

  clanScore$: BehaviorSubject<iClan[]> = new BehaviorSubject<iClan[]>(this.initClanScore());

  get clanScore():iClan[] {
    return this.clanScore$.getValue();
  }
  set clanScore(value: iClan[]) {
    this.clanScore$.next(value);
  }

  maxScoreValue$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get maxScoreValue():number {
    return this.maxScoreValue$.getValue();
  }
  set maxScoreValue(value: number) {
    this.maxScoreValue$.next(value);
  }


  constructor() { }

  applyQuestionScore(clansPonderation: any, points: number) {
    this.clanScore.forEach((clan: iClan) => {
      let newPoints = 3 - clansPonderation[clan.name] - points;
      clan.score += Math.abs(newPoints);
    });

    this.maxScoreValue+= this.getMax(clansPonderation) * points;
  }

  getMax(clansPond: any): number {
    let max = 0;
    for(let key in clansPond) {
      if(clansPond.hasOwnProperty(key)) {
        let val = clansPond[key];
        if(val > max) {
          max = val;
        }
      }
    }

    return max;
}

  initClanScore(): iClan[]{
    return [
      {
        name: "wolf",
        score: 0
      },
      {
        name: "stag",
        score: 0
      },
      {
        name: "goat",
        score: 0
      },
      {
        name: "raven",
        score: 0
      },
      {
        name: "bear",
        score: 0
      },
      {
        name: "boar",
        score: 0
      },
      {name: "snake",
        score: 0
      },
      {name: "dragon",
        score: 0
      },
      {name: "horse",
        score: 0
      },
      {name: "kraken",
        score: 0
      },
      {name: "ox",
        score: 0
      },
      {name: "lynx",
        score: 0
      },
      {name: "squirrel",
        score: 0
      },
      {name: "rat",
        score: 0
      },
      {name: "eagle",
        score: 0
      },
      {name: "lion",
        score: 0
      },
      {name: "stoat",
        score: 0
      },
      {name: "owl",
      score: 0
    }

    ]
  }
}
