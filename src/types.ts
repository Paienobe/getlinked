export type RegisterPayload = {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
  privacy_policy_accepted: boolean;
};

export type ContactPayload = {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
};
