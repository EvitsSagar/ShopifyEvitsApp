import { baseApi } from "../../ApiServices/axiosBaseQuery";
import { productsRes,singleProductRes } from "./type.p";


export const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getAllproduct: build.query<productsRes, void>({
            query: () => ({
                method:'GET',
                url: '/products.json',
            }),
        }),

        getSingleProduct:build.query<singleProductRes,{productId:string}>({
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
