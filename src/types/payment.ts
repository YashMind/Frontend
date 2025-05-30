export interface PaymentOrderRequest {
  order_id: string;
  order_amount: number;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  return_url: string;
  notify_url?: string;
}

export interface PaymentOrderResponse {
  payment_link: string;
  order_id: string;
  order_token: string;
}

export interface PaymentVerificationResponse {
  order_id: string;
  order_amount: number;
  payment_status: string;
  payment_time?: string;
  payment_method?: string;
  payment_id?: string;
}