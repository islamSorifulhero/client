import React from "react";
import Banner from "../components/common/Banner";
import Categories from "../components/common/Categories";
import RecentIssues from "../components/common/RecentIssues";
import CommunitySection from "../components/common/CommunitySection";

const Home = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold text-green-700">Welcome to CleanCity</h1>
      <p className="mt-3 text-gray-600">
        This is your community cleanliness portal.
      </p> */}
      <Banner></Banner>
      <Categories></Categories>
      <RecentIssues></RecentIssues>
      <CommunitySection></CommunitySection>
    </div>
  );
};

export default Home;
