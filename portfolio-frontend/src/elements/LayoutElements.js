import styled from 'styled-components'

export const LayoutWrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;    
    grid-template-areas: "nav nav"
                        "heroinfo heroimage"
                        "footer footer";
    grid-template-columns: auto 1fr;

    /*grid-template-columns: repeat(14, minmax(1rem, auto));
    grid-template-rows: 2rem 20rem auto;*/

@media screen and (min-width: 992px) {
    display: grid;
    width: 100vw;
    height: 100%;    
    grid-template-areas: " nav "
                        "heroinfo heroimage"
                        "footer footer";
    grid-template-columns: auto 1fr;
}
`;