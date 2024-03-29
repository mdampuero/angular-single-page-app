import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

const APP_ROUTES: Routes = [
    { path: 'home', component:HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'resultados/:query', component: ResultadosComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);