import React from 'react';
import Text from '../text/Text';
import Title from '../text/Title';
import classes from './About.module.scss';

function About() {
  return (
    <div className={classes.about}>
      <Title className={classes.title}>Always Eat Balance Diet!!</Title>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laboriosam, voluptatem provident alias voluptates necessitatibus voluptas nam suscipit quae ipsum sed repellendus quam maxime illum, minima beatae ipsam sunt repellat!
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit consequatur vitae architecto aliquam doloribus, consectetur dicta expedita, excepturi repudiandae delectus similique ex quis assumenda. Error quibusdam, accusamus atque omnis sapiente rerum pariatur suscipit, autem non eveniet adipisci fuga labore quidem excepturi debitis? Alias quo architecto, fuga vero tempore sequi!
      </Text>
    </div>
  );
}

export default About;
