interface AdminAllUsers {
  current_page: number;
  data: UserProfileData[];
  total_count: number;
  total_pages: number;
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
