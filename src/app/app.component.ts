import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockNoteListComponent } from "./modules/block-note-list/block-note-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BlockNoteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
