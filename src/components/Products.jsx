import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductsData=[
    {
     id:1,
     img:"shop1.jpg",
     title:"Women Ethnic",
     color:"white",
     rating:5.0,
     aosDelay:'0',
     

    },
    {
     id:2,
     img:"shop2.jpg",
     title:"Women Ethnic",
     color:"red",
     rating:5.0,
     aosDelay:'0'

    },
    {
     id:3,
     img:"shop3.jpg",
     title:"Women Ethnic",
     color:"green",
     rating:5.0,
     aosDelay:'0'

    },
    {
     id:4,
     img:"shop4.jpg",
     title:"Women Ethnic",
     color:"yellow",
     rating:5.0,
     aosDelay:'0'

    },
    {
     id:5,
     img:"shop2.jpg",
     title:"Women Ethnic",
     color:"baige",
     rating:5.0,
     aosDelay:'0'

    }
]
function Products() {
  return (
    <div className="mt-14 mb-12 ">
      <div className="container ">
        {/* header section  */}
        <div className="text-center  mb-10 max-w-[600px] mx-auto ">
          <p className="text-sm text-primary "> Top Selling Products for you</p>
          <h1 className="text-3xl font-bold ">Products </h1>
          <p className="text-xs text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid
            enim blanditiis.
          </p>
        </div>
        {/* body section  */}
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
                {/* card section  */}
                {
                    // product card 
                    ProductsData.map(data => (
                        <div key={data.id}    className="space-y-3  shadow-lg rounded-lg ">
                         
                            
                                    <img src={`/imgs/${data.img}`} alt="" 
                                    className="h-[220px] w-[150px] object-cover rounded-md  "/>
                                    <div>
                                        <h3 className="font-semibold ">{data.title}</h3>
                                        <p className="text-sm text-gray-600 "> {data.color}</p>
                                        <div className="flex  items-center gap-1">
                                            <FaStar className="text-yellow-400 "/>
                                            <span>{data.rating}</span>

                                        </div>
                                       

                                    </div>

                            </div>
                    ))
                }

            </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
