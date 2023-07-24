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
                <ul>
                    <li>Cuidar de sí mismo no es un gasto es una inversión.</li>
                    <li>Deja que tu pelo hable por tí.</li>
                    <li>No hay nada que una buenas manos y unas tijeras no puedan arreglar.</li>
                    <li>La vida es demasiado corta para llevar un pelo aburrido.</li>
                </ul>
            </section>
        </div>
    )
}

export default About