import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BlockNoteService } from '../../service/block-note.service';
import { BlockNote } from '../model/blockNote';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateNoteUserComponent } from './modal-create-note/modal-create-note-user/modal-create-note-user.component';

@Component({
  selector: 'app-block-note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-note-list.component.html',
  styleUrl: './block-note-list.component.scss'
})

export class BlockNoteListComponent implements OnInit {

  blockNoteList : BlockNote [] = [];

  constructor(
    private _blockNoteService : BlockNoteService,
    private change : ChangeDetectorRef,
    private modalService : NgbModal
  ){}

  ngOnInit(){
    this.listBlockNoteApp()
  }

  listBlockNoteApp(){
    this._blockNoteService.listBlockNoteApp().subscribe(res => {
      console.log(res);
      this.blockNoteList = res;
    })
  }

  openCreateNoteModal(){
    const modalRef = this.modalService.open(ModalCreateNoteUserComponent, 
      {
        size: 'lg',
        centered: true,
        windowClass: 'global-modal-position'
      }
    )
  }



}
