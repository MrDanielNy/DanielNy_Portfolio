import styled from 'styled-components'

export const LayoutWrapper = styled.div`
    display: grid;
    width: 100vw;
    height: 100%;    
    grid-template-areas: "nav nav"
                        "heroinfo heroimage"
                        "services services"
                        "jobsection jobsection"
                        "footer footer";
    grid-template-columns: auto auto;

    /*grid-template-columns: repeat(14, minmax(1rem, auto));
    grid-template-rows: 2rem 20rem auto;*/

@media screen and (min-width: 992px) {
    display: grid;
    width: 100vw;
    grid-template-areas:"nav nav"
                        "herowrapper herowrapper"
                        "services services"
                        "jobsection jobsection"
                        "projectsection projectsection"
                        "blogsection blogsection"
                        "footer footer";
    grid-template-columns: auto auto;
}
`;