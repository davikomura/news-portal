import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  newsList = [
    { title: 'Título da Notícia 1' },
    { title: 'Título da Notícia 2' },
    { title: 'Título da Notícia 3' },
    { title: 'Título da Notícia 4' },
    { title: 'Título da Notícia 5' }
  ];

}
