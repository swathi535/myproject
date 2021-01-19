import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from "@angular/common/http";
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    LoginComponent,
    RegisterComponent,
    PostsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PostsService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
