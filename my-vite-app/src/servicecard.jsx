const ServiceCard = ({ title, description }) => {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;