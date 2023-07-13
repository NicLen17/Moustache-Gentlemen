import Foto from '../img/FotoFede.jpeg';
import FotoLocal from '../img/FotoCarro4.jpg';
import './CardContact.css';

function CardContact() {
    return (
        <div id='contacto' className='Card-container'>
            <div className='Card-contact'>
                <section className='Contact-right'>
                    <img src={Foto} alt="" />
                </section>
                <section className='Contact-left'>
                    <a href="https://wa.me/5493813638992?text=Hola%20,%20tengo%20una%20consulta%20." target='blank'><img src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=1dcd3b" alt="Icono de Whatsapp de Moustache Gentlemen" /></a>
                    <div>
                        <h4>+54 9 3813 63-8992</h4>
                        <a href="https://wa.me/5493813638992?text=Hola%20,%20tengo%20una%20consulta%20." target='blank'><button>Contactar</button></a>
                    </div>
                </section>
            </div>
            <div className='Card-contact'>
                <section className='Contact-right'>
                    <img src={FotoLocal} alt="" />
                </section>
                <section className='Contact-left'>
                    <a target='blank' href="https://www.instagram.com/moustache_gentlemen/"><img src="https://icongr.am/fontawesome/instagram.svg?size=128&color=ff24f8" alt="Icono de Instagram de Moustache Gentlemen" /></a>
                    <div>
                        <h4>@moustache_gentlemen</h4>
                        <a target='blank' href='https://www.instagram.com/moustache_gentlemen/'><button>Contactar</button></a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CardContact