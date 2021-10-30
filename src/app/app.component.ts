import { Component } from '@angular/core';
import { GameCardComponent } from './game-card/game-card.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'speedgames';
}
