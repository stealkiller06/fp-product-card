import React from 'react'
import renderer from 'react-test-renderer'
import ProductCard, { ProductImage } from '../../src/components'
import { product2 } from '../data/product'

describe("ProductImage", ()=>{

    it("debe mostrar la imagen pasada por parametro",()=>{
        const wrapper = renderer.create(
            <ProductImage img={product2.img} />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    it("debe mostrar la imagen del context", ()=>{
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {()=>(
                <ProductImage/>

                )}
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    
})