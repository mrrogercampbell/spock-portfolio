import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from '../components/Footer'


describe("Footer component renders with out crashing", () => {
    it('Renders Footer', () => {
        shallow(<Footer />)
    })
})