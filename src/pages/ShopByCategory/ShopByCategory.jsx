import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const ShopByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [catToys, setCatToys] = useState([]);

    const resultScienceToy = catToys.filter(toy => toy.sub_category === "Science Toys")
    const resultMathToy = catToys.filter(toy => toy.sub_category === "Math Toys")
    const resultLanguageToy = catToys.filter(toy => toy.sub_category === "Language Toys")

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
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
                    <div className='flex flex-col gap-4'>
                        {
                            resultScienceToy.slice(0, 2).map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            >
                            </CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col gap-4'>
                        {
                            resultMathToy.slice(0, 2).map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            >
                            </CategoryCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col gap-4'>
                        {
                            resultLanguageToy.slice(0, 2).map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            >
                            </CategoryCard>)
                        }
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;