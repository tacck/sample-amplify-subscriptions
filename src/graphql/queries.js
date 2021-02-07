/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOpenChat = /* GraphQL */ `
  query GetOpenChat($id: ID!) {
    getOpenChat(id: $id) {
      id
      message
      createdAt
      updatedAt
    }
  }
`;
export const listOpenChats = /* GraphQL */ `
  query ListOpenChats(
    $filter: ModelOpenChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpenChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoomChat = /* GraphQL */ `
  query GetRoomChat($id: ID!) {
    getRoomChat(id: $id) {
      id
      roomName
      message
      createdAt
      updatedAt
    }
  }
`;
export const listRoomChats = /* GraphQL */ `
  query ListRoomChats(
    $filter: ModelRoomChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoomChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roomName
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
