import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium, veritatis tenetur
        tempore esse modi beatae ab tempora quod laborum vitae! In voluptates eveniet distinctio
        odit nemo. Incidunt tenetur dolorum, odio, iusto eveniet deleniti rerum consequatur
        praesentium nam, ullam cupiditate culpa consequuntur nobis omnis delectus! Velit eius
        consectetur doloribus modi reprehenderit, aut blanditiis? Dolorum, magnam et id deleniti
        consequuntur eos veniam commodi obcaecati, at accusantium tempora accusamus! Esse adipisci
        exercitationem earum, fugiat quisquam deserunt voluptate. Consequuntur, veritatis unde.
        Dolores illum blanditiis necessitatibus ad minus, ipsam illo odio minima ullam. Minima
        adipisci quisquam laboriosam est aliquid ab at. Natus aliquid dolorum porro voluptatem
        debitis, quidem nostrum veritatis perferendis, laborum nemo dignissimos delectus amet
        laboriosam consequatur, ea similique. Fugiat perferendis harum sint officia tempore, eos cum
        dolorem? Magni quisquam temporibus ipsum porro pariatur sint eos, voluptas tempore. Culpa
        exercitationem, temporibus asperiores similique hic quia voluptas quae a sunt possimus?
        Reprehenderit dolorum sequi modi quis, optio officiis hic libero nulla blanditiis corporis
        incidunt aliquam corrupti dolores perspiciatis labore sint mollitia minus cumque repudiandae
        consectetur temporibus pariatur? Debitis mollitia, culpa delectus earum minus ipsum nisi
        temporibus libero quae et esse alias repellendus asperiores ipsa natus quaerat praesentium
        sapiente. Quia impedit unde repudiandae recusandae reprehenderit.
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Обратно к списку дел
      </button>
    </>
  );
};

export default AboutPage;
