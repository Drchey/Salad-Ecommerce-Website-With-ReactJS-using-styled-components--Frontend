import React from 'react';
import{
    ProductsContainer, ProductsHeading, ProductsWrapper,
    ProductsCard, ProductsImg, ProductsInfo,
    ProductsName,ProductsDesc,ProductsPrice,ProductsBtn
} from './ProductsElements';

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {data.map((product, index)=>{
                    return(
                        <ProductsCard key ={index}>
                            <ProductsImg src={product.img} alt={product.alt}/>
                            <ProductsInfo>
                                <ProductsName>{product.name}</ProductsName>
                                <ProductsDesc>{product.desc}</ProductsDesc>
                                <ProductsPrice>{product.price}</ProductsPrice>
                                <ProductsBtn>{product.button}</ProductsBtn>
                            </ProductsInfo>
                        </ProductsCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>

    
            
        
    )
}

export default Products;
