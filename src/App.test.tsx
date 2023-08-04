import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('App.tsx', () => {
    it('should render blurb', () => {
        render(<App/>);
        const blurb = screen.getByText(/A simple Create React App created directly in TypeScript/i);
        expect(blurb).toBeInTheDocument();
    });

    it('should handle number input', () => {
        render(<App/>);
        const input = screen.getByRole('spinbutton');
        expect(input).toHaveValue(2);
        expect(screen.getByText(/1.414213/)).toBeInTheDocument();

        fireEvent.change(input, { target: {value: 1e4 }});
        expect(screen.getByText(/100/)).toBeInTheDocument();

        fireEvent.change(input, { target: {value: 3 }});
        expect(screen.getByText(/1.73205/)).toBeInTheDocument();
    });

    it('should render NaN for non-numeric input', () => {
        render(<App/>);
        const input = screen.getByRole('spinbutton');
        expect(input).toHaveValue(2);
        expect(screen.getByText(/1.414213/)).toBeInTheDocument();

        fireEvent.change(input, { target: {value: null }});
        expect(screen.getByText(/NaN/)).toBeInTheDocument();

        fireEvent.change(input, { target: {value: undefined }});
        expect(screen.getByText(/NaN/)).toBeInTheDocument();

        fireEvent.change(input, { target: {value: {} }});
        expect(screen.getByText(/NaN/)).toBeInTheDocument();

        fireEvent.change(input, { target: {value: [] }});
        expect(screen.getByText(/NaN/)).toBeInTheDocument();
    });
});