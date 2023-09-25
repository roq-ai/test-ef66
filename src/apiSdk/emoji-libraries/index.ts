import axios from 'axios';
import queryString from 'query-string';
import { EmojiLibraryInterface, EmojiLibraryGetQueryInterface } from 'interfaces/emoji-library';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmojiLibraries = async (
  query?: EmojiLibraryGetQueryInterface,
): Promise<PaginatedInterface<EmojiLibraryInterface>> => {
  const response = await axios.get('/api/emoji-libraries', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmojiLibrary = async (emojiLibrary: EmojiLibraryInterface) => {
  const response = await axios.post('/api/emoji-libraries', emojiLibrary);
  return response.data;
};

export const updateEmojiLibraryById = async (id: string, emojiLibrary: EmojiLibraryInterface) => {
  const response = await axios.put(`/api/emoji-libraries/${id}`, emojiLibrary);
  return response.data;
};

export const getEmojiLibraryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/emoji-libraries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEmojiLibraryById = async (id: string) => {
  const response = await axios.delete(`/api/emoji-libraries/${id}`);
  return response.data;
};
