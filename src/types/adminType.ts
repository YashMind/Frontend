interface AdminAllUsers {
  current_page: number;
  data: UserProfileData[];
  total_count: number;
  total_pages: number;
  total_signups?: number;
  tokens_consumed?: number;
  total_subscriptions?: number;
}

interface SubscriptionPlans {
  id?: number;
  name: string;
  pricing: number;
  token_limits: number;
  features: string;
  users_active?: number;
  created_at?: string;
  updated_at?: string;
}

interface SubscriptionPlansData {
  current_page: number;
  data: SubscriptionPlans[];
  total_count: number;
  total_pages: number;
}

interface TokenBots {
  id?: number;
  name: string;
  pricing: number;
  token_limits: number;
  active?: boolean;
  created_at?: string;
  updated_at?: string;
}

interface TokenBotsData {
  current_page: number;
  data: TokenBots[];
  total_count: number;
  total_pages: number;
}

interface ProductMonitoring {
  id?: number;
  product_name: string;
  active?: boolean;
  created_at?: string;
  updated_at?: string;
}

interface ProductMonitoringData {
  current_page: number;
  data: ProductMonitoring[];
  total_count: number;
  total_pages: number;
}

interface AdminUsersData {
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

interface RolePermissions {
  role: string;
  permissions: string[];
}

interface ClientUsersData {
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

interface AdminLogsActivity {
  last_added_admin: AdminUsersData;
  last_role_updated: AdminUsersData;
  last_suspended_admin: AdminUsersData;
}

interface ClientLogsActivity {
  last_added_admin: AdminUsersData;
  last_role_updated: AdminUsersData;
  last_suspended_admin: AdminUsersData;
}

interface PaymentsGateway {
  id?: number;
  payment_name: string;
  status: string;
  api_key: string;
}
