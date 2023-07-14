import './Footer.css'
import Logo from '../img/Logo3.png'


export default function Footer() {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <p className="footer-links">
                        <a href='#inicio' className="mt-2 items-footer">Inicio</a>
                        <br />
                        <a href='#contacto' className="mt-2 items-footer">Contacto</a>
                        <br />
                        <a href='#servicios' className="mt-2 items-footer">Servicios</a>
                        <br />
                        <a href='#about' className="mt-2 items-footer">About</a>
                    </p>
                </div>
                <div className="footer-right">
                        <img loading='lazy' width={300} height={300} src={Logo} alt="" />
                </div>
            </footer>
        </div>
    )
}
