export interface AdminAllUsers {
  current_page: number;
  data: UserProfileData[];
  total_count: number;
  total_pages: number;
  total_signups?: number;
  tokens_consumed?: number;
  total_subscriptions?: number;
}

export interface SubscriptionPlans {
  id?: number;
  name: string;
  pricing: number;
  token_per_unit: number;
  chatbots_allowed: number;
  duration_days: number;
  features: string;
  users_active?: number;
  created_at?: string;
  updated_at?: string;
}

export interface SubscriptionPlansData {
  current_page?: number;
  data: SubscriptionPlans[];
  total_count?: number;
  total_pages?: number;
}

export interface TokenBots {
  id?: number;
  name: string;
  pricing: number;
  token_limits: number;
  active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface TokenBotsData {
  current_page: number;
  data: TokenBots[];
  total_count: number;
  total_pages: number;
}


export interface ToolsDataType {
  id?: number;
  tool: string;
  model: string;
  status: boolean;
}


export interface ProductMonitoringItem {
  id: number;
  name: string;
  status: string;
}


export interface ProductMonitoringRes {
  id: number;
  name: string;
  status: string;
}

export interface ProductMonitoringData {
  success: boolean;
  message: string;
  data: ProductMonitoringRes[];
}

export interface AdminUsersData {
  id?: number;
  fullName: string;
  email: string;
  status?: string;
  role: string;
  last_active?: string;
  plan?: string;
  permissions?: string[];
  created_at?: string;
}

export interface RolePermissions {
  role: string;
  permissions: string[];
}

export interface ClientUsersData {
  id?: number;
  fullName: string;
  email: string;
  status?: string;
  role: string;
  last_active?: string;
  plan?: string;
  role_permissions?: [];
  created_at?: string;
}

// interface AdminLogsActivity {
//   last_added_admin: AdminUsersData;
//   last_role_updated: AdminUsersData;
//   last_suspended_admin: AdminUsersData;
// }
export interface AdminLogsActivity {
  id: number;
  user_id: number;
  username: string;
  role: string;
  action: string;
  log_activity: string;
  created_at: string;
  updated_at: string;
}


export interface ClientLogsActivity {
  last_added_admin: AdminUsersData;
  last_role_updated: AdminUsersData;
  last_suspended_admin: AdminUsersData;
}

export interface PaymentsGateway {
  id?: number;
  payment_name: string;
  status: string;
  api_key: string;
}

export interface UserCredits {
  id: number;
  user_id: number;
  trans_id: number;
  plan_id: number;
  start_date: Date;
  expiry_date: Date | null;
  credits_purchased: number;
  credits_consumed: number;
  credit_balance: number;
  token_per_unit: number;
  chatbots_allowed: number;
}
export interface HistoryUserCredits {
  id: number;
  user_id: number;
  trans_id: number;
  plan_id: number;
  start_date: Date;
  expiry_date: Date | null;
  credits_purchased: number;
  credits_consumed: number;
  credit_balance: number;
  token_per_unit: number;
  chatbots_allowed: number;
  expiry_reason: string | null;
}

export interface TokenUsage {
  id: number;
  bot_id: number;
  user_id: number;
  user_credit_id: number;
  token_limit: number;
  combined_token_consumption: number;
  open_ai_request_token: number;
  open_ai_response_token: number;
  user_request_token: number;
  user_response_token: number;
  whatsapp_request_tokens: number;
  whatsapp_response_tokens: number;
  slack_request_tokens: number;
  slack_response_tokens: number;
  wordpress_request_tokens: number;
  wordpress_response_tokens: number;
  zapier_request_tokens: number;
  zapier_response_tokens: number;
}

export interface TokenUsageHistory {
  id: number;
  bot_id: number;
  user_id: number;
  user_credit_id: number;
  token_limit: number;
  combined_token_consumption: number;
  open_ai_request_token: number;
  open_ai_response_token: number;
  user_request_token: number;
  user_response_token: number;
  whatsapp_request_tokens: number;
  whatsapp_response_tokens: number;
  slack_request_tokens: number;
  slack_response_tokens: number;
  wordpress_request_tokens: number;
  wordpress_response_tokens: number;
  zapier_request_tokens: number;
  zapier_response_tokens: number;
  recorded_at: Date; // Added from your later requirement
}


export interface UserCreditsAndTokenUsageResponse {
  credits: UserCredits;
  token_usage: Array<TokenUsage>;
  history_credits: Array<HistoryUserCredits>;
}

export interface TokenUsage {
  token_limit: number;
  bot_id: number;
  user_id: number;
  open_ai_request_token: number;
  user_request_token: number;
  whatsapp_request_tokens: number;
  slack_request_tokens: number;
  wordpress_request_tokens: number;
  zapier_request_tokens: number;
  user_credit_id: number;
  id: number;
  combined_token_consumption: number;
  open_ai_response_token: number;
  user_response_token: number;
  whatsapp_response_tokens: number;
  slack_response_tokens: number;
  wordpress_response_tokens: number;
  zapier_response_tokens: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Credit {
  plan_id: number;
  id: number;
  expiry_date: string;
  credits_consumed: number;
  token_per_unit: number;
  user_id: number;
  trans_id: number;
  start_date: string;
  credits_purchased: number;
  credit_balance: number;
  total_token_consumption: number;
  total_token_consumption_revenue: number;
  chatbots_allowed: number;
  user: User;
  plan: SubscriptionPlans;
  token_usage: TokenUsage[];
}


export interface AdminTokenCreditReport {
  credits: Credit[];
  history_credits: any[]; // You might want to define a proper type for history credits
  chatbot_tokens: number;
  chatbot_revenue: number;
  pagination: any;
}

export interface PlanInfo {
  id: number | null;
  name: string | null;
  description: string | null;
}

export interface Transactions {
  id: number;
  order_id: string;
  payment_id: string;
  amount: number;
  currency: string;
  status: string;
  payment_method: string;
  transaction_data: string;
  created_at: string;
  updated_at: string;
  user: User | null;
  plan: PlanInfo | null;
}


export interface AdminTransactionsType {
  transactions: Transactions[];
  pagination: any;
}



