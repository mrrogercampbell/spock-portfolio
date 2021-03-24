import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';
import Home from './components/Home'
import Project from './components/Project'
import Contact from './components/Contact'




describe('Renders App component without crashing', () => {
    it('Renders App', () => {
        let wrapper = shallow(<App />)

        expect(wrapper.exists()).toBe(true)
    })

    it('Renders Home component without crashing', () => {
        let wrapper = shallow(<Home />)
        expect(wrapper.exists()).toBe(true)
    })
    it('Renders Home component without crashing', () => {
        let wrapper = shallow(<Contact />)
        expect(wrapper.exists()).toBe(true)
    })
})


describe('Clicking Route Links render correct component based on path', () => {
    it("Project Route is functional", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/project/1']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(Project)).toHaveLength(1)
    })
    it("Contact Route is functional", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/contact/']}>
                <App />
            </MemoryRouter>
        );
        expect(wrapper.find(Contact)).toHaveLength(1)
    })
})