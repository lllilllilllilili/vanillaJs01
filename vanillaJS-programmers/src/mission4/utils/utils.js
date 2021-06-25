export const errorMessage = {
    CHECK_TODOS : (username) => `${username}으로 todolist를 불러올 수 없습니다.`,
    CHECK_USER_LIST : () => `userlist를 불러올 수 없습니다.`,
    CHECK_TOGGLE : (username) => `${username}으로 toggle를 할 수 없습니다.`,
    CHECK_DELETE : (username) => `${username}으로 delete를 할 수 없습니다. `,
    CHECK_DELETE_ALL : (username) => `${username}으로 delete all을 할 수 없습니다.`,
    CHECK_INSERT : (username) => `${username}으로 insert 할 수 없습니다.`,
    CHECK_INPUT : () => `공백은 포함될 수 없습니다.`,
    STATUS_OK : 200,
    STATUS_BAD_REQUEST : 400,
    STATUS_NOT_FOUND : 404,
    STATUS_SERVER_ERROR : 500,
}

export const $ = (element) => document.querySelector(element); 
