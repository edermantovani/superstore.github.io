import { Component, OnInit } from '@angular/core';
import { PessoasService } from "../../services/pessoas.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {

  constructor(public servicoPessoa: PessoasService) { }

  ngOnInit() {
  }

}
