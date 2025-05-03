import React, { useContext,useEffect } from 'react'
import { EstimationContext } from '../contex/AppContex'



function Home() {

    const {predict, deletePredict} = useContext(EstimationContext)

    
    useEffect(() => {
     
      console.log("Les prédictions ont été mises à jour", predict);
  }, [predict]); 
  return (
    <div className='px-[4%]'>
        <h3 className='text-3xl text-center text-blue-600 mt-4 mb-4'>Liste des predictions</h3>

        <table className="min-w-full bg-white border border-gray-300">
        <thead>
        <tr className="bg-gray-200">

  
    <th className="py-2 px-4 border border-gray-300">Marque</th>
    <th className="py-2 px-4 border border-gray-300">Puissance du moteur (L)</th>
    <th className="py-2 px-4 border border-gray-300">Boîte de vitesse</th>
    <th className="py-2 px-4 border border-gray-300">carburant</th>
    <th className="py-2 px-4 border border-gray-300">Année de fabrication</th>
    <th className="py-2 px-4 border border-gray-300">Nombre de portes</th>
    <th className="py-2 px-4 border border-gray-300">Kilométrage (km)</th>
    <th className="py-2 px-4 border border-gray-300">Nombre de propriétaires</th>
    <th className="py-2 px-4 border border-gray-300">Estimation du prix $</th>
    <th className="py-2 px-4 border border-gray-300">Estimation du prix Fc</th>
    <th className="py-2 px-4 border border-gray-300">Action</th>
    
</tr>
        </thead>
        <tbody> 
            {

                predict.map((pred)=> 
            <tr key={pred.id}> 
                   
                    <td className="py-3 px-4 border border-gray-300">{pred.brand}</td>
                    <td className="py-3 px-4 border border-gray-300">{pred.engin_size}</td>
                    <td className="py-3 px-4 border border-gray-300">{pred.trasmission}</td>
                    <td className="py-3 px-4 border border-gray-300">{pred.fuel}</td>
                    <td className="py-3 px-4 border border-gray-300">{pred.years}</td>
                    <td className="py-3 px-4 border border-gray-300">{pred.doors}</td>
                    <td className="py-3 px-4 border border-gray-300">{pred.mileager}</td>
                    <td className="py-3 px-4 border border-gray-300">{pred.owner}</td>
                    <td className="py-3 font-bold px-4 border border-gray-300 bg-green-400 text-white text-lg text-center">{pred.prediction} $</td>
                    <td className="py-3 font-bold px-4 border border-gray-300 bg-blue-400 text-white text-lg text-center">{pred.prediction*2880}Fc </td>
                    <button className="py-3 font-bold px-4 border border-gray-300 bg-blue-400 text-white text-lg text-center" onClick={()=>deletePredict(pred.id)}>supprimer</button>
                
                
            </tr>
         )}
           
        </tbody>
    </table>
    </div>
  )
}

export default Home