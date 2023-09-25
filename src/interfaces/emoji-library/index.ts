import { GetQueryInterface } from 'interfaces';

export interface EmojiLibraryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmojiLibraryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
