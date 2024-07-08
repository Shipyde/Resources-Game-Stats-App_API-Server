export interface IToken {
  uuid: string;
  token: string;
  for: string;
  usedAt?: Date;
  createdAt: Date;
}
