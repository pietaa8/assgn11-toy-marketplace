import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css'

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const marvelToys = toys.filter((toy) => toy.subcategory === 'Marvel');
    const starWarsToys = toys.filter((toy) => toy.subcategory === 'Star Wars');
    const transformersToys = toys.filter((toy) => toy.subcategory === 'Transformers');
    return (
        <div>
            <h1 className="text-lg font-extrabold text-center mt-5 mb-5">Shop By Category</h1>
            <Tabs>
                <TabList>
                    <Tab>Marvel</Tab>
                    <Tab>Star Wars</Tab>
                    <Tab>Transformers</Tab>
                </TabList>
                <TabPanel>
          <div className="toy-container">
            {marvelToys.map((toy) => (
              <div key={toy._id} className="toy-card">
                <h3>{toy.name}</h3>
                <p>{toy.description}</p>
                {/* Render other toy details */}
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="toy-container">
            {starWarsToys.map((toy) => (
              <div key={toy._id} className="toy-card">
                <h3>{toy.name}</h3>
                <p>{toy.description}</p>
                {/* Render other toy details */}
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="toy-container">
            {transformersToys.map((toy) => (
              <div key={toy._id} className="toy-card">
                <h3>{toy.name}</h3>
                <p>{toy.description}</p>
                {/* Render other toy details */}
              </div>
            ))}
          </div>
        </TabPanel>
               
            </Tabs>


        </div>
    );
};

export default ShopByCategory;