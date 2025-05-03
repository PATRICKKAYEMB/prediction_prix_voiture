import React, { createContext, useState, useEffect } from 'react';

export const EstimationContext = createContext();

const EstimationProvider = ({ children }) => {
    const [predict, setPredct] = useState([]);
    const [inputData, setInputData] = useState({
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

    const fetchPredict = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/prix/');
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const deletePredict = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/prix/${id}/`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            if (response.ok) {
                try {
                    const data = await response.json();
                    return data;
                } catch {
                    return { success: true }; 
                }
            } else {
                throw new Error("Échec de la suppression");
            }
    
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    };
    

    useEffect(() => {
        const getEstimate = async () => {
            const estimate = await fetchPredict();
            setPredct(estimate);
        };
        getEstimate();
    }, []);

    // Fonction pour ajouter une prédiction au tableau predict
    const addPrediction = (newPrediction) => {
        setPredct(prevPredict => [...prevPredict, newPrediction]);
    };

    const value = {
        inputData,
        setInputData,
        predict,
        setPredct,
        addPrediction, 
        deletePredict,
    };

    return (
        <EstimationContext.Provider value={value}>
            {children}
        </EstimationContext.Provider>
    );
};

export default EstimationProvider;
