export class Menu{
    displayName: String;
    url: String;
    displayOrder: number;

    constructor(data?:Menu){
      this.displayName = data && data.displayName || '';
      this.url = data && data.url || '';
      this.displayOrder = data && data.displayOrder || null;

    }
  }