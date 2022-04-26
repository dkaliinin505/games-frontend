import {ModalService} from "@members/core/services/modals/modal.service";

export class BaseModalComponent {
  isShown: boolean = false;

  id: string = "";

  constructor(private modalService: ModalService) {
    this.modalService.add(this);
  }

  open(...params: any) {
    this.isShown = true;
    console.log(this)
  }

  close() {
    this.isShown = false;
  }
}
