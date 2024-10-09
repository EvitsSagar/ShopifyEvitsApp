import { Url } from "next/dist/shared/lib/router/router";

export interface variantsObj{
    id:string;
    product_id:string;
    title:string;
    price:string;
    position:string;
    inventory_policy:string;
    compare_at_price:string;
    option1:string;
    option2:string;
    option3:string;
    created_at:string;
    updated_at:string;
    taxable:string;
    barcode:string|ImageData;
    fulfillment_service:string;
    grams:string;
    inventory_management:string;
    requires_shipping:boolean;
    sku:string|null;
    weight:string;
    weight_unit:string;
    inventory_item_id:string;
    inventory_quantity:string;
    old_inventory_quantity:string;
    admin_graphql_api_id:string;
    image_id:string|null;     
}

export interface optionObj{
    id:string;
    product_id:string;
    name:string;
    position:string;
    values:string[];
}


export interface imagesObj{
    id:string;
    alt:null|string;
    position:number;
    product_id:string;
    created_at:string;
    updated_at:string;
    admin_graphql_api_id:string;
    width:number;
    height:number;
    src:string;
    variant_ids:string[];
}



export interface productObj{
    id:string;
    title:string;
    body_html:string;
    vendor:string;
    product_type:string;
    created_at:string;
    handle:string;
    updated_at:string;
    published_at:string;
    template_suffix:string|null;
    published_scope:string;
    tags:string;
    status:string;
    admin_graphql_api_id:string;
    variants:variantsObj[];
    options:optionObj[];
    images:imagesObj[];
    image:imagesObj;
}

export interface productsRes {
    products:productObj[]
  }


export interface singleProductRes{
    product:productObj
}