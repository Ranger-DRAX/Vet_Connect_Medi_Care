import React from "react";
import { useNavigate } from "react-router-dom";
import "./PetCard.css";

const PetCard = ({ pet }) => {
  const navigate = useNavigate();
  const isShelterListing = pet?.owner?.userType === "Shelter";

  const handleAdoptClick = () => {
    navigate('/adoption-form', { state: { pet } });
  };

  return (
    <div className="pet-card">
      <div className="image-container">
        <img 
          src={`http://localhost:5000${pet.image}`} 
          alt={pet.name} 
          className="pet-image" 
        />
        {isShelterListing && (
          <div className="verified-badge" title={`${pet.owner.shelterName}, ${pet.owner.shelterLocation}`}>
            ✅
          </div>
        )}
      </div>
      <div className="pet-details">
        <h3 className="pet-name">{pet.name.toUpperCase()}</h3>
        <p><strong>Pet Type:</strong> {pet.type}</p>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Age:</strong> {pet.age} Years</p>
        <p><strong>Status:</strong> {pet.status}</p>
        <p><strong>Location:</strong> {pet.location}</p>
        <p><strong>Amount:</strong> Tk {pet.amount?.toLocaleString()}</p>

        <div className="button-wrapper">
          <button className="adopt-btn" onClick={handleAdoptClick}>Adopt Me</button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
