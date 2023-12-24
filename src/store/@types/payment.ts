import { ILoading } from "./misc";

export type IPaymenmtType = {
  reference: string;
  subscription_plan_id: number; //
  mobile_number: string; // allow
  payment_type_id: number; // bank, card, airtime and so on
  channel: "WEB"; // web
};

export type IVerifySmartPay = {
  reference: string;
  subscription_plan_id: number;
};

export type IDataType = {
  mobile_number: string;
  payment_type_id: string | number;
};

export type IDataErrorType = {
  mobile_number: string;
  payment_type_id: string | number;
};

export type ISmartPaymentMethod = {
  approved: boolean;
  defaultFixedCommission: number;
  defaultMaximumCommissionCapped: number;
  defaultMinimumCommissionCapped: number;
  defaultPercentageCommission: number;
  id: number;
  name: string;
};

export type ISubScriptionState = {
  smart_payment_method: ISmartPaymentMethod[];
  message: null | IMessage;
} & ILoading;

export type IMessage = { type: IMessageType; message: string };

export type IMessageType = "success" | "error" | "warning";
