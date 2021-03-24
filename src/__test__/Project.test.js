import React from 'react';
import { mount, shallow } from 'enzyme';
import Project from '../components/Project'


const match = { params: { id: 0 } }

describe("Renders Project component without crashing", () => {
    it('Renders Project', () => {
        mount(<Project match={match} />)
    })
})