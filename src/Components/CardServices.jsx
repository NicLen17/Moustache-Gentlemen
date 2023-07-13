import './CardServices.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardServices() {
    return (
        <div id="servicios" className='Cards-services'>
            <Card className='Card-services-individual'>
                <Card.Img variant="top" src="https://estilando.com/wp-content/uploads/2022/02/125-Best-Haircuts-For-Men-2022-Cuts-Styles.jpg" />
                <Card.Body>
                    <Card.Title> <h3>Corte 1</h3> </Card.Title>
                    <Button variant="warning">Consultar</Button>
                </Card.Body>
            </Card>
            <Card className='Card-services-individual'>
                <Card.Img variant="top" src="https://assets.theyou.com/public/thumbs/work_elements/7118/jpg/w1330/h1330/q80/7118/work_elements/October2020/for-colorful-hair-marine-haircut-for-men-water.jpg" />
                <Card.Body>
                    <Card.Title> <h3>Corte 2</h3> </Card.Title>
                    <Button variant="warning">Consultar</Button>
                </Card.Body>
            </Card>
            <Card className='Card-services-individual'>
                <Card.Img variant="top" src="https://t2.uc.ltmcdn.com/es/posts/7/5/8/undercut_42857_1_600.webp" />
                <Card.Body>
                    <Card.Title> <h3>Corte 3</h3> </Card.Title>
                    <Button variant="warning">Consultar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardServices