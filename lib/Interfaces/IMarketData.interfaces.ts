export interface IMarketDataItem {
  itemID: number;
  KIprice: number;
  price: number;
  unixts: number;
}

export interface IMarketData {
  from: string;
  marketData: IMarketDataItem[];
  createdAt: Date;
}
