import web_dev_icon from '../assets/img.png'
import ux_icon from '../assets/img_1.png'
import app_dev_icon from '../assets/img_2.png'
import blockchain_icon from '../assets/img_3.png'
const Services =()=>{
    return (
        <div className="services_container">
            <section className="top-panel">
                <section className="content">
                    <h1>Live with Confidence</h1>
                    <p>Jose Mourinho brings confidence to pan-African Sanlam campaign</p>
                    <button>View project</button>
                </section>
            </section>

            <section className="bottom-panel">
                <section className="bottom-img-text">
                    <img className='img-object'/><p id='we_do'>What we do</p>
                </section>
                <p id="we_offer" >We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</p>

            </section>
            <section className='services_list' >
                <Card icon={web_dev_icon} title="Web development" description="We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions." />
                <Card icon={ux_icon} title="User experience  & design" description="Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business." />
                <Card icon={app_dev_icon} title="Mobile app development" description="Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients." />
                <Card icon={blockchain_icon} title="Blockchain solutions" description="We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals." />
            </section>
        </div>
    )
}
export default Services;

function Card(props) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-icon">
                    <img src={props.icon} alt="Icon" />
                </div>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}