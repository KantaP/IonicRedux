import { Component , OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AppState } from '../../services/app-state';
import { Hero } from '../../models/hero.model';
import { HeroActions } from '../../actions/hero.actions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  heroes: Observable<Hero[]>

  heroForm: FormGroup

  constructor(
    public navCtrl: NavController ,
    private store: Store<AppState>,
    private heroActions: HeroActions,
    private formBuilder: FormBuilder
    ) {
      this.heroes = this.store.select('heroes')
      this.heroForm = this.formBuilder.group({
        heroname: ''
      })
    }

  ngOnInit(){
    
  }

  save(){
    let hero: Hero = { id:0 , name: this.heroForm.controls['heroname'].value}
    this.store.dispatch(this.heroActions.addHero(hero));
  }

}
