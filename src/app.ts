//https://umijs.org/zh-CN/plugins/plugin-initial-state
export function getInitialState():Promise<API.IUser> {
    return Promise.resolve({
        id:1,
        name:'linjie'
    });
  }