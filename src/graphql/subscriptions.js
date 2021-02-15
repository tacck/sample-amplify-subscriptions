/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoomChatByRoomName = /* GraphQL */ `
  subscription OnCreateRoomChatByRoomName($roomName: String!) {
    onCreateRoomChatByRoomName(roomName: $roomName) {
      id
      roomName
      message
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCloseRoomChatByRoomName = /* GraphQL */ `
  subscription OnCreateCloseRoomChatByRoomName($roomName: String!) {
    onCreateCloseRoomChatByRoomName(roomName: $roomName) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOpenChat = /* GraphQL */ `
  subscription OnCreateOpenChat {
    onCreateOpenChat {
      id
      message
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOpenChat = /* GraphQL */ `
  subscription OnUpdateOpenChat {
    onUpdateOpenChat {
      id
      message
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOpenChat = /* GraphQL */ `
  subscription OnDeleteOpenChat {
    onDeleteOpenChat {
      id
      message
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRoomChat = /* GraphQL */ `
  subscription OnCreateRoomChat {
    onCreateRoomChat {
      id
      roomName
      message
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoomChat = /* GraphQL */ `
  subscription OnUpdateRoomChat {
    onUpdateRoomChat {
      id
      roomName
      message
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoomChat = /* GraphQL */ `
  subscription OnDeleteRoomChat {
    onDeleteRoomChat {
      id
      roomName
      message
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCloseRoomChat = /* GraphQL */ `
  subscription OnCreateCloseRoomChat($owner: String!) {
    onCreateCloseRoomChat(owner: $owner) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCloseRoomChat = /* GraphQL */ `
  subscription OnUpdateCloseRoomChat($owner: String!) {
    onUpdateCloseRoomChat(owner: $owner) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCloseRoomChat = /* GraphQL */ `
  subscription OnDeleteCloseRoomChat($owner: String!) {
    onDeleteCloseRoomChat(owner: $owner) {
      id
      roomName
      message
      createdAt
      updatedAt
      owner
    }
  }
`;
