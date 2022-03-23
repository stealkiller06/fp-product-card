import React from 'react'
import renderer from 'react-test-renderer'
import ProductCard, {ProductTitle} from '../../src/components'
import {product1} from '../data/product'
describe('ProductTitle', ()=>{
    it("debe mostrar el componente correctamente con el titulo personalizado",()=>{
        const wrapper =  renderer.create(
            <ProductTitle title='custom product' className='custom-class'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    });

    it("debe de mostrar el componente con el nombre del producto", ()=>{
        const wrapper =  renderer.create(
            <ProductCard product={product1}>
                {()=>(
                    <ProductTitle/>
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })
})