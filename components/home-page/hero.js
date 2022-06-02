import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero.jpg"
          alt="image"
          width={300}
          height={300}
        />
      </div>
      <h1>Greetings</h1>
      <p>My NextJS blog</p>
    </section>
  );
}

export default Hero;
