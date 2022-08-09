export interface CounterState {
  value: number;
}

export interface AuthState {
  data: { _id: string; email: string; name: string } | null;
  loading: boolean;
  error: string | undefined;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}
