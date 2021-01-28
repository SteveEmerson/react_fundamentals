import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink
} from 'reactstrap';

 const HelloWorld = () => {
   return(
    <div className="card">
      <Card>
        <CardImg top width="100%" src="https://steveemerson.github.io/Studio-Ghibli-Data/assets/images/ghibli-random/kaguyahime010.jpg" id = "ghib-thumb" alt="GhibliApp" />
        <CardBody>
          <CardTitle tag="h5">Studio Ghibli API</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> The World of Studio Ghibli </CardSubtitle>
          <CardText>
            Select a film and explore the characters, places, and creatures.
          </CardText>
          <CardLink href="https://steveemerson.github.io/Studio-Ghibli-Data/" target="_blank" rel="noopener noreferrer">Ghibli</CardLink>
        </CardBody>
      </Card>
    </div>
   );
 }

 export default HelloWorld;