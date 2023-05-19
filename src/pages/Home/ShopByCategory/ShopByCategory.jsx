import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";
import ToyTab from "./ToyTab";

const ShopByCategory = () => {
    const [tabToys, setTabToys] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [loading, setLoading] = useState(true);

    const shopByCategories = ["Lego City", "Lego Star Wars", "Lego Cars"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `http://localhost:5000/all-toys?sub_category=${shopByCategories[activeTab]}&limit=6`
                );
                const data = await response.json();
                // console.log(data);
                setTabToys(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [activeTab]);

    return (
        <div className="shop-by-category mt-[130px] mx-5">
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Shop By Category</h1>
                        <p className="py-6">
                            Welcome to our Shop By Category section! Discover a
                            world of possibilities as you browse through our
                            carefully curated categories
                        </p>
                    </div>
                </div>
            </div>
            <div className="tabs flex justify-center">
                <Tabs className="w-full max-w-[768px] select-none">
                    <TabList className="flex">
                        <Tab
                            onClick={() => {
                                setActiveTab(0);
                            }}
                            selectedClassName="sbc-tab-active"
                            className="w-full bg-accent px-4 py-2 cursor-pointer rounded-none outline-none rounded-tl-lg rounded-bl-lg"
                        >
                            Lego City
                        </Tab>
                        <Tab
                            onClick={() => {
                                setActiveTab(1);
                            }}
                            selectedClassName="sbc-tab-active"
                            className="w-full bg-accent px-4 py-2 cursor-pointer rounded-none outline-none"
                        >
                            Lego Star Wars
                        </Tab>
                        <Tab
                            onClick={() => {
                                setActiveTab(2);
                            }}
                            selectedClassName="sbc-tab-active"
                            className="w-full bg-accent px-4 py-2 cursor-pointer rounded-none outline-none rounded-tr-lg rounded-br-lg"
                        >
                            Lego Cars
                        </Tab>
                    </TabList>
                    <div className="mt-4">
                        {shopByCategories.map((category, idx) => (
                            <TabPanel key={idx}>
                                {!loading ? (
                                    <div className="toys grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                        {tabToys.map((toy) => (
                                            <ToyTab
                                                key={toy._id}
                                                toy={toy}
                                            ></ToyTab>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex justify-center">
                                            <img
                                                className="w-[100px]"
                                                src="https://i.pinimg.com/originals/fa/87/77/fa87774590186b287a5338d7c87afc0c.gif"
                                                alt=""
                                            />
                                        </div>
                                    </>
                                )}
                            </TabPanel>
                        ))}
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;
