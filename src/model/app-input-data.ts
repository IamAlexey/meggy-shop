export class AppInputData {
  userId: number;
  userType: number;

  constructor(userId: number, userType: number) {
    this.userId = userId;
    this.userType = userType;
  }

}

enum UserType {
  Guest = 0,
  Member,
  Moderator,
  Editor,
  Backoffice

}
