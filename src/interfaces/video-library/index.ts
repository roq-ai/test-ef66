import { GetQueryInterface } from 'interfaces';

export interface VideoLibraryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface VideoLibraryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
