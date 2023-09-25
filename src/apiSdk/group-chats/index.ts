import axios from 'axios';
import queryString from 'query-string';
import { GroupChatInterface, GroupChatGetQueryInterface } from 'interfaces/group-chat';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGroupChats = async (
  query?: GroupChatGetQueryInterface,
): Promise<PaginatedInterface<GroupChatInterface>> => {
  const response = await axios.get('/api/group-chats', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGroupChat = async (groupChat: GroupChatInterface) => {
  const response = await axios.post('/api/group-chats', groupChat);
  return response.data;
};

export const updateGroupChatById = async (id: string, groupChat: GroupChatInterface) => {
  const response = await axios.put(`/api/group-chats/${id}`, groupChat);
  return response.data;
};

export const getGroupChatById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/group-chats/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGroupChatById = async (id: string) => {
  const response = await axios.delete(`/api/group-chats/${id}`);
  return response.data;
};
