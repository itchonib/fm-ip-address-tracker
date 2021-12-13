import './DetailsCard.css'

const DetailsCard = ({ipData}) => {
    return (
        <div className="card-details__wrapper">
            <div className="card-details__pair">
                <p className="card-details__label"> IP ADDRESS </p> 
                <h3 className="card-details__info"> {ipData.ip} </h3> 
            </div>
            <div className="card-details__pair">
                <p className="card-details__label"> LOCATION </p> 
                <h3 className="card-details__info"> {ipData.location.region}, {ipData.location.country} </h3> 
            </div>
            <div className="card-details__pair">
                <p className="card-details__label"> TIMEZONE </p> 
                <h3 className="card-details__info"> UTC {ipData.location.timezone} </h3> 
            </div>
            <div className="card-details__pair">
                <p className="card-details__label"> ISP </p> 
                <h3 className="card-details__info"> {ipData.isp} </h3> 
            </div>
        </div>
    )
}

export default DetailsCard
