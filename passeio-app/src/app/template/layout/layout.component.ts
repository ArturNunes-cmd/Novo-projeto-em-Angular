import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { Authgoogle } from '../../authgoogle';
import { Profile } from '../../landingpage/profile.model';


@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  props: LayoutProps = {
    titulo:'',
    subTitulo:''
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: Authgoogle
    ) {}

    ngOnInit(): void{
      this.router.events.pipe(
        filter( () => this.activatedRoute.firstChild !== null),
        map(() => this.obterPorpriedadesLayout())
      ).subscribe((props:LayoutProps) => this.props = props)
    }

    obterPorpriedadesLayout(): LayoutProps {
      let rotaFilha = this.activatedRoute.firstChild;
      while(rotaFilha?.firstChild){
        rotaFilha = rotaFilha.firstChild;
      }
      return rotaFilha?.snapshot.data as LayoutProps;
    }

    logout(){
      this.loginService.logout();
    }
}
