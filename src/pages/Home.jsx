import React from "react";
import Banner from "../components/common/Banner";
import Categories from "../components/common/Categories";
import RecentIssues from "../components/common/RecentIssues";
import CommunitySection from "../components/common/CommunitySection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <RecentIssues></RecentIssues>
      <CommunitySection></CommunitySection>
    </div>
  );
};

export default Home;
