import axios from 'axios';
import queryString from 'query-string';
import { VideoLibraryInterface, VideoLibraryGetQueryInterface } from 'interfaces/video-library';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVideoLibraries = async (
  query?: VideoLibraryGetQueryInterface,
): Promise<PaginatedInterface<VideoLibraryInterface>> => {
  const response = await axios.get('/api/video-libraries', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVideoLibrary = async (videoLibrary: VideoLibraryInterface) => {
  const response = await axios.post('/api/video-libraries', videoLibrary);
  return response.data;
};

export const updateVideoLibraryById = async (id: string, videoLibrary: VideoLibraryInterface) => {
  const response = await axios.put(`/api/video-libraries/${id}`, videoLibrary);
  return response.data;
};

export const getVideoLibraryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/video-libraries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVideoLibraryById = async (id: string) => {
  const response = await axios.delete(`/api/video-libraries/${id}`);
  return response.data;
};
