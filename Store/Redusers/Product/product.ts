import { baseApi } from "../../ApiServices/axiosBaseQuery";
import { productsRes,productObj } from "./type.p";


export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getAllproduct: build.query<productsRes, void>({
            query: () => ({
                method:'GET',
                url: '/products.json',
            }),
        }),

        getSingleProduct:build.query<productObj,{productId:string}>({
            query:({productId}) =>({
                method:'GET',
                url:`/products/${productId}.json`,
            })
        })
    }),
});



export const { 
    useGetAllproductQuery,
    useGetSingleProductQuery,
 } = productApi;
