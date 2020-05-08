import { shallow } from 'enzyme'
import React from 'react'
import { Container, Select } from './index'
import renderer from 'react-test-renderer'




test("Testando styled do Container",()=>{
    //preparacao e execucao

     const newSnapShot = renderer.create(<Container />).toJSON()

    //verificacao
    expect(newSnapShot).toMatchSnapshot();
})

test("Testando o styled do Select", ()=>{
    //preparacao e execucao
    const newSnapShot = renderer.create(<Select />).toJSON()
    //verificacao

    expect(newSnapShot).toMatchSnapshot();
})





