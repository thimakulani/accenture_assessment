import the_olympian from '../assets/olympian.jpeg'
import skhokho from '../assets/skhokho.jpeg'
import saving_jar from '../assets/dragon.jpeg'
const Cases =()=>{
    return(
      <div className='services_container'>
          <section className="case-container">
              <section className="bottom-img-text">
                  <img className='img-object'/><p id='cases'>Case studies</p>
              </section>
          </section>
          <section className='img_list'>
              <ImageCard image={the_olympian} title='The Olympian' message='The only athlete in the world to do her Olympic routine in 2020.' />
              <ImageCard image={saving_jar} />
              <ImageCard image={skhokho} />
          </section>

      </div>
    );
}
export default Cases;

function ImageCard(props) {
    return (
        <div className="image-card">
            <img src={props.image} alt="Card" className="card-image" />
            <div className="case-card-content">
                <h3 className="case-card-title">{props.title}</h3>
                <p className="card-message">{props.message}</p>
            </div>
        </div>
    );
}