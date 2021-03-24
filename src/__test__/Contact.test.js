import React from 'react';
import { mount, shallow } from 'enzyme';
import Contact from '../components/Contact'

const wrapper = mount(<Contact />)

describe('Contact Component renders a Form', () => {
    it('Form Renders', () => {
        const value = wrapper.find('form')
        expect(value).toHaveLength(1)
    })
    it('Form Renders three inputs', () => {
        const value = wrapper.find('input')
        // console.log(value.debug());
        expect(value).toHaveLength(4)
    })
})

describe.skip('Form Input Takes input', () => {
    it('Form takes user input', () => {
        const value = wrapper.find('form').length
        // .simulate('change', {
        //     target: { value: 'blah blah' }
        // })

        console.log(value)
        // wrapped.update();

        // expect(wrapped.find('textarea').prop('value')).toEqual('blah blah');
    })
})