import React from 'react';
import {Link} from 'react-router';

const About = React.createClass({
  render: function(){
    return(
      <div>
      <img className='groupPic' src="/app/images/group2.jpg" />
      <p>We are students at General Assembly, studying web development. We wanted to create an app specifically for brunch in different neighborhoods in manhattan. Figuring out a great brunch place is always difficult so we wanted to make searching for brunch an easier process. Neighborhood search and filters should give the user a good understanding of the type of brunch restaurants are offering. Enjoy!</p>

      </div>
    );
  }
});


export default About;
