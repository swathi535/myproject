import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//import { Http, Response, Headers ,RequestOptions} from '@angular/http';
import { PostsService } from '../services/posts.service';
@Component({
  selector: 'app1-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }
  username:string;
  password:string;

  ngOnInit(): void {
   // console.log(this.dd);
  }
  onSubmit(  ) {
    console.log("aa");
    console.log(this.username);
    const user={
      email:this.username,
      password:this.password
      
    }
    console.log(user);
    this.postsService.login(user)
    .subscribe(
      (response:any) => {
        console.log(response);
        this.router.navigate(['/users']);  
      //  this.submitted = true;
      },
      (error:any) => {
        console.log(error);
      });
}
  }


