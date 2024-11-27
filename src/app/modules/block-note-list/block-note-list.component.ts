import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BlockNoteService } from '../../service/block-note.service';
import { BlockNote } from '../model/blockNote';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateNoteUserComponent } from './modal-create-note/modal-create-note-user/modal-create-note-user.component';
import { ModalConfirmUserComponent } from '../../utils/modal-confirm-user/modal-confirm-user.component';

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

  //Queda pendiente revisar el eliminar
  deleteByIdNote(id : number){
    console.log(id);
    const modalRef = this.modalService.open(ModalConfirmUserComponent, 
      {
        size: 'confirm',
        centered: true,
        windowClass: 'global-modal-position'
      }
    )
     modalRef.componentInstance.title = "Eliminar nota";
     modalRef.componentInstance.textContent = "¿Estas seguro que quieres eliminar esta nota?, recuerda que una vez elimina ya no podras volver hacia atras",
     modalRef.result.then((data) => {
        if(data == true){
          this.deleteNoteId(id);
        }
     })
  }

  deleteNoteId(id : number){
    console.log(id);
    this._blockNoteService.deleteBlockNote(id).subscribe(res => {
      return;
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
