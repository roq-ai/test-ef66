import { GetQueryInterface } from 'interfaces';

export interface ImageLibraryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ImageLibraryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
