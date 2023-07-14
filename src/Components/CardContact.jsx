import Foto from '../img/FotoFede.jpeg';
import './CardContact.css';

function CardContact() {
    return (
        <>
        <h1 className='Tittle'>Contacto</h1>
        <div id='contacto' className='Card-container'>
            <div className='Card-contact'>
                <section className='Contact-right'>
                    <img src="https://fotografias.lasexta.com/clipping/cmsimages01/2022/08/09/A1BBC7E3-3F9B-46DE-B89C-B8B16D937F52/whatsapp_98.jpg?crop=1300,731,x0,y19&width=1900&height=1069&optimize=high&format=webply" alt="" />
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
                    <img src={Foto} alt="" />
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
        </>
    )
}

export default CardContact