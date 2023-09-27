import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas a GifItem.jsx', () => { 

    const title = 'Demon Slayer';
    const url = 'https://google.com/';
    test('debe de hacer match con el snapshot', () => { 
        
        const { contaier } = render( <GifItem title={title} url={ url }/> );
        expect( contaier ).toMatchSnapshot();
     })

     test(' Debe mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render( <GifItem title={ title } url={ url } /> )
        // expect( screen.getByRole('img').src ).toBe(url)
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

      })

      test('Debe de mostrar el titulo en el componente', () => { 
        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title ) ).toBeTruthy();

       })
 })