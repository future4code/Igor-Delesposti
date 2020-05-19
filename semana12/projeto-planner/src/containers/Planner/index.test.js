import React from 'react'
import { Background, Container, Options, TaskCards, Title, InfoBox } from './index'
import renderer from 'react-test-renderer'



test("Testando styled do Background", () => {
    //preparaca e execucao
    const newSnapShot = renderer.create(<Background />).toJSON();

    //verificacao
    expect(newSnapShot).toMatchSnapshot();

})

test("Testando styled do Container", () => {
    //preparaca e execucao
    const newSnapShot = renderer.create(<Container />).toJSON();

    //verificacao
    expect(newSnapShot).toMatchSnapshot();

})

test("Testando styled do Options", () => {
    //preparacao e execucao
    const newSnapShot = renderer.create(<Options/>).toJSON();

    //verificacao
    expect(newSnapShot).toMatchSnapshot();
})

test("Testando styled do TaskCards", () => {
    //preparacao e execucao
    const newSnapShot = renderer.create(<TaskCards/>).toJSON();

    //verificacao
    expect(newSnapShot).toMatchSnapshot();
})

test("Testando styled do Title", () => {
    //preparacao e execucao
    const newSnapShot = renderer.create(<Title/>).toJSON();

    //verificacao
    expect(newSnapShot).toMatchSnapshot();
})

test("Testando styled do InfoBox", () => {
    //preparacao e execucao
    const newSnapShot = renderer.create(<InfoBox/>).toJSON();

    //verificacao
    expect(newSnapShot).toMatchSnapshot();
})