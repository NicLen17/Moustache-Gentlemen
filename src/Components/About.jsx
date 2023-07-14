import './About.css'
import Logo from '../img/Logo3.png'

function About() {
    return (
        <div id='about' className='About-container'>
            <section className='About-logo'>
                <img src={Logo} alt="Logo del local moustache gentlemen" />
            </section>
            <section className='About-text'>
                <h1>Moustache Gentlemen</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.sumenda anm. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus nobis ab vel debitis. Eum dolorum adipisci nam aspernatur repellat vero expedita quos explicabo nulla. Quisquam impedit officia quam. Ipsum.</p>
            </section>
        </div>
    )
}

export default About