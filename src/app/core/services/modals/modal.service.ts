import { Injectable } from '@angular/core';
import {BaseModalComponent} from "@members/core/components/modals/base.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modals: BaseModalComponent[] = [];
  constructor() { }

  add(modal: BaseModalComponent) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter(modal => modal.id !== id);
  }

  open(id: string, ...params: any) {
    const modal = this.modals.find(x => x.id === id);

    modal?.open(...params);
  }

  close(id: string) {
    const modal = this.modals.find(x => x.id === id);
    modal?.close();
  }
}
