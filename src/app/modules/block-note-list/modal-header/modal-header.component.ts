import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-header.component.html',
  styleUrl: './modal-header.component.scss'
})
export class ModalHeaderComponent {

  @Input() title! : string;

  @Output() close = new EventEmitter<boolean>();
  @Input() popoverInfo! : string;

  closeAction(){
    this.close.emit(true);
  }

}
