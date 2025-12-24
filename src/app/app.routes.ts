import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { Places } from './places/places';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    { path: 'home', component: Home, pathMatch: 'full' },
    { path: 'about', component: About, pathMatch: 'full' },
    { path: 'services', component: Services, pathMatch: 'full' },
    { path: 'places', component: Places, pathMatch: 'full' },
    { path: 'gallery', component: Gallery, pathMatch: 'full' },
    { path: 'contact', component: Contact, pathMatch: 'full' }

];
