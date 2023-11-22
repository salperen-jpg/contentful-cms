import heroImg from "../assets/feedback.svg";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='banner'>
        <div className='info'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut velit
            eligendi maiores quam vitae ad, saepe architecto nam. Quidem, omnis.
          </p>
        </div>
        <img src={heroImg} alt='' />
      </div>
    </section>
  );
};
export default Hero;
