import './Footer.css';

const Footer = () => {
  return (

    <div className="footer">

    <div class="row">

      <div class="column-founders">
        A Message From The Founders
        <br></br>
        <br></br>
        "To live and survive, we have to buy goods and services. It should be easy to find 
        and support businesses that not only support but align themselves
         with community ethics. 

        
        
        We founded JustCorpz so we could
        work together to ensure our time and money is going to the right places." 
        <br></br>
        <br></br>
        - Tori & Sav
      </div>
     
      <div class="column-links">
          <h3>Links</h3>
          <br></br>
          <ul className="footerSocial">
          <a href="#"> About </a>
          <br></br>
          <a href="#"> Contact </a>
          <br></br>
          <a href="#"> Volunteer </a>
          <br></br>
          <a href="#"> Support us </a>

          </ul>
      </div>

     
      <div class="column-social">

          <h3>Social Media</h3>
          <br></br>

          <ul className="footerSocial">

            <a href="#"> Tik Tok </a>
            <br></br>
            <a href="#"> Instagram </a>
            <br></br>
            <a href="#"> Linkedin </a>

          </ul>



          <ul>
          <img src="https://res.cloudinary.com/purcella/image/upload/v1663649539/justcorpz/Screen_Shot_2022-09-19_at_9.49.53_PM_tab3dc.png" alt="Girl in a jacket" width="50em" height="60em"> 
          </img>
          <img src="https://res.cloudinary.com/purcella/image/upload/v1663649539/justcorpz/Screen_Shot_2022-09-19_at_9.50.32_PM_fcnauj.png" alt="Girl in a jacket" width="50em" height="60em"> 
          </img>
          <img src="https://res.cloudinary.com/purcella/image/upload/v1663649539/justcorpz/Screen_Shot_2022-09-19_at_9.49.32_PM_lc2je1.png" alt="Girl in a jacket" width="50em" height="60em"> 
          </img>
          </ul>

      </div>
    </div>

    </div>
  );
};

export default Footer;
