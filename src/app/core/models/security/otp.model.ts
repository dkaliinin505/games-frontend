import {OtpTypes} from "@members/config/otp.config";

export interface OtpModel {
  type: OtpTypes,
  expired_at: Date
}
