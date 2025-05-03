import React, { useState ,useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { EstimationContext } from '../contex/AppContex';
 


function Ajouter() {

    
    const { inputData, setInputData,addPrediction } = useContext(EstimationContext);
    const navigate = useNavigate();

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: name === 'name' ? value : isNaN(value) ? value : parseFloat(value),
        }));
    };

    

    const sendData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/prix/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputData),
            });
            const newPrediction = await response.json();
            addPrediction(newPrediction); // Ajouter la nouvelle prédiction à l'état
        } catch (error) {
            console.error("Erreur lors de l'envoi des données", error);
        }
            // vide les champs 
        setInputData({
            name: '',
            brand: 0,
            engine_size: 1.0,
            trasmission: 0,
            fuel: 0,
            years: new Date().getFullYear(),
            doors: 1,
            mileage: 0,
            owner: 1,
        });
        navigate("/")
    };
    
    

    return (
        <div className='w-full h-screen bg-[#F0F0F0]'>
            <div className='flex justify-center'>
                <div className='bg-white w-[750px] px-5 shadow-lg mt-8 shadow-black border-2 border-black pb-4'>
                    <h3 className='text-center uppercase text-2xl font-semibold text-blue-500 mt-4 mb-5'>
                        Predire Le prix de la voiture
                    </h3>
                    
                    <div className='flex gap-4 mb-3'>

                    <div className='flex flex-col gap-3'>
                            <label htmlFor="name" className='text-lg text-black font-semibold'>name:</label>
                            <input 
                                type="text" 
                                name='name' 
                                value={inputData.name} 
                               
                                onChange={inputEvent} 
                                className="px-4 py-1 border-2 border-black" 
                            />
                        </div>
                       
                        
                        <div className='flex flex-col'>
                            <label htmlFor="brand" className='text-lg text-black font-semibold'>Marque:</label>
                            <select name="brand" value={inputData.brand} onChange={inputEvent} className='border-black border-2 py-1 mt-1 px-6 w-[150px]'>
                                <option value="0">Kia</option>
                                <option value="1">Chevrolet</option>
                                <option value="2">Mercedes</option>
                                <option value="3">Audi</option>
                                <option value="4">Volkswagen</option>
                                <option value="5">Toyota</option>
                                <option value="6">Honda</option>
                                <option value="7">BMW</option>
                                <option value="8">Hyundai</option>
                                <option value="9">Ford</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label htmlFor="owner" className='text-lg text-black font-semibold'>Propriétaires:</label>
                            <input 
                                type="number" 
                                name='owner' 
                                value={inputData.owner} 
                               
                                onChange={inputEvent} 
                                className="px-4 py-1 border-2 border-black" 
                            />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label htmlFor="mileager" className='text-lg text-black font-semibold'>Kilométrage:</label>
                            <input 
                                type="number" 
                                name='mileager' 
                                value={inputData.mileager} 
                                min="1" 
                                onChange={inputEvent} 
                                className="px-4 py-1 border-2 border-black" 
                            />
                        </div>
                    </div>

                    <div className='flex gap-4 mb-3'>

                    <div className='flex flex-col'>
                            <label htmlFor="trasmission" className='text-lg text-black font-semibold mb-[9px]'>Boîte de vitesse:</label>
                            <select name="trasmission" value={inputData.trasmission} onChange={inputEvent} className='mt-1 py-1 px-4 border-black border-2'>
                                <option value="0">Manuelle</option>
                                <option value="1">Automatique</option>
                                <option value="2">Semi-Automatique</option>
                            </select>
                        </div>

                      

                        <div className='flex flex-col gap-3'>
                            <label htmlFor="engin_size" className='text-lg text-black font-semibold'>Puissance:</label>
                            <input 
                                type="number" 
                                name='engin_size' 
                                value={inputData.engin_size} 
                                step="0.1" 
                                onChange={inputEvent} 
                                className="px-4 py-1 border-2 border-black" 
                            />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label htmlFor="years" className='text-lg text-black font-semibold'>Année de fabrication:</label>
                            <input 
                                type="number" 
                                name='years' 
                                value={inputData.years} 
                                onChange={inputEvent} 
                                className="px-4 py-1 border-2 border-black" 
                            />
                        </div>

                       
                    </div>


                    <div className='grid grid-cols-3 gap-4 mb-3'>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="doors" className='text-lg text-black font-semibold'>Portes:</label>
                            <input 
                                type="number" 
                                name='doors' 
                                value={inputData.doors} 
                                min="1" 
                                onChange={inputEvent} 
                                className="px-4 py-1 border-2 border-black" 
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="fuel" className='text-lg text-black font-semibold mb-[9px]'>Carburant:</label>
                            <select name="fuel" value={inputData.fuel} onChange={inputEvent} className='mt-1 w-[400px] py-1 px-4 border-black border-2'>
                                <option value="0">Diesel</option>
                                <option value="1">Hybride</option>
                                <option value="2">Électrique</option>
                                <option value="3">Essence</option>
                            </select>
                        </div>
                    </div>

                    <button className='mt-3 float-right bg-blue-600 text-white text-2xl px-5 py-2 hover:bg-black duration-150 cursor-pointer' onClick={sendData}>
                        Valider
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ajouter;
