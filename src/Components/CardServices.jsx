import './CardServices.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardServices() {
    return (
        <>
            <h1 className='Tittle'>Servicios</h1>
            <div id="servicios" className='Cards-services'>
                <Card className='Card-services-individual'>
                    <Card.Img variant="top" src="https://estilando.com/wp-content/uploads/2022/02/125-Best-Haircuts-For-Men-2022-Cuts-Styles.jpg" />
                    <Card.Body>
                        <Card.Title> <h3>Corte de pelo</h3> </Card.Title>
                        <a href="https://wa.me/5493813638992?text=Hola%20,%20tengo%20una%20consulta%20sobre%20el%20primer%20estilo." target='blanck'><Button variant="warning" style={{fontWeight:"bold"}}>Consultar</Button></a>
                    </Card.Body>
                </Card>
                <Card className='Card-services-individual'>
                    <Card.Img variant="top" src="https://i.pinimg.com/474x/40/68/6c/40686c29012be720d55b93ede979128d.jpg" />
                    <Card.Body>
                        <Card.Title> <h3>Corte de pelo y barba</h3> </Card.Title>
                        <a href="https://wa.me/5493813638992?text=Hola%20,%20tengo%20una%20consulta%20sobre%20el%20segundo%20estilo." target='blanck'><Button variant="warning" style={{fontWeight:"bold"}}>Consultar</Button></a>
                    </Card.Body>
                </Card>
                <Card className='Card-services-individual'>
                    <Card.Img variant="top" src="https://t2.uc.ltmcdn.com/es/posts/7/5/8/undercut_42857_1_600.webp" />
                    <Card.Body>
                        <Card.Title> <h3>Corte de pelo + Lavado de cabeza</h3> </Card.Title>
                        <a href="https://wa.me/5493813638992?text=Hola%20,%20tengo%20una%20consulta%20sobre%20el%20tercer%20estilo." target='blanck'><Button variant="warning" style={{fontWeight:"bold"}}>Consultar</Button></a>
                    </Card.Body>
                </Card>
                <Card className='Card-services-individual'>
                    <Card.Img variant="top" src="https://img.freepik.com/fotos-premium/corte-pelo-arreglado-barba-estilo-generar-ai_98402-12514.jpg" />
                    <Card.Body>
                        <Card.Title> <h3>Corte de pelo y barba + lavado</h3> </Card.Title>
                        <a href="https://wa.me/5493813638992?text=Hola%20,%20tengo%20una%20consulta%20sobre%20el%20tercer%20estilo." target='blanck'><Button variant="warning" style={{fontWeight:"bold"}}>Consultar</Button></a>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default CardServices
