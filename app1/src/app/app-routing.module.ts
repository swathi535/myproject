import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
//{path: '**', component: EmptyRouteComponent },
    { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'users', component: UsersComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/app1' },
  ],
})
export class AppRoutingModule { }
