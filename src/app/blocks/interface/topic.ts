export interface Topic {
  id?: string;
  topic?: string;
  duration?: number;
  user?: SelectedUser[];
  file?: string;
  completed?: boolean;
  votes_up?: SelectedUser[];
  votes_down?: SelectedUser[];
  votes_enabled?: boolean;
}

export interface SelectedUser {
  id: number;
  name: string;
}
