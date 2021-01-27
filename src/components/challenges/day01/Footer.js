const Footer = () => {

  let year = new Date().getFullYear();

  return(
    /* The contents must have one parent but it can be just a "dummy" element as a container*/
    <>
      <div class="footer">
        <span class="copyright">Steve Emerson {year}</span>
        <span class="copyright">"Not all who wander are lost."</span>
      </div>
      
    </>

  )
};

export default Footer;