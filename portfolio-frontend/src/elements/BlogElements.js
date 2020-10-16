import styled from 'styled-components'
import Image from 'gatsby-image'

export const BlogWrapper = styled.section`
display: grid;
grid-area: blogsection;

p {
  margin-bottom: 0;
  font-weight: bold;
  color: var(--clr-grey-5);
}

p:first-of-type {
  display: inline-block;
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
}
`;

export const BlogCenter = styled.div`
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  } 
`;

export const BlogImage = styled(Image)`
  //Image is hidden on smaller screensizes
  display: none;

  @media screen and (min-width: 576px) {
    height: 17.5rem;
  }
  @media screen and (min-width: 850px) {
    height: 13.75rem;
  }
  //Display on big screensizes
  @media screen and (min-width: 992px) {
    display: block;
    grid-row: 1/1;
    grid-column: 6/-1;
  }
`;

export const BlogItem = styled.article` 
  display: block;
  margin-bottom: 2rem;
  margin-left: 1rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition); 

  &:hover {
  box-shadow: var(--dark-shadow);
  transform: scale(1.02);
  }
`;

export const BlogCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  
  h4 {
    color: black;
    margin-top: 0.5rem;
  }
`;

export const ButtonCenter = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;

`;

/*.blog { OK
  display: block;
  margin-bottom: 2rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
}
.blog:hover { OK
  box-shadow: var(--dark-shadow);
  transform: scale(1.02);
}
.blog article {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}
.blog-card {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.blog-img {
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 15rem;
}
.blog-card {
  padding: 1.5rem 1rem;
}
.blog-card h4 {
  color: var(--clr-grey-1);
}

.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */