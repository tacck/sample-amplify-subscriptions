/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOpenChat = /* GraphQL */ `
  mutation CreateOpenChat(
    $input: CreateOpenChatInput!
    $condition: ModelOpenChatConditionInput
  ) {
    createOpenChat(input: $input, condition: $condition) {
      id
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateOpenChat = /* GraphQL */ `
  mutation UpdateOpenChat(
    $input: UpdateOpenChatInput!
    $condition: ModelOpenChatConditionInput
  ) {
    updateOpenChat(input: $input, condition: $condition) {
      id
      message
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpenChat = /* GraphQL */ `
  mutation DeleteOpenChat(
    $input: DeleteOpenChatInput!
    $condition: ModelOpenChatConditionInput
  ) {
    deleteOpenChat(input: $input, condition: $condition) {
      id
      message
      createdAt
      updatedAt
    }
  }
`;
export const createRoomChat = /* GraphQL */ `
  mutation CreateRoomChat(
    $input: CreateRoomChatInput!
    $condition: ModelRoomChatConditionInput
  ) {
    createRoomChat(input: $input, condition: $condition) {
      id
      roomName
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateRoomChat = /* GraphQL */ `
  mutation UpdateRoomChat(
    $input: UpdateRoomChatInput!
    $condition: ModelRoomChatConditionInput
  ) {
    updateRoomChat(input: $input, condition: $condition) {
      id
      roomName
      message
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoomChat = /* GraphQL */ `
  mutation DeleteRoomChat(
    $input: DeleteRoomChatInput!
    $condition: ModelRoomChatConditionInput
  ) {
    deleteRoomChat(input: $input, condition: $condition) {
      id
      roomName
      message
      createdAt
      updatedAt
    }
  }
`;
