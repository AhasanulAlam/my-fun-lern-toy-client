import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [catToys, setCatToys] = useState([]);

    const resultScienceToy = catToys.filter(toy => toy.sub_category === "Science Toys" )
    const resultMathToy = catToys.filter(toy => toy.sub_category === "Math Toys" )
    const resultLanguageToy = catToys.filter(toy => toy.sub_category === "Language Toys" )

    useEffect(() => {
        fetch('toysData.json')
            .then(res => res.json())
            .then(data => setCatToys(data))
    }, []);

    return (
        <div className='mt-16 mb-32'>
            <h2 className="text-3xl text-center font-bold text-orange-500 mb-8">Shop By Category</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-3xl text-center font-semibold text-gray-400">
                    <Tab>Science Toys</Tab>
                    <Tab>Math Toys</Tab>
                    <Tab>Language Toys</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content of Science Toys</h2>
                    {
                        resultScienceToy.map(toy => <p key={toy._id}>{toy.name}</p>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content of Math Toys</h2>
                    {
                        resultMathToy.map(toy => <p key={toy._id}>{toy.name}</p>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content of Language Toys</h2>
                    {
                        resultLanguageToy.map(toy => <p key={toy._id}>{toy.name}</p>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;