export interface IUserDataItem {
  itemID: number;
  amount: number;
  strike?: boolean;
}

export interface IUserData {
  uuid: string;
  email: string;
  userData: IUserDataItem[];
  updatedAt?: Date;
  createdAt: Date;
}
