import React, { useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import Navbar from "./Navbar";
import JobBlock from "./job_block";

const Job = ({account, setAccount, loggedIn, setLoggedIn, buttonStates, setButtonStates}) => {
  return(
    <div bg='red.400'> 
      <Box>
        <Navbar account={account} setAccount={setAccount} loggedIn={loggedIn} setLoggedIn={setLoggedIn} buttonStates={buttonStates} setButtonStates={setButtonStates}/>
        <Grid templateColumns="repeat(2, 1fr)" gap="6" p="6">
          <JobBlock companyname="Alibaba" email="ai@ali.org" position="frontend" sbtRequired={[1,2]} buttonStates={buttonStates}/>
          <JobBlock companyname="Meituan" email="ai@mt.org" position="backend" sbtRequired={[0,1]} buttonStates={buttonStates}/>
          <JobBlock companyname="Tiktok" email="ai@tiktok.org" position="fullstack" sbtRequired={[0,2]} buttonStates={buttonStates}/>
          <JobBlock companyname="Tencent" email="ai@tencent.org" position="algorithm" sbtRequired={[0,1,2]} buttonStates={buttonStates}/>
        </Grid>
      </Box>
    </div>
    
  )
}

export default Job;

