import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

interface iClan {
  id: string,
  name: string,
  score: number
}

@Injectable({
  providedIn: 'root'
})
export class ClansScoreService {

  clanScore$: BehaviorSubject<iClan[]> = new BehaviorSubject<iClan[]>(this.initClanScore());

  get clanScore(): iClan[] {
    return this.clanScore$.getValue();
  }

  set clanScore(value: iClan[]) {
    this.clanScore$.next(value);
  }

  maxScoreValue$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get maxScoreValue(): number {
    return this.maxScoreValue$.getValue();
  }

  set maxScoreValue(value: number) {
    this.maxScoreValue$.next(value);
  }


  constructor() {
  }

  applyQuestionScore(clansPonderation: any, points: number) {
    const max = this.getMax(clansPonderation);

    this.clanScore.forEach((clan: iClan) => {
      let newPoints = clansPonderation[clan.id] - points;
      newPoints = max - Math.abs(newPoints);
      clan.score += newPoints;
    });

    this.maxScoreValue += this.getMax(clansPonderation) * points;
  }

  getMax(clansPond: any): number {
    let max = 0;
    for (let key in clansPond) {
      if (clansPond.hasOwnProperty(key)) {
        let val = clansPond[key];
        if (val > max) {
          max = val;
        }
      }
    }

    return max;
  }


  initClanScore(): iClan[] {
    return [
      {
        id: "wolf",
        name: $localize`:@@clanWolf:Wolf`,
        score: 0
      },
      {
        id: "stag",
        name: $localize`:@@clanStag:Stag`,
        score: 0
      },
      {
        id: "goat",
        name: $localize`:@@clanGoat:Goat`,
        score: 0
      },
      {
        id: "raven",
        name: $localize`:@@clanRaven:Raven`,
        score: 0
      },
      {
        id: "bear",
        name: $localize`:@@clanBear:Bear`,
        score: 0
      },
      {
        id: "boar",
        name: $localize`:@@clanBoar:Boar`,
        score: 0
      },
      {
        id: "snake",
        name: $localize`:@@clanSnake:Snake`,
        score: 0
      },
      {
        id: "dragon",
        name: $localize`:@@clanDragon:Dragon`,
        score: 0
      },
      {
        id: "horse",
        name: $localize`:@@clanHorse:Horse`,
        score: 0
      },
      {
        id: "kraken",
        name: $localize`:@@clanKraken:Kraken`,
        score: 0
      },
      {
        id: "ox",
        name: $localize`:@@clanOx:Ox`,
        score: 0
      },
      {
        id: "lynx",
        name: $localize`:@@clanLynx:Lynx`,
        score: 0
      },
      {
        id: "squirrel",
        name: $localize`:@@clanSquirrel:Squirrel`,
        score: 0
      },
      {
        id: "rat",
        name: $localize`:@@clanRat:Rat`,
        score: 0
      },
      {
        id: "eagle",
        name: $localize`:@@clanEagle:Eagle`,
        score: 0
      },
      {
        id: "lion",
        name: $localize`:@@clanLion:Lion`,
        score: 0
      },
      {
        id: "stoat",
        name: $localize`:@@clanStoat:Stoat`,
        score: 0
      },
      {
        id: "owl",
        name: $localize`:@@clanOwl:Owl`,
        score: 0
      }

    ]
  }
}
