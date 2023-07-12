import './Footer.css'
import Logo from '../img/Logo3.png'


export default function Footer() {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <p className="footer-links">
                        <a href='' className="mt-2 items-footer">Inicio</a>
                        <br />
                        <a href='' className="mt-2 items-footer">Catalogo</a>
                        <br />
                        <a href='' className="mt-2 items-footer">Contacto</a>
                        <br />
                        <a href='' className="mt-2 items-footer">Login</a>
                    </p>
                </div>
                <div className="footer-right">
                    <div className="mapa-footer mt-2" action="#" method="post">
                        <img loading='lazy' width={300} height={300} src={Logo} alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}
