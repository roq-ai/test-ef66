import { GetQueryInterface } from 'interfaces';

export interface GroupChatInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface GroupChatGetQueryInterface extends GetQueryInterface {
  id?: string;
}
