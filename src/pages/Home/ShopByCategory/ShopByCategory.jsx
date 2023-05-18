import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";

const ShopByCategory = () => {
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
                <Tabs>
                    <TabList className="flex">
                        <Tab
                            selectedClassName="sbc-tab-active"
                            className="bg-accent px-4 py-2 cursor-pointer rounded-none outline-none"
                        >
                            Lego City
                        </Tab>
                        <Tab
                            selectedClassName="sbc-tab-active"
                            className="bg-accent px-4 py-2 cursor-pointer rounded-none outline-none"
                        >
                            Lego Star Wars
                        </Tab>
                        <Tab
                            selectedClassName="sbc-tab-active"
                            className="bg-accent px-4 py-2 cursor-pointer rounded-none outline-none"
                        >
                            Lego Cars
                        </Tab>
                    </TabList>
                    <div className="mt-4">
                        <TabPanel>
                            <div className="toys">
                                <div className="toy">
                                    <h2>Police Station</h2>
                                    <img
                                        src="https://i.ibb.co/ZmkxzHP/police-station.jpg"
                                        className="w-40"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h2>Hospital</h2>
                                    <img
                                        src="https://i.ibb.co/s5K5gvz/hospital.jpg"
                                        className="w-40"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;
