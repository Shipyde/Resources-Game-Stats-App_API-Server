export interface IMarketDataItem {
  itemID: number;
  KIprice: number;
  price: number;
  unixts: number;
}

export interface IMarketData {
  marketData: IMarketDataItem[];
  createdAt: Date;
}
