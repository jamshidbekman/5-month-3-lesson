class usersService {
  users = 0;
  countUsers(status) {
    if (status === "connection") {
      this.users += 1;
      return `faol userlar soni ${this.users}`;
    } else if (status === "disconnect") {
      this.users -= 1;
      return `faol userlar soni ${this.users}`;
    }
  }
}
export default usersService;
