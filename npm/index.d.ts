declare module '@apiverve/urllookup' {
  export interface urllookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface urllookupResponse {
    status: string;
    error: string | null;
    data: URLLookupData;
    code?: number;
  }


  interface URLLookupData {
      range:       string;
      country:     string;
      region:      string;
      city:        string;
      timezone:    string;
      state:       string;
      zipcode:     string;
      coordinates: number[];
      url:         string;
      domain:      string;
  }

  export default class urllookupWrapper {
    constructor(options: urllookupOptions);

    execute(callback: (error: any, data: urllookupResponse | null) => void): Promise<urllookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: urllookupResponse | null) => void): Promise<urllookupResponse>;
    execute(query?: Record<string, any>): Promise<urllookupResponse>;
  }
}
