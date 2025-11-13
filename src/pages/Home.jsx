import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Banner from "../components/common/Banner";
import Categories from "../components/common/Categories";
import RecentIssues from "../components/common/RecentIssues";
import CommunitySection from "../components/common/CommunitySection";
import JoinCleanDrive from "../components/common/JoinCleanDrive";

const Home = () => {
  return (
    <div>
      <div className="text-center py-12 bg-green-50 dark:bg-gray-800 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-green-700 dark:text-green-300 mb-4">
          Welcome to CleanCity
        </h1>

        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          <Typewriter
            words={[
              "Report cleanliness issues easily!",
              "Contribute to a cleaner city!",
              "Join hands for a greener tomorrow!",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Use CleanCity to report garbage, broken roads, and other issues. 
          Together we can make our city clean and green for everyone!
        </p>
      </div>
      <Banner />
      <Categories />
      <RecentIssues />
      <CommunitySection />
      <JoinCleanDrive />
    </div>
  );
};

export default Home;
