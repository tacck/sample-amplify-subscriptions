/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const postResponses = /* GraphQL */ `
  mutation PostResponses($input: PostResponsesInput) {
    postResponses(input: $input) {
      roomName
      items {
        id
        roomName
        message
      }
    }
  }
`;
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
export const createCloseRoomChat = /* GraphQL */ `
  mutation CreateCloseRoomChat(
    $input: CreateCloseRoomChatInput!
    $condition: ModelCloseRoomChatConditionInput
  ) {
    createCloseRoomChat(input: $input, condition: $condition) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCloseRoomChat = /* GraphQL */ `
  mutation UpdateCloseRoomChat(
    $input: UpdateCloseRoomChatInput!
    $condition: ModelCloseRoomChatConditionInput
  ) {
    updateCloseRoomChat(input: $input, condition: $condition) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCloseRoomChat = /* GraphQL */ `
  mutation DeleteCloseRoomChat(
    $input: DeleteCloseRoomChatInput!
    $condition: ModelCloseRoomChatConditionInput
  ) {
    deleteCloseRoomChat(input: $input, condition: $condition) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createResponseLateRoomChat = /* GraphQL */ `
  mutation CreateResponseLateRoomChat(
    $input: CreateResponseLateRoomChatInput!
    $condition: ModelResponseLateRoomChatConditionInput
  ) {
    createResponseLateRoomChat(input: $input, condition: $condition) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateResponseLateRoomChat = /* GraphQL */ `
  mutation UpdateResponseLateRoomChat(
    $input: UpdateResponseLateRoomChatInput!
    $condition: ModelResponseLateRoomChatConditionInput
  ) {
    updateResponseLateRoomChat(input: $input, condition: $condition) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteResponseLateRoomChat = /* GraphQL */ `
  mutation DeleteResponseLateRoomChat(
    $input: DeleteResponseLateRoomChatInput!
    $condition: ModelResponseLateRoomChatConditionInput
  ) {
    deleteResponseLateRoomChat(input: $input, condition: $condition) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
