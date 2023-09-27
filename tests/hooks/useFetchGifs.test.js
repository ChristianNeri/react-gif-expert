import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs.js", () => {
  test("Debe de regresar el estado incial", () => {
    const { result } = renderHook(() => useFetchGifs("Demon Slayer"));

    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
    // useFetchGifs()
  });

  test('Debe de retornar un arreglo d eimagenes y isLoading en flase', async() => { 
    
    const { result } = renderHook(() => useFetchGifs("Demon Slayer"));

    await waitFor(
        () => expect( result.current.images.length ).toBeGreaterThan(0),
        
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();

   })
});
