import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink
} from 'reactstrap';

 const HelloWorld = function() {
   return(
    <div className="card">
      <Card>
        <CardImg top width="100%" src="https://raw.githubusercontent.com/SteveEmerson/NY-Times-Archive-Search/main/images/NYTThumb.PNG " alt="NYTimesSearchThumb" />
        <CardBody>
          <CardTitle tag="h5">NYTimes Article Search</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"> See the world a month at a time </CardSubtitle>
          <CardText>
            Choose a month and year to see the twenty most common topics in the New York times for the month.
          </CardText>
          <CardLink href="https://steveemerson.github.io/NY-Times-Archive-Search/" target="_blank" rel="noopener noreferrer">NYT Search</CardLink>
        </CardBody>
      </Card>
    </div>
   );
 }

 export default HelloWorld;