// really want to rework this entire page. Its not cool enough and does not display the work in a flattering way. Not sure how to format it all. 
//Translate horizontal ***
import "./works.css";

function Works() {
  return (
    <>
      {/* WEB DEV SECTION */}
      <section className="works-header-section">
        <h1 className="works-header">WEB DEVELOPMENT</h1>
      </section>
      <div className="works-Container-Web">
      
        <img
          className="work-example-web"
          src="/HueAi.jpg"
          alt="WebpageExample"
        ></img>
     
      
      

        <img
          className="work-example-web"
          src="/SolarCompany.jpg"
          alt="WebpageExample"
        ></img>
        
      </div>

      
      {/* WEB DEV SECTION END*/}

      {/* PHOTOGRAPHY SECTION */}
      <section className="works-header-section">
        <h1 className="works-header">PHOTOGRAPHY</h1>
      </section>
      <div className="works-Container-Images">
        {" "}
        <img
          className="work-example-photography"
          src="/009.jpg"
          alt="WebpageExample"
        ></img>
        <img
          className="work-example-photography"
          src="/HOODIE_FILM_001.jpg"
          alt="WebpageExample"
        ></img>
        <img
          className="work-example-photography"
          src="/005.jpg"
          alt="WebpageExample"
        ></img>
      </div>
      {/* PHOTOGRAPHY SECTION END*/}
      <section className="works-header-section">
        <h1 className="works-header">GRAPHIC DESIGN</h1>
      </section>
      <div className="works-Container-Images">
      <img
          className="work-example-graphics"
          src="/DeafApe.jpg"
          alt="GraphicDesignExample"
        ></img>
        <img
          className="work-example-graphics"
          src="/thomasthevegan.jpg"
          alt="GraphicDesignExample"
        ></img>
        <img
          className="work-example-graphics"
          src="/DEAF_LOGO.jpg"
          alt="GraphicDesignExample"
        ></img>
</div>

<div className="works-Container-Images">
      <img
          className="hoodie_progress"
          src="/hoodie_progress.jpg"
          alt="InfiniteUgly Hoodie Example"
        ></img>
        <img id="likeusImg"
          
          src="/likeus2.jpg"
          alt="Like button Example"
        ></img>
        <img
          className="work-example-graphics"
          src="/DEAF_FACES.jpg"
          alt="GraphicDesignExample"
        ></img>
</div>
    </>
  );
}

export default Works;
