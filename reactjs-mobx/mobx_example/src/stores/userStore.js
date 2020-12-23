import { makeObservable, observable, action } from "mobx";

class UserStore {
  userName = "k";

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
