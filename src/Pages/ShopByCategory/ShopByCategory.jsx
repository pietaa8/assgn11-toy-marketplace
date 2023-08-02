import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    const {user}=useContext(AuthContext);
    const navigate=useNavigate();
    useEffect(() => {
        fetch('https://assignment-eleven-server-blond.vercel.app/toy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleViewDetails = (toy) => {
        if (!user) {
            alert('You need to Log in first');
            navigate('/login');
        } else {
            navigate(`/toy/${toy._id}`);
        }
    };

    const marvelToys = toys.filter((toy) => toy.subcategory === 'Marvel');
    const starWarsToys = toys.filter((toy) => toy.subcategory === 'Star Wars');
    const transformersToys = toys.filter((toy) => toy.subcategory === 'Transformers');
    return (
        <div>
            <h1 className="text-5xl font-extrabold text-center mt-5 mb-5">Shop By Category</h1>
            <Tabs>
                <TabList className="tab-list-center">
                    <Tab className="tab-item">Marvel</Tab>
                    <Tab className="tab-item">Star Wars</Tab>
                    <Tab className="tab-item">Transformers</Tab>
                </TabList>
                <TabPanel>
          {marvelToys.length >= 2 ? (
            <div className="toy-container">
              {marvelToys.map((toy) => (
                <div key={toy._id} className="toy-card">
                  <img src={toy.picture} className='toy-image' alt="" />
                  <h3 className=' text-red-400 font-extrabold'>Toy: {toy.name}</h3>
                  <p>Price:${toy.price}</p>
                  <p>Rating:{toy.rating}</p>
                  <button className="btn btn-primary"  onClick={()=>handleViewDetails(toy)}>View Details</button>
                </div>
              ))}
            </div>
          ) : (
            <p>No toys available for Marvel category</p>
          )}
        </TabPanel>
                <TabPanel>
          {starWarsToys.length >= 2 ? (
            <div className="toy-container">
              {starWarsToys.map((toy) => (
                <div key={toy._id} className="toy-card">
                  <img src={toy.picture} className='toy-image' alt="" />
                  <h3 className=' text-red-400 font-extrabold'>Toy: {toy.name}</h3>
                  <p>Price:{toy.price}</p>
                  <p>Rating:{toy.rating}</p>
                  <button className="btn btn-primary"  onClick={() => handleViewDetails(toy)}>View Details</button>
                </div>
              ))}
            </div>
          ) : (
            <p>No toys available for Star Wars category</p>
          )}
        </TabPanel>

        <TabPanel>
          {transformersToys.length >= 2 ? (
            <div className="toy-container">
              {transformersToys.map((toy) => (
                <div key={toy._id} className="toy-card">
                  <img src={toy.picture} className='toy-image' alt="" />
                  <h3 className=' text-red-400 font-extrabold'>Name: {toy.name}</h3>
                  <p>Price:{toy.price}</p>
                  <p>Rating:{toy.rating}</p>
                  <button className="btn btn-primary"  onClick={() => handleViewDetails(toy)}>View Details</button>
                </div>
              ))}
            </div>
          ) : (
            <p>No toys available for Transformers category</p>
          )}
        </TabPanel>
               
            </Tabs>


        </div>
    );
};

export default ShopByCategory;