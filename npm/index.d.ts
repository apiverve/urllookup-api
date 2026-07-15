declare module '@apiverve/urllookup' {
  export interface urllookupOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface urllookupResponse {
    status: string;
    error: string | null;
    data: URLLookupData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface URLLookupData {
      range:          null | string;
      country:        null | string;
      region:         null | string;
      city:           null | string;
      timezone:       null | string;
      state:          null | string;
      zipcode:        null | string;
      coordinates:    (number | null)[];
      url:            null | string;
      domain:         null | string;
      ip:             null | string;
      countryName:    null | string;
      continent:      null | string;
      continentName:  null | string;
      accuracyRadius: number | null;
      isEU:           boolean | null;
  }

  export default class urllookupWrapper {
    constructor(options: urllookupOptions);

    execute(callback: (error: any, data: urllookupResponse | null) => void): Promise<urllookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: urllookupResponse | null) => void): Promise<urllookupResponse>;
    execute(query?: Record<string, any>): Promise<urllookupResponse>;
  }
}
