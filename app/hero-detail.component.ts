/**
 * Created by Kwesi on 3/28/16.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {RouteParams} from 'angular2/router';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    styleUrls: ['app/hero-detail.component.css'],
    templateUrl:`app/hero-detail.component.html`
})
export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;
    constructor(private _heroService:HeroService, private _routeParams:RouteParams){

    }
    ngOnInit(){
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(hero => this.hero = hero);
    }
    goBack(){
        window.history.back();
    }
}