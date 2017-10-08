import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    // getHeroes(): Hero [] {
    //     return HEROES;
    // } 

    // GETS ALL HEROES
    getHeroes(): Promise<Hero []> {
        return Promise.resolve(HEROES);
    }

    // GET HERO BY ID
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                   .then(
                       heroes => heroes.find(hero => hero.id === id)
                   );
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }


}
