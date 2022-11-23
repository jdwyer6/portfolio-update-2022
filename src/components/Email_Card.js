import { Link } from "react-router-dom";

const Email_Card = ({title, previewLink, codeLink, figmaLink, image}) => {
    return ( 

        <div style={{boxShadow:'2px 2px 5px rgba(0, 0, 0, .2)', borderRadius: '12px', padding: '1rem', backgroundColor: '#F5F5F5'}}>
            <div className='text-center my-2'>
                <h3 className="mb-0" style={{lineHeight: '3.5rem'}}>{title}</h3>
                <div className='text-center d-flex justify-content-around flex-wrap mb-3'>
                    <p className='px-2'>Responsive</p>
                    <p className='px-2'>Accessible</p>
                    <p className='px-2'>Dark/Light Mode</p>
                </div>
            </div>
            <img src={image} style={{borderRadius: '12px', boxShadow:'2px 2px 5px rgba(0, 0, 0, .2)'}} width='100%'/>
            <div className='d-flex justify-content-around flex-wrap mt-4 mb-3'>
                <a onClick={previewLink} className='my-2' target="_blank"><button className="btn-primary h4-bold">Preview</button></a>
                <a href={codeLink} className='my-2' target="_blank"><button className="h4-bold btn-primary">Code</button></a>
                <a href={figmaLink} className='my-2' target="_blank"><button className="h4-bold btn-primary">Figma</button></a>
            </div>

        </div>


     );
}
 
export default Email_Card;