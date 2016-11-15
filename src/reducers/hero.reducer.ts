import { ActionReducer , Action } from '@ngrx/store';
import { HeroActions } from '../actions/hero.actions';
import { Hero } from '../models/hero.model';

let nextId = 0;

const InitState: Hero[] = [
    {id: 1 , name: "Test1"} , 
    {id: 2 , name: "Test2"} , 
    {id: 3 , name: "Test3"} , 
    {id: 4 , name: "Test4"} , 
]


export const HeroReducer: ActionReducer<Hero> = (state:Hero[] = InitState , action: Action) =>{
    switch(action.type){
        case HeroActions.ADD_HERO:
            return [...state , Object.assign({} , action.payload , { id: nextId++})];
        case HeroActions.UPDATE_HERO:
            return state.map(hero => {
                return hero.id === action.payload.id ? Object.assign({}, hero, action.payload) : hero;
            });
        case HeroActions.DELETE_HERO:
            return state.filter(hero => hero.id !== action.payload.id);
        default:
            return state;
    }
}