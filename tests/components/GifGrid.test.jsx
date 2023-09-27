import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid.jsx', () => {

    const category = 'Demon Slayer';

    test(' Debe de mostrar el loading inicialmente', () => {


        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    });

    test(' Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Demon Slayer',
                url: 'https://localhost/demonSlayer'
            },
            {
                id: '123',
                title: 'Resident Evil',
                url: 'https://localhost/residentedelmal'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />);
        expect( screen.getAllByRole('img').length ).toBe(2);

        // screen.debug();
    })
})