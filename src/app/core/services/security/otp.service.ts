import {Injectable} from '@angular/core';
import {HttpService} from "@members/core/services/api/http.service";
import {OtpApiUrl, OtpTypes} from "@members/config/otp.config";
import {map} from "rxjs/operators";
import {OtpModel} from "@members/core/models/security/otp.model";
import {ModalService} from "@members/core/services/modals/modal.service";

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  constructor(private http: HttpService, private modalService: ModalService) {}

  createOtp(otpType: OtpTypes) {
    return this.http.post(OtpApiUrl.create, {
      type: otpType
    }).pipe(map((data: any) => {
      return data.data as OtpModel;
    })).subscribe((data: OtpModel) => {
      this.modalService.open("members_otp_modal", data.type)
    });
  }
}
