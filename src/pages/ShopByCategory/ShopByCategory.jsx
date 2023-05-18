import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
                </TabPanel>
                <TabPanel>
                    <h2>Any content of Math Toys</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content of Language Toys</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;