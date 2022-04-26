import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormControl} from "@angular/forms";
import {OtpTypes} from "@members/config/otp.config";
import {BaseModalComponent} from "@members/core/components/modals/base.component";
import {ModalService} from "@members/core/services/modals/modal.service";

@Component({
  selector: 'members-modal-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent extends BaseModalComponent implements OnInit {
  @ViewChildren("otpInput") input: QueryList<ElementRef> = new QueryList<ElementRef>();

  otpLength: number = 6;
  arrOtpValues: FormControl[] = [];

  otpType: OtpTypes = OtpTypes.email;

  constructor(modalService: ModalService) {
    super(modalService);

    this.id = "members_otp_modal";
  }

  ngOnInit(): void {
    for (let i = 0; i < this.otpLength; i++) {
      this.arrOtpValues[i] = new FormControl(null);
    }
  }

  typeOtp(inputIdx: number, event: KeyboardEvent): boolean {
    if (event.ctrlKey || event.metaKey) {
      return false;
    }

    const formControl: FormControl = this.arrOtpValues[inputIdx];
    const keyCode: string = event.code.toLowerCase();

    const inputs: ElementRef[] = this.input.toArray();

    if (keyCode === "backspace") {
      this.arrOtpValues[inputIdx].setValue("");

      if (inputIdx !== 0) {
        inputs[inputIdx - 1].nativeElement.focus();
      }

      event.preventDefault();

      return true;
    }

    if (formControl.value?.toString().length > 0) {
      event.preventDefault();

      return true;
    }

    formControl.setValue(event.key);

    event.preventDefault();

    if (inputIdx < (this.otpLength - 1)) {
      inputs[inputIdx + 1].nativeElement.focus();
    }

    return true;
  }

  handlePaste(event: ClipboardEvent): boolean {
    event.preventDefault();

    const code: string|undefined = event.clipboardData?.getData("text");

    if (code === undefined || code.length !== 6) {
      return false;
    }

    const charArray: string[] = code.split("");

    charArray.forEach((char: string, index: number) => {
      this.arrOtpValues[index].setValue(char);
    })
    return true;
  }

  open(type: OtpTypes) {
    this.otpType = type;

    super.open(type);
  }

  get isPhone(): boolean {
    return this.otpType === OtpTypes.phone;
  }

  get isEmail(): boolean {
    return this.otpType === OtpTypes.email;
  }
}
