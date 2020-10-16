import styled from 'styled-components'

export const LayoutWrapper = styled.div`
    display: grid;
    width: 100vw;
    height: 100%;   
    grid-template-areas:"herowrapper"
                        "services"
                        "jobsection"
                        "projectsection"
                        "blogsection"
                        "footer";
    

    /*grid-template-columns: repeat(14, minmax(1rem, auto));
    grid-template-rows: 2rem 20rem auto;*/

@media screen and (min-width: 768px) {
    display: grid;
    width: 100vw;
    grid-template-areas:"herowrapper herowrapper"
                        "services services"
                        "jobsection jobsection"
                        "projectsection projectsection"
                        "blogsection blogsection"
                        "footer footer";
    grid-template-columns: auto auto;
}
`;