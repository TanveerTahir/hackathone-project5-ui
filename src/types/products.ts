


export interface Product {
    // _id : string
    title: string;
    description: string;
    productImage: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
    price: number;
    tags?: string[];
    discountPercentage?: number;
    isNew?: boolean;
    slug : {
      _type : "slug";
      current : string;
    };
  }
  