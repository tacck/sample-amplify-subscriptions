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
