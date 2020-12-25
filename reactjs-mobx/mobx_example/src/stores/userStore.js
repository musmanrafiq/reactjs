import { observable, action, makeObservable } from "mobx";

class UserStore {
  userName = "Usman Rafiq";

  constructor() {
    makeObservable(this, {
      userName: observable,
      setName: action.bound
    });
  }

  setName() {
    const number = Math.random();
    this.userName = `${number}usman`;
  }
}
const userStore = new UserStore();
export default userStore;
