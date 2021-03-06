/**
 * Created by Kwesi on 3/28/16.
 */
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import set = Reflect.set;

@Injectable()
export class HeroService{
    getHeroes(){
        return Promise.resolve(HEROES);
    }
    getHero(id:number){
        return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
    getHeroesSlowly(){
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES),2000)
        );
    }

}