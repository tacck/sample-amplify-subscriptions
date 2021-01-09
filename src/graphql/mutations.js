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
