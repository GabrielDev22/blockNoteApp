import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/enviroment';
import { BlockNote } from '../modules/model/blockNote';
import { Observable } from 'rxjs';

const API_BLOCK_NOTE_ENDPOINT = `${environment.backUri}/note`;

@Injectable({
  providedIn: 'root'
})
export class BlockNoteService {

  constructor(
    private http: HttpClient 
  ) { }

  listBlockNoteApp() : Observable<BlockNote[]>{
    return this.http.get<BlockNote[]>(`${API_BLOCK_NOTE_ENDPOINT}/list`);
  }

  createBlockNote(createNote : BlockNote) : Observable<BlockNote>{
    return this.http.post<BlockNote>(`${API_BLOCK_NOTE_ENDPOINT}/create`, createNote);
  }

  updateBlockNote(updateNote : BlockNote): Observable<BlockNote>{
    return this.http.post<BlockNote>(`${API_BLOCK_NOTE_ENDPOINT}/update`, updateNote);
  }

  deleteBlockNote(deleteNote : BlockNote): Observable<BlockNote>{
    return this.http.post<BlockNote>(`${API_BLOCK_NOTE_ENDPOINT}/delete`, deleteNote);
  }

}
