import { Component, Input, OnInit } from '@angular/core';
import { ModalHeaderComponent } from '../../modules/block-note-list/modal-header/modal-header.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm-user',
  standalone: true,
  imports: [ModalHeaderComponent],
  templateUrl: './modal-confirm-user.component.html',
  styleUrl: './modal-confirm-user.component.scss'
})
export class ModalConfirmUserComponent implements OnInit {

  @Input() title! : string;
  @Input() textContent! : string;

  constructor(
    private activeModal : NgbActiveModal
  ){}

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  sucess(){
    this.activeModal.close(true);
  }

}
