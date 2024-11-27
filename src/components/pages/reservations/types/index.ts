export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type sortListType = {
  title: string;
  options: any;
};
// Generated by https://quicktype.io

export interface AccountResponseProps {
  data: Accounts[];
  success: number;
  httpStatus: string;
  message: string;
}

export interface Accounts {
  id: string;
  amount: number;
  issuer_id: string;
  receiver_id: null;
  status: string;
  sense: string;
  issuer_account: string;
  receiver_account: string;
  customer_account: string;
  service: string;
}