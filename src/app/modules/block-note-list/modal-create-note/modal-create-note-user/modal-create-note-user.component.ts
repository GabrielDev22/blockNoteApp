import { Component, OnInit } from '@angular/core';
import { ModalHeaderComponent } from "../../modal-header/modal-header.component";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-note-user',
  standalone: true,
  imports: [ModalHeaderComponent],
  templateUrl: './modal-create-note-user.component.html',
  styleUrl: './modal-create-note-user.component.scss'
})

export class ModalCreateNoteUserComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }


}
