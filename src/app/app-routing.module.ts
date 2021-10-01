import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { DashboardConfigurationComponent } from './components/admin/dashboard-configuration/dashboard-configuration.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AccountComponent } from './pages/account/account.component';
import { BorradoresComponent } from './pages/borradores/borradores.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { ModHistoryComponent } from './pages/mod-history/mod-history.component';
import { MonitorComponent } from './pages/monitor/monitor.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { TopsComponent } from './pages/tops/tops.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PostNotFoundComponent } from './posts/post-not-found/post-not-found.component';
import { PostsCreateComponent } from './posts/posts-create/posts-create.component';
import { PostsViewComponent } from './posts/posts-view/posts-view.component';
import { SectionHomeComponent } from './sections/section-home/section-home.component';

const routes: Routes = [
  { path: '', component: SectionHomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cuenta', component: AccountComponent },
  { path: 'perfil/:userName', component: PerfilComponent },

  { path: 'posts/:categoria', component: SectionHomeComponent },
  { path: 'posts/:categoria/:id/:nombre-post', component: PostsViewComponent },
  { path: 'posts/404/:nombre-post', component: PostNotFoundComponent },
  { path: 'crear/post', component: PostsCreateComponent },
  { path: 'posts/actualizar/:id', component: PostsCreateComponent },

  { path: 'mod-history', component: ModHistoryComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'mod-history', component: ModHistoryComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'tops', component: TopsComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'borradores', component: BorradoresComponent },

  {
    path: 'administracion', component: DashboardComponent, children:
    [
      { path: 'dashboard', component: DashboardAdminComponent },
      { path: 'configuracion', component: DashboardConfigurationComponent },
    ]
  },

  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
