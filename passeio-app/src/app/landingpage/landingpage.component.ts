import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { Authgoogle } from '../authgoogle';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined;

  constructor(
    private router : Router, 
    private LoginService: Authgoogle) {}

    navegar(){
      this.router.navigate(['/paginas/galeria']);
    }

    logarComGoogle(){
      this.LoginService.login()
    }

    isLoggedIn(): boolean{
      const dadosGoogle = this.LoginService.getLoogeedProfile();
      console.log("dados do Google: ", dadosGoogle)
      this.profile = dadosGoogle;
      return !!this.profile;
    }
}
