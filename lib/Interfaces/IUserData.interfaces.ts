export interface IUserDataItem {
  itemID: number;
  amount: number;
  strike?: boolean;
}

export interface IUserData {
  userData: IUserDataItem[];
  updatedAt?: Date;
  createdAt: Date;
}
