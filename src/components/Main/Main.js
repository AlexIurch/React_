import './Main.css'


function Main() {
    return (
      <div className='mainBlock'>
       <div className="infoBlock">
        <h5 className='frontEd'>FRONT-END DEVELOPER</h5>
        <h1>Hello. I am looking for new <span className="colorText"> challenges</span> and interesting <span className="colorText">projects</span></h1>
        <h6>Full-cycle designing and creating beautiful digital products, brends and expiriences. </h6>
       </div>
       <div className="projectCardsBlock">
        <div className="projectCard block1"></div>
        <div className="projectCard block2"></div>
        <div className="projectCard block3"></div>
        <div className="projectCard block4"></div>
        <div className="projectCard block5"></div>
        <div className="projectCard block6"></div>
       </div>
      </div>
    );
  }
  
  export default Main;