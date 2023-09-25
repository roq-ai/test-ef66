import axios from 'axios';
import queryString from 'query-string';
import { ImageLibraryInterface, ImageLibraryGetQueryInterface } from 'interfaces/image-library';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getImageLibraries = async (
  query?: ImageLibraryGetQueryInterface,
): Promise<PaginatedInterface<ImageLibraryInterface>> => {
  const response = await axios.get('/api/image-libraries', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createImageLibrary = async (imageLibrary: ImageLibraryInterface) => {
  const response = await axios.post('/api/image-libraries', imageLibrary);
  return response.data;
};

export const updateImageLibraryById = async (id: string, imageLibrary: ImageLibraryInterface) => {
  const response = await axios.put(`/api/image-libraries/${id}`, imageLibrary);
  return response.data;
};

export const getImageLibraryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/image-libraries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteImageLibraryById = async (id: string) => {
  const response = await axios.delete(`/api/image-libraries/${id}`);
  return response.data;
};
