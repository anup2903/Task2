import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React ,{useEffect, useState} from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { DataProvider } from "../../components/contexts/DataContext";
// import RequisitionContext from '../../components/contexts/RequisitionContext'
const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};


const HomeLayout = () => {
  const [formData1, setFormData1] = useState({
    requisitionTitle: "",
    noOfOpenings: 0,
    urgency: "",
    gender: "",
  });
  const [formData2, setFormData2] = useState({
    jobTitle: "",
    jobLocation: "",
    jobDetails: "",
  });
  const [formData3, setFormData3] = useState({
    mode: "",
    duration: 0,
    language: "",
  });
  const [activeTab, setActiveTab] = useState(0); 
  // const handleFormChange1 = (updatedData: React.SetStateAction<{ requisitionTitle: string; noOfOpenings: number; urgency: string; gender: string; }>) => {
  //   setFormData1(updatedData);
  //   console.log('changing');
  //   console.log(formData1);
    
    
  // };
  const handleFormChange1 = (updatedData) => {
    setFormData1(updatedData);
  };
  const handleFormChange2 = (updatedData: React.SetStateAction<{ jobTitle: string; jobLocation: string; jobDetails: string; }>) => {
    setFormData2(updatedData);
  };
  const handleFormChange3 = (updatedData: React.SetStateAction<{ mode: string; duration: number; language: string; }>) => {
    setFormData3(updatedData);
  };
  const handleNextTab = () => {
    // Check if the form in the current tab is valid
    if (activeTab === 0) {
      // Check if Requisition Details form is valid before proceeding
      // You can use form validation logic here, for simplicity let's assume it's always valid
      setActiveTab(1); // Move to the next tab
    } else if (activeTab === 1) {
      // Check if Job Details form is valid before proceeding
      // Similarly, add form validation logic here
      setActiveTab(2); // Move to the next tab
    }
    // Add additional else if blocks for more tabs if needed
  };
  // useEffect(() => {
  //   handleFormChange1
  //   handleFormChange1(formData1);
  // }, [formData1]);
  return (
    // <RequisitionContext>
    <DataProvider>
      <Box w="100%">
        <Container maxW="1200px">
          <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
            Create Candidate Requisition
          </Heading>
          <Tabs isLazy defaultIndex={0}>
            <TabList>
              <CustomTab>Requistion Details</CustomTab>
              <CustomTab>Job Details</CustomTab>
              <CustomTab>Interview Settings</CustomTab>
            </TabList>
            <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
              <TabPanels>
                <TabPanel>
                  <RequisitionForm onChange1={handleFormChange1} />
                </TabPanel>
                <TabPanel>
                  <JobDetailsForm onChange2={handleFormChange2} />
                </TabPanel>
                <TabPanel>
                  <InterviewSettingsForm onChange3={handleFormChange3} />
                </TabPanel>
              </TabPanels>
              <DisplayCard
                formData1={formData1}
                formData2={formData2}
                formData3={formData3}
              />
            </Grid>
            <Box textAlign="right" mt="4">
        {/* Show the "Next" button only if it's not the last tab */}
        {activeTab !== 2 && (
          <button  onClick={handleNextTab}>
            Next
          </button>
        )}
      </Box>
          </Tabs>
        </Container>
      </Box>
    </DataProvider>
  );
};

export default HomeLayout;
