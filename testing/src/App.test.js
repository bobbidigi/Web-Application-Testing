import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup)

test('striker', () => {
   const wrapper = rtl.render(<App/>)
   // const el = wrapper.getByText(/the strike zone/i)
   const strike = wrapper.getByText('strike')
   fireEvent.click(getByText('strike'), 2)
   // expect(strike).toBeVisible()

})


